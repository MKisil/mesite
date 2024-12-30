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
    { href: "#", icon: User, label: "About me" },
    { href: "#", icon: ChartNoAxesColumn, label: "Coding stats" },
    { href: "#", icon: BriefcaseBusiness, label: "Work experience" },
    { href: "#", icon: Laptop, label: "My projects" },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com",
    label: "GitHub",
    icon: GitHubSvg,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: LinkedInSvg,
  },
  {
    href: "https://telegram.org",
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
    title: "Most used tools",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, cumque cupiditate facilis ipsam assumenda aut ad quos nulla perferendis quibusdam.",
    tools: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Django" },
      { name: "FastAPI" },
    ],
    websiteLink: "/portfolio1", 
    codeLink: "/portfolio1/code"
  },
  {
    image: portfolioItem1, 
    title: "Most used tools",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, cumque cupiditate facilis ipsam assumenda aut ad quos nulla perferendis quibusdam.",
    tools: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Django" },
      { name: "FastAPI" },
    ],
    websiteLink: "/portfolio1", 
    codeLink: "/portfolio1/code"
  },
  {
    image: portfolioItem1, 
    title: "Most used tools",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, cumque cupiditate facilis ipsam assumenda aut ad quos nulla perferendis quibusdam.",
    tools: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Django" },
      { name: "FastAPI" },
    ],
    websiteLink: "/portfolio1", 
    codeLink: "/portfolio1/code"
  },
];