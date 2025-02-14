import { Address } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { xeenuxContractAddress } from "./values";
import { xeenuxContractAbi } from "@/lib/contract/config";
import { useAppKitAccount } from "@reown/appkit/react";
import { useState } from "react";
import { WalletNotConnectedException } from "@/lib/exceptions";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config";

export function useIsAdmin(_address?: Address) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "isAdmin",
    args: [_address!],
    query: {
      enabled: !!_address,
    },
  });
}

export function useIncomeDistributionData() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getIncomeDistData",
    args: [],
  });
}
// export function useAllIncomeDistTime() {
//   return useReadContract({
//     address: xeenuxContractAddress,
//     abi: xeenuxContractAbi,
//     functionName: "allIncomeDistTime",
//     args: [],
//   });
// }
// export function useAllIncomeDistTime() {
//   return useReadContract({
//     address: xeenuxContractAddress,
//     abi: xeenuxContractAbi,
//     functionName: "weeklyRewardDistTime",
//     args: [],
//   });
// }

// export function useLastBinaryDistributionTimestamp() {
//   return useReadContract({
//     address: xeenuxContractAddress,
//     abi: xeenuxContractAbi,
//     functionName: "roiIncomeLastDist",
//     args: [],
//   });
// }

// export function useLastWeeklyDistributionTimestamp() {
//   return useReadContract({
//     address: xeenuxContractAddress,
//     abi: xeenuxContractAbi,
//     functionName: "weeklyRewardLastDist",
//     args: [],
//   });
// }

export function useWeeklyTurnOver() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "weeklyTurnover",
    args: [],
  });
}

export function useTotalUsers() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "totalUsers",
    args: [],
  });
}
export function useWeeklyTurnover() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "weeklyTurnover",
    args: [],
  });
}
export function useTotalTurnover() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "totalTurnover",
    args: [],
  });
}

export function useDistributeIncome() {
  const { writeContractAsync } = useWriteContract();
  const distributeROI = async () => {
    try {
      const distributeHash = await writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "distributeROI",
        args: [],
      });
      await waitForTransactionReceipt(config, {
        hash: distributeHash,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const distributeBinaryIncome = async () => {
    try {
      const distributeHash = await writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "distributeBinaryIncome",
        args: [],
      });
      await waitForTransactionReceipt(config, {
        hash: distributeHash,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const distributeWeeklyReward = async () => {
    try {
      const distributeHash = await writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "distributeWeeklyReward",
        args: [],
      });
      await waitForTransactionReceipt(config, {
        hash: distributeHash,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    distributeROI,
    distributeBinaryIncome,
    distributeWeeklyReward,
  };
}
