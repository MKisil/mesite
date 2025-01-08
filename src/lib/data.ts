import {
  User,
  ChartNoAxesColumn,
  BriefcaseBusiness,
  Laptop,
} from "lucide-react";

import { StaticImageData } from "next/image";

import GitHubSvg from "@/components/svg/githubSvg";
import LinkedInSvg from "@/components/svg/linkedinSvg";
import TelegramSvg from "@/components/svg/telegramSvg";

import portfolioItem1 from "../../public/home/portfolio1.png";
import portfolioItem2 from "../../public/home/portfolio2.png";
import portfolioItem3 from "../../public/home/portfolio3.png";
import portfolioItem4 from "../../public/home/portfolio4.png";

export interface NavbarItem {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export interface SocialLink {
  href: string; 
  label: string; 
  icon: React.ElementType; 
}

export interface Skill {
    name: string;
}

export interface ProjectItem {
  image: StaticImageData;
  title: string;
  description: string;
  tools: Skill[];
  websiteLink: string;
  codeLink: string;
} 

export interface ChartData {
  month: string;
  commits: number;
}

export const navMenuData: { navbar: NavbarItem[] } = {
  navbar: [
    { href: "#about", icon: User, label: "About me" },
    { href: "#codingStats", icon: ChartNoAxesColumn, label: "Coding stats" },
    { href: "#workExperience", icon: BriefcaseBusiness, label: "Work experience" },
    { href: "#projects", icon: Laptop, label: "My projects" },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/MKisil",
    label: "GitHub",
    icon: GitHubSvg,
  },
  {
    href: "https://www.linkedin.com/in/mikhailok/",
    label: "LinkedIn",
    icon: LinkedInSvg,
  },
  {
    href: "https://t.me/mikhaylo426",
    label: "Telegram",
    icon: TelegramSvg,
  },
];

export const skills: Skill[] = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Django" },
  { name: "Django rest framework" },
  { name: "FastAPI" },
  { name: "Flask" },
  { name: "Docker" },
  { name: "Git/GitHub" },
  { name: "AWS(S3)" },
  { name: "Redis" },
  { name: "PostgreSQL" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "React" },
  { name: "Vue" },
  { name: "Tailwind CSS" }
];

export const freelanceWorkSkills: Skill[] = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "Django" },
  { name: "FastAPI" },
  { name: "React" },
  { name: "OpenaiAPI" },  
]

export const portfolioItems: ProjectItem[] = [
  {
    image: portfolioItem1, 
    title: "CoinYoYo",
    description: "Cryptocurrency tracking website built with a Django backend and an HTML/CSS/JS frontend. It features price graphs for various timeframes, a cryptocurrency converter, and coin sorting by top today or all-time. Integrated with Coinranking and Uniswap APIs, it provides comprehensive coin data.",
    tools: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Django" },
      { name: "REST" },
      { name: "GraphQL" },
    ],
    websiteLink: "https://coinyoyo.io/en/", 
    codeLink: "https://github.com/Naz-va93/YoYo"
  },
  {
    image: portfolioItem2, 
    title: "Blog",
    description: "A blog built with Python Flask, featuring an admin panel for managing articles. It allows adding, editing, and deleting articles, viewing article lists, reading individual posts, and includes a feedback form for user interaction.",
    tools: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Flask" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    websiteLink: "https://mikhailok.pythonanywhere.com/", 
    codeLink: "https://github.com/MKisil/flask_app"
  },
  {
    image: portfolioItem3, 
    title: "Simple Page",
    description: "Fully responsive page made with plain HTML, CSS, and JavaScript.",
    tools: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JS" },
    ],
    websiteLink: "https://mkisil.github.io/simple_page/", 
    codeLink: "https://github.com/MKisil/simple_page"
  },
  {
    image: portfolioItem4, 
    title: "AnyTooLab",
    description: "An app with useful tools like QR code generation, photo format conversion, archiving/unarchiving, fake data generation, and photo cropping. Built with a Django backend and Vue.js frontend, it’s deployed using Docker.",
    tools: [
      { name: "Python" },
      { name: "Django" },
      { name: "Vue.js" },
      { name: "Docker" },
    ],
    websiteLink: "https://anytoollab.site/", 
    codeLink: "https://github.com/AnyToolLab/Backend"
  },
];