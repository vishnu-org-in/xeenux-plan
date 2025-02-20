"use client";

import { Card } from "@/components/ui/card";
import {
  useTotalTokensBurnt,
  useTotalTurnover,
  useTotalUsers,
  useWeeklyTurnOver,
} from "@/hooks/use-admin";
import { useTokenInfo } from "@/hooks/use-contract";
import { bigIntToString } from "@/lib/utils";
import {
  TrendingUp,
  Users,
  DollarSign,
  Flame,
  ArrowUpRight,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const stats = [
  {
    title: "Total Users",
    value: "0",
    change: "+8.2%",
    icon: Users,
    color: "text-blue-500",
    key: "total-users",
  },
  {
    title: "Weekly Turnover",
    value: "0 XEE",
    change: "+15.7%",
    icon: ArrowUpRight,
    color: "text-cyan-500",
    key: "weekly-turnover",
  },
  {
    title: "Total Volume",
    value: "0 XEE",
    change: "+12.5%",
    icon: TrendingUp,
    color: "text-green-500",
    key: "total-turnover",
  },
  // {
  //   title: "Total Fees",
  //   value: "0 USDT",
  //   change: "+5.4%",
  //   icon: DollarSign,
  //   color: "text-purple-500",
  //   key: "total-fees",
  // },
  {
    title: "Tokens Burned",
    value: "0 XEE",
    change: "+2.3%",
    icon: Flame,
    color: "text-orange-500",
    key: "total-burned",
  },
];

export function AdminOverview() {
  const [overviewData, setOverviewData] = useState([...stats]);
  const { data: totalUsers } = useTotalUsers();
  const { data: weeklyTurnover } = useWeeklyTurnOver();
  const { data: totalTurnover } = useTotalTurnover();
  const { data: totalTokensBurnt } = useTotalTokensBurnt();
  const { data: tokenInfo } = useTokenInfo();
  const setOverviewDataValue = useCallback(
    (key: string, value: string) => {
      setOverviewData((stats) => {
        const newStats = stats.map((stat) =>
          stat.key === key ? { ...stat, value } : stat,
        );
        return newStats;
      });
    },
    [], // Add the dependency if used inside the function
  );
  useEffect(() => {
    if (totalUsers) {
      setOverviewDataValue("total-users", totalUsers.toString());
    }
  }, [totalUsers, setOverviewDataValue]);
  useEffect(() => {
    if (weeklyTurnover) {
      setOverviewDataValue(
        "weekly-turnover",
        bigIntToString(weeklyTurnover, tokenInfo?.decimals, 0) +
          " " +
          tokenInfo?.symbol,
      );
    }
  }, [weeklyTurnover, setOverviewDataValue, tokenInfo]);
  useEffect(() => {
    if (totalTurnover) {
      setOverviewDataValue(
        "total-turnover",
        bigIntToString(totalTurnover, tokenInfo?.decimals, 0) +
          " " +
          tokenInfo?.symbol,
      );
    }
  }, [totalTurnover, setOverviewDataValue, tokenInfo]);
  useEffect(() => {
    if (totalTokensBurnt) {
      setOverviewDataValue(
        "total-burned",
        bigIntToString(totalTokensBurnt, tokenInfo?.decimals, 0) +
          " " +
          tokenInfo?.symbol,
      );
    }
  }, [totalTokensBurnt, setOverviewDataValue, tokenInfo]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3x xl:grid-cols-4 gap-6 mb-8">
      {overviewData.map((stat, index) => (
        <Card
          key={index}
          className="glass-card p-6 hover:border-purple-600 transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold mt-2 text-white">{stat.value}</p>
            </div>
            <div
              className={`p-3 rounded-lg bg-opacity-20 ${stat.color.replace("text", "bg")}`}
            >
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
