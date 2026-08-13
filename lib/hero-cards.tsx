import React from "react";
import { HERO_DATA } from "@/lib/data";
import {
  DashboardCard,
  TransactionCard,
  BarChartCard,
  GrowthCard,
} from "@/components/ui/MockupCards";

export const heroCards: React.ReactNode[] = [
  <div key="card-velocity" className="flex justify-center w-full">
    <DashboardCard
      title={HERO_DATA.uiCards[0].title}
      value={HERO_DATA.uiCards[0].value}
      change={HERO_DATA.uiCards[0].change}
      tag={HERO_DATA.uiCards[0].tag}
    />
  </div>,
  <div key="card-agents" className="flex justify-center w-full">
    <TransactionCard
      title={HERO_DATA.uiCards[1].title}
      value={HERO_DATA.uiCards[1].value}
      status={HERO_DATA.uiCards[1].tag}
    />
  </div>,
  <div key="card-roi" className="flex justify-center w-full">
    <BarChartCard
      title={HERO_DATA.uiCards[2].title}
      value={HERO_DATA.uiCards[2].value}
    />
  </div>,
  <div key="card-risk" className="flex justify-center w-full">
    <GrowthCard
      title={HERO_DATA.uiCards[3].title}
      value={HERO_DATA.uiCards[3].value}
    />
  </div>,
];
