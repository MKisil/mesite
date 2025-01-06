import {
  type ChartConfig,
} from "@/components/ui/chart";

interface DataPoint {
    label: string | number;
    value: string | number;
}

interface ChartDataProps {
    config: ChartConfig;
    data: DataPoint[];
}

export type { ChartDataProps };
