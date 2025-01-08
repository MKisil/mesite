import React from "react";
import { Crown } from "lucide-react";

type StatItem = {
  name: string;
  text?: string;
  percent: number;
};

interface StatsBadgeListProps {
  items: StatItem[];
  showCrown?: boolean;
}

export default function StatsBadgeList({
  items,
  showCrown = true,
}: StatsBadgeListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <span
          key={item.name}
          className="inline-flex items-end rounded-md bg-[--stats-badge-bg] px-2 py-1 text-xs font-medium text-[--stats-badge-text] ring-1 ring-inset ring-gray-500/10 w-fit leading-[14px]"
        >
          {item.name} ({Math.round(item.percent)}%)
          {showCrown && index === 0 && (
            <Crown strokeWidth={1.5} stroke="#FAB12F" className="size-4 ml-1" />
          )}
        </span>
      ))}
    </div>
  );
}
