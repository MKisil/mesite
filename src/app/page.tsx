import {
  FileUser,
  MapPin,
  Info,
  MonitorSmartphone,
  SquareTerminal,
  Crown,
} from "lucide-react";

import Image from "next/image";

import { geistSans } from "@/app/fonts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionWork";
import { type ChartConfig } from "@/components/ui/chart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartData from "@/components/ui/chartData/chartData";
import BlurFade from "@/components/ui/blur-fade";
import SpotifySvg from "@/components/svg/spotifySvg";
import DockNav from "@/components/layout/dockNav";

import {
  socialLinks,
  skills,
  freelanceWorkSkills,
  portfolioItems,
} from "@/lib/data";

import { blurDelay } from "@/lib/utils/general";
import {
  fetchGithubContributions,
  transformGithubContributionsData,
} from "@/lib/utils/getGithubContributions";

export default async function Home() {
  const githubContributionsbData = await fetchGithubContributions();
  const chartGithubContributionsbData = transformGithubContributionsData(
    githubContributionsbData
  );
  const chartData = chartGithubContributionsbData;

  const chartConfig = {} satisfies ChartConfig;

  return (
    <div className={`container ${geistSans.className}`}>
      <div className="sticky top-0 z-50 w-full flex">
        <div className="relative h-20 sm:h-40 overflow-hidden rounded-b-2xl w-full xl:block">
          <div className="pointer-events-none absolute bottom-0 z-10 h-full w-full overflow-hidden rounded-b-2xl">
            <div className="h-full w-full [filter:url(#fractal-noise-glass)] [background-size:6px_6px] [backdrop-filter:blur(0px)] bg-white/5 dark:bg-black/5"></div>
          </div>
          <svg className="hidden">
            <defs>
              <filter id="fractal-noise-glass">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.05 0.05"
                  numOctaves="1"
                  result="warp"
                />
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  scale="50"
                  in="SourceGraphic"
                  in2="warp"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <main className="mt-[10px] md:mt-[20px]">
        <div className="mb-20">
          <BlurFade delay={blurDelay}>
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </BlurFade>
          <div className="mb-3">
            <BlurFade delay={blurDelay}>
              <h4 className="inline-flex items-center flex-wrap leading-[19px] responsive-text-base mb-1 gap-1">
                Mikhailok - Full-Stack Web Developer based in
                <span className="leading-[19px] inline-flex items-start">
                  <MapPin className="stroke-[hsl(var(--primary))] inline w-4 h-4" />
                  Lviv, Ukraine
                </span>
              </h4>
            </BlurFade>
            <div className="flex gap-2">
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger>
                    <BlurFade delay={blurDelay}>
                      <a className="a-outline-button [&_svg]:size-6 p-0 h-9 w-20 transition-colors duration-300">
                        <FileUser
                          className="stroke-[hsl(var(--primary))]"
                          strokeWidth={1.3}
                        />
                        CV
                      </a>
                    </BlurFade>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className={`${geistSans.className}`}>Download my CV</p>
                  </TooltipContent>
                </Tooltip>
                {socialLinks.map((link, index) => (
                  <Tooltip key={link.label}>
                    <TooltipTrigger>
                      <BlurFade delay={blurDelay * (index + 1)}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="a-outline-button [&_svg]:size-6 p-0 h-9 w-9 group"
                        >
                          <link.icon className="fill-[hsl(var(--primary))] transition-colors duration-300" />
                        </a>
                      </BlurFade>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className={`${geistSans.className}`}>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
          <div className="mb-5">
            <BlurFade delay={blurDelay}>
              <p className="text-muted-foreground responsive-text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                aliquid facere assumenda quis, voluptates labore magnam tempora,
                corrupti suscipit, aperiam aspernatur reiciendis. Tempora
                officia delectus architecto esse, atque repellat error
                exercitationem nam, minima, eligendi vitae eveniet quaerat
                perspiciatis rerum quis voluptate ut voluptates! Dolorem
                consequuntur, facilis deleniti eum veniam velit.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={blurDelay * 3}>
            <div className="flex items-center gap-2 rounded-md px-5 py-3 bg-border/40">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#37AFE1]" />
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4CC9FE] opacity-75" />
                  </div>
                  <div className="absolute -inset-4 rounded-full blur-xl bg-[#4CC9FE] opacity-20" />
                </div>
              </div>
              <div className="flex items-center text-sm text-[#282A3A] dark:text-[#fafafa]">
                listening to music on spotify
                <SpotifySvg className="inline ml-1" width={24} height={24} />
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="mb-20">
          <BlurFade delay={blurDelay}>
            <h2 className="scroll-m-20 responsive-text-lg text-center tracking-tight mb-1 font-medium">
              Skills
            </h2>
            <Separator className="mb-5" />
          </BlurFade>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <BlurFade delay={blurDelay * (index + 1)} key={skill.name}>
                <Badge variant="outline" className="font-medium">
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <BlurFade delay={blurDelay}>
            <h2 className="scroll-m-20 responsive-text-lg text-center tracking-tight mb-1 font-medium">
              Coding Stats
            </h2>
            <Separator className="mb-5" />
          </BlurFade>
          <div className="">
            <BlurFade delay={blurDelay}>
              <div className="flex justify-end mb-2">
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info width={15} height={15} stroke="#09090b" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className={`${geistSans.className}`}>
                        This information is taken from my{" "}
                        <a
                          href="https://github.com/MKisil"
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://wakatime.com/@mikhailok"
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WakaTime
                        </a>{" "}
                        profiles.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </BlurFade>
            <ChartData config={chartConfig} data={chartData} />
            <div className="flex flex-col gap-2.5 sm:grid sm:grid-rows-2">
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <BlurFade delay={blurDelay * 3}>
                  <Card className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="font-medium responsive-text-base">
                        Most used tools
                      </CardTitle>
                      <CardDescription>
                        I frequently use various technologies in my projects.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm flex flex-col gap-1.5">
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          Python (37%){" "}
                          <Crown
                            strokeWidth={1.5}
                            stroke="#FAB12F"
                            className="size-4 ml-1"
                          />
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          TypeScript (25%)
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          JavaScript (20%)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
                <BlurFade delay={blurDelay * 4}>
                  <Card className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="font-medium responsive-text-base">
                        Most used tools
                      </CardTitle>
                      <CardDescription>
                        I frequently use various technologies in my projects.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm flex flex-col gap-1.5">
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          Python (37%){" "}
                          <Crown
                            strokeWidth={1.5}
                            stroke="#FAB12F"
                            className="size-4 ml-1"
                          />
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          TypeScript (25%)
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          JavaScript (20%)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>
              <div>
                <BlurFade delay={blurDelay * 5}>
                  <Card className="transition-transform duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="font-medium responsive-text-base">
                        Most used tools
                      </CardTitle>
                      <CardDescription>
                        I frequently use various technologies in my projects.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm flex flex-col gap-1.5">
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          Python (37%){" "}
                          <Crown
                            strokeWidth={1.5}
                            stroke="#FAB12F"
                            className="size-4 ml-1"
                          />
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          TypeScript (25%)
                        </span>
                        <span className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]">
                          JavaScript (20%)
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <BlurFade delay={blurDelay}>
            <h2 className="scroll-m-20 responsive-text-lg text-center tracking-tight mb-1 font-medium">
              Work Experience
            </h2>
            <Separator className="mb-5" />
          </BlurFade>
          <BlurFade delay={blurDelay * 2}>
            <div className="flex gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="" />
                <AvatarFallback>SF</AvatarFallback>
              </Avatar>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mb-7">
                    <div className="flex flex-col font-normal leading-4">
                      <div className="mb-5">
                        <h3 className="text-base leading-7 font-medium responsive-text-base">
                          Freelance(self-employed)
                        </h3>
                        <p className="text-muted-foreground">
                          Python/JavaScript Developer
                        </p>
                        <p className="text-muted-foreground">
                          July 2023 - present
                        </p>
                      </div>
                      <AccordionContent className="">
                        <ul className="ml-6 list-disc [&>li:not(:first-child)]:mt-2">
                          <li>
                            Developed and maintained web applications with
                            backend on Django/FastAPI and frontend on React or
                            vanilla HTML/CSS/JS.
                          </li>
                          <li>
                            Wrote scripts for task automation, developed
                            telegram bots.
                          </li>
                          <li>Deployed web applications/telegram bots.</li>
                        </ul>
                      </AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        {freelanceWorkSkills.map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="font-medium"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
          </BlurFade>
        </div>
        <div className="mb-20">
          <BlurFade delay={blurDelay}>
            <h2 className="scroll-m-20 responsive-text-lg text-center tracking-tight mb-1 font-medium">
              My Projects
            </h2>
            <Separator className="mb-5" />
          </BlurFade>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 justify-items-center">
              {portfolioItems.map((item, index) => (
                <BlurFade delay={blurDelay * (index + 1)} key={item.title}>
                  <Card className="flex-1 overflow-hidden transition-transform duration-300 hover:scale-[1.02] max-w-72 sm:max-w-none">
                    <Image src={item.image} alt="Project" />
                    <CardHeader className="pb-3">
                      <CardTitle className="font-medium responsive-text-base">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-1 mb-3">
                      {item.tools.map((tool) => (
                        <Badge
                          key={tool.name}
                          variant="outline"
                          className="font-medium"
                        >
                          {tool.name}
                        </Badge>
                      ))}
                    </CardContent>
                    <CardFooter className="flex gap-1.5 justify-center">
                      <Button className="h-auto px-3.5 py-2">
                        <a
                          className="flex w-full text-xs gap-1 items-center"
                          href={item.websiteLink}
                        >
                          <MonitorSmartphone className="stroke-[hsl(var(--primary-foreground))]" />
                          Website
                        </a>
                      </Button>
                      <Button variant="outline" className="h-auto px-3.5 py-2">
                        <a
                          className="flex w-full text-xs gap-1 items-center"
                          href={item.codeLink}
                        >
                          <SquareTerminal className="stroke-[hsl(var(--primary))]" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
        <DockNav></DockNav>
      </main>
    </div>
  );
}
