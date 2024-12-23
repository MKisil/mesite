"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-work";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";

import { GeistSans } from "geist/font/sans";

export default function Home() {
  const chartData = [
    { month: "January", commits: 5 },
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

  const chartConfig = {
    commits: {
      label: "Commits",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div className={`container ${GeistSans.className}`}>
      <div className="mb-20">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src="" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <p className="leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid
          facere assumenda quis, voluptates labore magnam tempora, corrupti
          suscipit, aperiam aspernatur reiciendis. Tempora officia delectus
          architecto esse, atque repellat error exercitationem nam, minima,
          eligendi vitae eveniet quaerat perspiciatis rerum quis voluptate ut
          voluptates! Dolorem consequuntur, facilis deleniti eum veniam velit.
        </p>
      </div>
      <div className="mb-20">
        <h2 className="scroll-m-20 text-base text-center font-semibold tracking-tight mb-1">
          Skills
        </h2>
        <Separator className="mb-5" />
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Django</Badge>
          <Badge variant="outline">Django rest framework</Badge>
          <Badge variant="outline">FastAPI</Badge>
          <Badge variant="outline">Flask</Badge>
          <Badge variant="outline">Docker</Badge>
          <Badge variant="outline">Git/GitHub</Badge>
          <Badge variant="outline">AWS(S3)</Badge>
          <Badge variant="outline">Redis</Badge>
          <Badge variant="outline">PostgreSQL</Badge>
          <Badge variant="outline">HTML</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="scroll-m-20 text-base text-center font-semibold tracking-tight mb-1">
          Coding Stats
        </h2>
        <Separator className="mb-5" />
        <div className="">
          <ChartContainer config={chartConfig} className="max-h-[130px] w-full">
            <BarChart data={chartData}>
              <Bar dataKey="commits" fill="var(--color-desktop)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div>
        <h2 className="scroll-m-20 text-base text-center font-semibold tracking-tight mb-1">
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
                    <h3 className="text-base leading-7">
                      Python/JavaScript Developer
                    </h3>
                    <p>Freelance(self-employed)</p>
                    <p>July 2023 - present</p>
                  </div>
                  <AccordionContent className="text-muted-foreground">
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
    </div>
  );
}
