import { GraphQLClient } from "graphql-request";

const endpoint = "https://api.github.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
  },
});

const query = `
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

export async function fetchGithubContributions() {
  const variables = { userName: process.env.GITHUB_USERNAME };
  try {
    const data: { user: { contributionsCollection: { contributionCalendar: any } } } = await graphQLClient.request(query, variables);
    return data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching github contributions:", error);
    throw error;
  }
};

function getPast12Months(): string[] {
  const months: string[] = [];
  const currentDate = new Date();
  for (let i = 0; i < 12; i++) {
    const month = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    months.unshift(
      `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`
    );
  }
  return months;
}

export function transformGithubContributionsData(data: any): { label: string; value: number }[] {
  const past12Months = getPast12Months();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const monthlyContributions: Record<string, number> = {};
  past12Months.forEach((month) => {
    monthlyContributions[month] = 0;
  });

  for (const week of data.weeks) {
    for (const day of week.contributionDays) {
      const date = new Date(day.date);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      if (monthlyContributions[monthKey] !== undefined) {
        monthlyContributions[monthKey] += day.contributionCount;
      }
    }
  }

  return past12Months.map((month) => {
    const [year, monthIndex] = month.split("-");
    const monthName = monthNames[parseInt(monthIndex, 10) - 1];
    return { label: monthName, value: monthlyContributions[month] || 0 };
  });
}