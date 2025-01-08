import { revalidate } from "./general";

type StatItem =
    {
      name: string;
      text: string;
      percent: number;
    }


const fetchWakatimeProfileData = async (): Promise<Record<string, any>> => {
  const headers = { Authorization: `Basic ${process.env.WAKATIME_API_KEY ?? ""}` }

  try {
    const response = await fetch("https://wakatime.com/api/v1/users/current/stats", {next: { revalidate: revalidate }, method: 'GET', headers });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data: {} = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching wakatime data:', error);
    return {};
  }
}

const getTopTools = (wakaTimeProfileData: Record<string, any>, count: number = 3): StatItem[] => {
    const languages = wakaTimeProfileData.data.languages;
    return languages
        .sort((a: { percent: number; }, b: { percent: number; }) => b.percent - a.percent) 
        .slice(0, count) 
        .map((language: { name: string; percent: number }) => ({
            name: language.name,
            text: language.name,
            percent: language.percent,
        }));
}

const getTopEditors = (wakaTimeProfileData: Record<string, any>, count: number = 3): StatItem[] => {
    const editors = wakaTimeProfileData.data.editors;
    return editors
        .sort((a: { percent: number; }, b: { percent: number; }) => b.percent - a.percent) 
        .slice(0, count) 
        .map((editor: { name: string; percent: number }) => ({
            name: editor.name,
            text: editor.name,
            percent: editor.percent,
        }));
}

const getTopOperatingSystems = (wakaTimeProfileData: Record<string, any>, count: number = 3): StatItem[] => {
    const operatingSystems = wakaTimeProfileData.data.operating_systems;
    return operatingSystems
        .sort((a: { percent: number; }, b: { percent: number; }) => b.percent - a.percent) 
        .slice(0, count) 
        .map((os: { name: string; percent: number }) => ({
            name: os.name,
            text: os.name,
            percent: os.percent,
        }));
}

export { fetchWakatimeProfileData, getTopTools, getTopEditors, getTopOperatingSystems };