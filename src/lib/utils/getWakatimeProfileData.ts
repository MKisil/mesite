import { revalidate } from "./general";

interface WakaTimeStats {
  data: {
    languages: Array<{
      name: string;
      percent: number;
      total_seconds: number;
    }>;
    editors: Array<{
      name: string;
      percent: number;
      total_seconds: number;
    }>;
    operating_systems: Array<{
      name: string;
      percent: number;
      total_seconds: number;
    }>;
  };
}

interface StatItem {
  name: string;
  text: string;
  percent: number;
}

const fetchWakatimeProfileData = async (): Promise<WakaTimeStats> => {
  const headers = { Authorization: `Basic ${process.env.WAKATIME_API_KEY ?? ""}` };

  try {
    const response = await fetch("https://wakatime.com/api/v1/users/current/stats", {
      next: { revalidate },
      method: 'GET',
      headers
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json() as WakaTimeStats;
    return data;
  } catch (error) {
    console.error('Error fetching wakatime data:', error);
    return {
      data: {
        languages: [],
        editors: [],
        operating_systems: []
      }
    };
  }
};

const getTopTools = (wakaTimeStats: WakaTimeStats, count = 3): StatItem[] => {
  return wakaTimeStats.data.languages
    .sort((a, b) => b.percent - a.percent)
    .slice(0, count)
    .map((language) => ({
      name: language.name,
      text: language.name,
      percent: language.percent,
    }));
};

const getTopEditors = (wakaTimeStats: WakaTimeStats, count = 3): StatItem[] => {
  return wakaTimeStats.data.editors
    .sort((a, b) => b.percent - a.percent)
    .slice(0, count)
    .map((editor) => ({
      name: editor.name,
      text: editor.name,
      percent: editor.percent,
    }));
};

const getTopOperatingSystems = (wakaTimeStats: WakaTimeStats, count = 3): StatItem[] => {
  return wakaTimeStats.data.operating_systems
    .sort((a, b) => b.percent - a.percent)
    .slice(0, count)
    .map((os) => ({
      name: os.name,
      text: os.name,
      percent: os.percent,
    }));
};

export { 
  fetchWakatimeProfileData, 
  getTopTools, 
  getTopEditors, 
  getTopOperatingSystems,
  type WakaTimeStats,
  type StatItem 
};