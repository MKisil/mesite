"use client";

import { useEffect, useState } from "react";

import {
  FileUser,
  MapPin,
  Info,
  MonitorSmartphone,
  SquareTerminal,
  HomeIcon,
  PencilIcon,
  Sun,
  Telescope,
  Crown,
  Search,
  Command as CommandIcon,
} from "lucide-react";

import Image from "next/image";

import { Bar, BarChart, XAxis } from "recharts";
import { GeistSans } from "geist/font/sans";

import { Dock, DockIcon } from "@/components/ui/dock";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-work";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
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

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { DialogTitle } from "@/components/ui/dialog";

import BlurFade from "@/components/ui/blur-fade";

import SpotifySvg from "@/components/svg/spotifySvg";

import {
  navMenuData,
  socialLinks,
  skills,
  freelanceWorkSkills,
  portfolioItems,
} from "@/lib/data";

import { blurDelay } from "@/lib/utils";

import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  const [openCommand, setOpenCommand] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      console.log("open");
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommand((openCommand) => !openCommand);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const chartData = [
    { month: "January", commits: 15 },
    { month: "February", commits: 305 },
    { month: "March", commits: 237 },
    { month: "April", commits: 73 },
    { month: "May", commits: 209 },
    { month: "June", commits: 214 },
    { month: "July", commits: 186 },
    { month: "August", commits: 305 },
    { month: "September", commits: 237 },
    { month: "October", commits: 73 },
    { month: "November", commits: 209 },
    { month: "December", commits: 214 },
  ];

  const chartConfig = {} satisfies ChartConfig;

  return (
    <div className={`container ${GeistSans.className}`}>
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
                    <p className={`${GeistSans.className}`}>Download my CV</p>
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
                      <p className={`${GeistSans.className}`}>{link.label}</p>
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
                      <p className={`${GeistSans.className}`}>
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
            <div className="mb-6">
              <BlurFade delay={blurDelay * 2}>
                <div className="flex justify-around mb-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground">
                      Total repositories
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-xl">
                      19
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground">
                      Contibutions last year
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-xl">
                      453
                    </span>
                  </div>
                </div>
                <ChartContainer
                  config={chartConfig}
                  className="min-h-[130px] max-h-[130px] w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-transparent"
                >
                  <BarChart data={chartData}>
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="commits"
                      fill="var(--chart-6)"
                      radius={4}
                      stroke="var(--chart-6)"
                    />
                  </BarChart>
                </ChartContainer>
                <div>
                  <div className="flex justify-center gap-1 mt-1.5">
                    <span className="text-xs">Past year activity</span>
                  </div>
                </div>
              </BlurFade>
            </div>
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
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
          <TooltipProvider delayDuration={300}>
            <BlurFade delay={blurDelay}>
              <Dock
                direction="bottom"
                iconSize={30}
                iconMagnification={50}
                iconDistance={90}
                className="bg-[white] dark:bg-[#131313] dark:border-[#212121] shadow h-12"
              >
                <Button
                  variant="secondary"
                  className="flex items-center h-full text-xs bg-black/10 dark:bg-white/10 text-muted-foreground px-2 py-3"
                  onClick={() => setOpenCommand(true)}
                >
                  <Search className="md:hidden" />
                  <span className="hidden md:block">Search...</span>
                  <kbd className="pointer-events-none text-[10px] font-light gap-1 rounded opacity-100 border bg-muted px-1.5 hidden md:flex items-center">
                    <CommandIcon strokeWidth={1.5} className="size-4" />
                    <span>K</span>
                  </kbd>
                </Button>
                <Separator orientation="vertical" className="h-full" />
                {navMenuData.navbar.map((item) => (
                  <DockIcon
                    key={item.label}
                    className="hover:bg-black/10 hover:dark:bg-white/10"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <item.icon className="size-full stroke-[hsl(var(--primary))]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10">
                  <Tooltip>
                    <TooltipTrigger
                      asChild
                      onClick={() =>
                        setTheme((prevTheme) =>
                          prevTheme === "dark" ? "light" : "dark"
                        )
                      }
                    >
                      <Sun className="size-full stroke-[hsl(var(--primary))]" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle theme</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              </Dock>
            </BlurFade>
          </TooltipProvider>
        </div>
      </main>
      <div>
        <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
          <DialogTitle className="sr-only">Command Dialog</DialogTitle>
          <CommandInput
            className={`${GeistSans.className}`}
            placeholder="Type a command or search..."
          />
          <CommandList className={`${GeistSans.className}`}>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem className="!py-2.5 hover:cursor-pointer">
                <FileUser
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                CV
              </CommandItem>
              <CommandItem className="!py-2.5 hover:cursor-pointer">
                <HomeIcon
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Home
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Other pages">
              <CommandItem className="!py-2.5">
                <PencilIcon
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Blog(in development)
              </CommandItem>
              <CommandItem className="!py-2.5">
                <Telescope
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Hobby(in development)
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  );
}
