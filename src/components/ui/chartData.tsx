"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import BlurFade from "@/components/ui/blur-fade";
import { blurDelay } from "@/lib/utils/general";
import { type ChartConfig } from "@/components/ui/chart";

interface DataPoint {
  label: string | number;
  value: string | number;
}

interface ChartDataProps {
  config: ChartConfig;
  card1Title: string;
  card1Content: string;
  card2Title: string;
  card2Content: string;
  data: DataPoint[];
}

export default function ChartData({
  config,
  card1Title,
  card1Content,
  card2Title,
  card2Content,
  data,
}: ChartDataProps) {
  return (
    <div className="mb-6">
      <BlurFade delay={blurDelay * 2}>
        <div className="flex justify-around mb-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted-foreground">{card1Title}</span>
            <span className="text-lg font-bold leading-none sm:text-xl">
              {card1Content}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted-foreground">{card2Title}</span>
            <span className="text-lg font-bold leading-none sm:text-xl">
              {card2Content}
            </span>
          </div>
        </div>
        <ChartContainer
          config={config}
          className="min-h-[130px] max-h-[130px] w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-transparent"
        >
          <BarChart accessibilityLayer data={data}>
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
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
  );
}
