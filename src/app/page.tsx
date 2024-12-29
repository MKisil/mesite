"use client";

import {
  FileUser,
  MapPin,
  Info,
  MonitorSmartphone,
  SquareTerminal,
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Bar, BarChart, XAxis } from "recharts";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";

// import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
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

import GitHubSvg from "@/components/svg/githubSvg";
import LinkedInSvg from "@/components/svg/linkedinSvg";
import TelegramSvg from "@/components/svg/telegramSvg";
import SpotifySvg from "@/components/svg/spotifySvg";
import portfolioItem1 from "../../public/home/portfolio1.png";

export default function Home() {
  const navMenuData = {
    navbar: [
      { href: "#", icon: HomeIcon, label: "Home" },
      { href: "#", icon: PencilIcon, label: "Blog" },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "#",
          icon: GitHubSvg,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "#",
          icon: LinkedInSvg,
        },
        X: {
          name: "X",
          url: "#",
          icon: TelegramSvg,
        },
        email: {
          name: "Send Email",
          url: "#",
          icon: MailIcon,
        },
      },
    },
  };
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
      <div className="mb-20">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="mb-3">
          <h4 className="flex items-center">
            Mikhailo Kisil - Full-Stack Web Developer based in
            <MapPin stroke="#09090b" className="inline w-4 h-4 ml-1" /> Lviv,
            Ukraine
          </h4>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a className="a-outline-button [&_svg]:size-6 p-0 h-9 w-20 text-[#555555] hover:text-[#09090b] transition-colors duration-300">
                    <FileUser className="stroke-current" />
                    CV
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${GeistSans.className}`}>Download my CV</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a className="a-outline-button [&_svg]:size-6 p-0 h-9 w-9 group">
                    <GitHubSvg className="fill-[#555555] group-hover:fill-[#09090b] transition-colors duration-300" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${GeistSans.className}`}>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a className="a-outline-button [&_svg]:size-6 p-0 h-9 w-9 group">
                    <LinkedInSvg className="fill-[#555555] group-hover:fill-[#09090b] transition-colors duration-300" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${GeistSans.className}`}>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a className="a-outline-button [&_svg]:size-6 p-0 h-9 w-9 group">
                    <TelegramSvg className="fill-[#555555] group-hover:fill-[#09090b] transition-colors duration-300" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${GeistSans.className}`}>Telegram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mb-5">
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            aliquid facere assumenda quis, voluptates labore magnam tempora,
            corrupti suscipit, aperiam aspernatur reiciendis. Tempora officia
            delectus architecto esse, atque repellat error exercitationem nam,
            minima, eligendi vitae eveniet quaerat perspiciatis rerum quis
            voluptate ut voluptates! Dolorem consequuntur, facilis deleniti eum
            veniam velit.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md px-5 py-3 bg-[#f4f4f5]">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F1C27B]" />
              <div className="absolute inset-0 animate-ping">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD89C] opacity-75" />
              </div>
              <div className="absolute -inset-4 rounded-full blur-xl bg-[#FFD89C] opacity-20" />
            </div>
          </div>
          <div className="flex items-center text-sm text-[#555555]">
            <span>
              listening to music on{" "}
              <span className="text-[#282A3A]">spotify</span>
            </span>
            <SpotifySvg className="inline ml-1" width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="scroll-m-20 text-lg text-center tracking-tight mb-1 font-medium">
          Skills
        </h2>
        <Separator className="mb-5" />
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="outline" className="font-medium">
            Python
          </Badge>
          <Badge variant="outline" className="font-medium">
            JavaScript
          </Badge>
          <Badge variant="outline" className="font-medium">
            TypeScript
          </Badge>
          <Badge variant="outline" className="font-medium">
            Django
          </Badge>
          <Badge variant="outline" className="font-medium">
            Django rest framework
          </Badge>
          <Badge variant="outline" className="font-medium">
            FastAPI
          </Badge>
          <Badge variant="outline" className="font-medium">
            Flask
          </Badge>
          <Badge variant="outline" className="font-medium">
            Docker
          </Badge>
          <Badge variant="outline" className="font-medium">
            Git/GitHub
          </Badge>
          <Badge variant="outline" className="font-medium">
            AWS(S3)
          </Badge>
          <Badge variant="outline" className="font-medium">
            Redis
          </Badge>
          <Badge variant="outline" className="font-medium">
            PostgreSQL
          </Badge>
          <Badge variant="outline" className="font-medium">
            HTML
          </Badge>
          <Badge variant="outline" className="font-medium">
            CSS
          </Badge>
          <Badge variant="outline" className="font-medium">
            React
          </Badge>
          <Badge variant="outline" className="font-medium">
            Tailwind CSS
          </Badge>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="scroll-m-20 text-lg text-center tracking-tight mb-1 font-medium">
          Coding Stats
        </h2>
        <Separator className="mb-5" />
        <div className="">
          <div className="flex justify-end mb-2">
            <TooltipProvider>
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
          <div className="mb-6">
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
              className="min-h-[130px] max-h-[130px] w-full"
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
                  fill="#282A3A"
                  radius={4}
                  stroke="#09090b"
                  strokeWidth={1}
                />
              </BarChart>
            </ChartContainer>
            <div>
              <div className="flex justify-center gap-1 mt-1.5">
                <span className="text-xs">Past year activity</span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2.5">
            <div className="flex gap-2.5">
              <Card className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="font-medium">Most used tools</CardTitle>
                  <CardDescription>
                    I frequently use various technologies in my projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm flex flex-col gap-1.5">
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      Python (37%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      TypeScript (25%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      JavaScript (20%)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="font-medium">Most used tools</CardTitle>
                  <CardDescription>
                    I frequently use various technologies in my projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm flex flex-col gap-1.5">
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      Python (37%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      TypeScript (25%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      JavaScript (20%)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="font-medium">Most used tools</CardTitle>
                  <CardDescription>
                    I frequently use various technologies in my projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm flex flex-col gap-1.5">
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      Python (37%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      TypeScript (25%)
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-medium text-xs w-fit"
                    >
                      JavaScript (20%)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="scroll-m-20 text-lg text-center tracking-tight mb-1 font-medium">
          Work Experience
        </h2>
        <Separator className="mb-5" />
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
                    <h3 className="text-base leading-7 font-medium">
                      Freelance(self-employed)
                    </h3>
                    <p className="text-muted-foreground">
                      Python/JavaScript Developer
                    </p>
                    <p className="text-muted-foreground">July 2023 - present</p>
                  </div>
                  <AccordionContent className="">
                    <ul className="ml-6 list-disc [&>li:not(:first-child)]:mt-2">
                      <li>
                        Developed and maintained web applications with backend
                        on Django/FastAPI and frontend on React or vanilla
                        HTML/CSS/JS.
                      </li>
                      <li>
                        Wrote scripts for task automation, developed telegram
                        bots.
                      </li>
                      <li>Deployed web applications/telegram bots.</li>
                    </ul>
                  </AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="font-medium">
                      Python
                    </Badge>
                    <Badge variant="outline" className="font-medium">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="font-medium">
                      Django
                    </Badge>
                    <Badge variant="outline" className="font-medium">
                      FastAPI
                    </Badge>
                    <Badge variant="outline" className="font-medium">
                      React
                    </Badge>
                    <Badge variant="outline" className="font-medium">
                      OpenaiAPI
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="scroll-m-20 text-lg text-center tracking-tight mb-1 font-medium">
          My Projects
        </h2>
        <Separator className="mb-5" />
        <div>
          <div className="grid grid-cols-2 gap-2.5">
            <Card className="flex-1 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src={portfolioItem1} alt="Project" />
              <CardHeader className="pb-3">
                <CardTitle className="font-medium">Most used tools</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum, cumque cupiditate facilis ipsam assumenda aut ad quos
                  nulla perferendis quibusdam.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="font-medium">
                  Django
                </Badge>
                <Badge variant="outline" className="font-medium">
                  FastAPI
                </Badge>
                <Badge variant="outline" className="font-medium">
                  React
                </Badge>
                <Badge variant="outline" className="font-medium">
                  OpenaiAPI
                </Badge>
              </CardContent>
              <CardFooter className="flex gap-1.5">
                <Button className="w-full text-sm bg-[#282A3A]">
                  <MonitorSmartphone stroke="#fff" />
                  Website
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <SquareTerminal stroke="#09090b" />
                  Code
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src={portfolioItem1} alt="Project" />
              <CardHeader className="pb-3">
                <CardTitle className="font-medium">Most used tools</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum, cumque cupiditate facilis ipsam assumenda aut ad quos
                  nulla perferendis quibusdam.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="font-medium">
                  Django
                </Badge>
                <Badge variant="outline" className="font-medium">
                  FastAPI
                </Badge>
                <Badge variant="outline" className="font-medium">
                  React
                </Badge>
                <Badge variant="outline" className="font-medium">
                  OpenaiAPI
                </Badge>
              </CardContent>
              <CardFooter className="flex gap-1.5">
                <Button className="w-full text-sm bg-[#282A3A]">
                  <MonitorSmartphone stroke="#fff" />
                  Website
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <SquareTerminal stroke="#09090b" />
                  Code
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src={portfolioItem1} alt="Project" />
              <CardHeader className="pb-3">
                <CardTitle className="font-medium">Most used tools</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum, cumque cupiditate facilis ipsam assumenda aut ad quos
                  nulla perferendis quibusdam.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="font-medium">
                  Django
                </Badge>
                <Badge variant="outline" className="font-medium">
                  FastAPI
                </Badge>
                <Badge variant="outline" className="font-medium">
                  React
                </Badge>
                <Badge variant="outline" className="font-medium">
                  OpenaiAPI
                </Badge>
              </CardContent>
              <CardFooter className="flex gap-1.5">
                <Button className="w-full text-sm bg-[#282A3A]">
                  <MonitorSmartphone stroke="#fff" />
                  Website
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <SquareTerminal stroke="#09090b" />
                  Code
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src={portfolioItem1} alt="Project" />
              <CardHeader className="pb-3">
                <CardTitle className="font-medium">Most used tools</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum, cumque cupiditate facilis ipsam assumenda aut ad quos
                  nulla perferendis quibusdam.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="font-medium">
                  Django
                </Badge>
                <Badge variant="outline" className="font-medium">
                  FastAPI
                </Badge>
                <Badge variant="outline" className="font-medium">
                  React
                </Badge>
                <Badge variant="outline" className="font-medium">
                  OpenaiAPI
                </Badge>
              </CardContent>
              <CardFooter className="flex gap-1.5">
                <Button className="w-full text-sm bg-[#282A3A]">
                  <MonitorSmartphone stroke="#fff" />
                  Website
                </Button>
                <Button className="w-full text-sm" variant="outline">
                  <SquareTerminal stroke="#09090b" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <TooltipProvider>
          <Dock
            direction="bottom"
            iconSize={30}
            iconMagnification={50}
            iconDistance={80}
            className="bg-white shadow h-12"
          >
            {navMenuData.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-6" stroke="#09090b" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {Object.entries(navMenuData.contact.social).map(
              ([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full"
                        )}
                      >
                        <social.icon className="size-4" fill="#0" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              )
            )}
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* <ModeToggle className="rounded-full" /> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}
