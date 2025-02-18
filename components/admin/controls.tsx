"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Settings,
  RotateCw,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import { TokenBurning } from "./token-burning";
import { SwapControls } from "./swap-controls";
import { IncomeDistribution } from "./income-distribution";

interface AdminControlsProps {
  onAction: (action: string, value?: number | string) => Promise<void>;
  isLoading: boolean;
}

interface PlatformData {
  lastSync: string;
  totalUsers: number;
  activeContracts: number;
  pendingTransactions: number;
  systemHealth: "Healthy" | "Warning" | "Critical";
}

interface ExchangeRate {
  pair: string;
  rate: string;
  change24h: string;
  lastUpdated: string;
}

const platformData: PlatformData = {
  lastSync: "2024-02-14 15:30 UTC",
  totalUsers: 15234,
  activeContracts: 45,
  pendingTransactions: 12,
  systemHealth: "Healthy",
};

const exchangeRates: ExchangeRate[] = [
  {
    pair: "XEE/USDT",
    rate: "1.245",
    change24h: "+5.2%",
    lastUpdated: "5 min ago",
  },
  {
    pair: "XEE/BNB",
    rate: "0.00324",
    change24h: "+3.1%",
    lastUpdated: "5 min ago",
  },
  {
    pair: "XEE/ETH",
    rate: "0.00056",
    change24h: "-1.2%",
    lastUpdated: "5 min ago",
  },
  {
    pair: "XEE/BUSD",
    rate: "1.242",
    change24h: "+4.8%",
    lastUpdated: "5 min ago",
  },
];
export function AdminControls({ onAction, isLoading }: AdminControlsProps) {
  const [showPlatformData, setShowPlatformData] = useState(false);
  const [showExchangeRates, setShowExchangeRates] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Swap Fee Controls */}
      <SwapControls />

      {/* Token Burning */}
      <TokenBurning />

      {/* Weekly Bonus */}
      <IncomeDistribution />

      {/* System Settings with Collapsible Sections */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-500/20">
            <Settings className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">System Settings</h2>
        </div>

        <div className="space-y-4">
          {/* Platform Data Sync */}
          <div className="space-y-3">
            <Button
              onClick={() => {
                onAction("syncData");
                setShowPlatformData(!showPlatformData);
              }}
              disabled={isLoading}
              variant="outline"
              className="w-full justify-between bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span>Sync Platform Data</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showPlatformData ? "rotate-180" : ""}`}
              />
            </Button>

            {showPlatformData && (
              <div className="bg-black/20 rounded-lg p-4 space-y-3 border border-blue-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Last Sync</span>
                  <span className="text-sm text-gray-200">
                    {platformData.lastSync}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Users</span>
                  <span className="text-sm text-gray-200">
                    {platformData.totalUsers.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Active Contracts
                  </span>
                  <span className="text-sm text-gray-200">
                    {platformData.activeContracts}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Pending Transactions
                  </span>
                  <span className="text-sm text-gray-200">
                    {platformData.pendingTransactions}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">System Health</span>
                  <div className="flex items-center gap-2">
                    {platformData.systemHealth === "Healthy" ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : platformData.systemHealth === "Warning" ? (
                      <X className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm ${
                        platformData.systemHealth === "Healthy"
                          ? "text-green-500"
                          : platformData.systemHealth === "Warning"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }`}
                    >
                      {platformData.systemHealth}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exchange Rates Update */}
          <div className="space-y-3">
            <Button
              onClick={() => {
                onAction("updateRates");
                setShowExchangeRates(!showExchangeRates);
              }}
              disabled={isLoading}
              variant="outline"
              className="w-full justify-between bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span>Update Exchange Rates</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showExchangeRates ? "rotate-180" : ""}`}
              />
            </Button>

            {showExchangeRates && (
              <div className="bg-black/20 rounded-lg p-4 space-y-3 border border-blue-500/20">
                {exchangeRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-200">
                        {rate.pair}
                      </span>
                      <p className="text-xs text-gray-400">
                        Last updated: {rate.lastUpdated}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-200">
                        {rate.rate}
                      </span>
                      <p
                        className={`text-xs ${
                          rate.change24h.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {rate.change24h}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
