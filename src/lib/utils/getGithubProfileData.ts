import { revalidate } from "./general";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

type GithubResponse = {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  };
};

type TransformedContribution = {
  label: string;
  value: number;
};

const CONTRIBUTIONS_QUERY = `
  query($userName: String!) { 
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
] as const;

const fetchGithubContributions = async (): Promise<ContributionCalendar> => {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      next: { revalidate: revalidate },
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: {
          userName: process.env.GITHUB_USERNAME,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json(); 
    
    return data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    throw error;
  }
};

const generateMonthKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

const getPast12Months = (): string[] => {
  const currentDate = new Date();
  return Array.from({ length: 12 }, (_, i) => {
    const month = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    return generateMonthKey(month);
  }).reverse();
};

const transformGithubContributionsData = (
  data: ContributionCalendar
): TransformedContribution[] => {
  const past12Months = getPast12Months();
  const monthlyContributions = past12Months.reduce<Record<string, number>>(
    (acc, month) => ({ ...acc, [month]: 0 }),
    {}
  );

  data.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      const monthKey = generateMonthKey(new Date(day.date));
      if (monthKey in monthlyContributions) {
        monthlyContributions[monthKey] += day.contributionCount;
      }
    });
  });

  return past12Months.map(month => {
    const [, monthIndex] = month.split("-");
    return {
      label: MONTH_NAMES[parseInt(monthIndex, 10) - 1],
      value: monthlyContributions[month],
    };
  });
};

const totalGithubContributions = (data: ContributionCalendar): number => {
  return data.totalContributions;
}

const totalGithubRepositories = async (): Promise<number> => {
  const headers = { Authorization: `token ${process.env.GITHUB_API_KEY ?? ""}` };

  try {
    const response = await fetch('https://api.github.com/user/repos?type=owner', {
      next: { revalidate: revalidate },
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: [] = await response.json();
    return data.length; 
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return 0;
  }
};

export { fetchGithubContributions, transformGithubContributionsData, totalGithubContributions, totalGithubRepositories };