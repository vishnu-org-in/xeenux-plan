import { Address } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useState } from "react";
import { WalletNotConnectedException } from "@/lib/exceptions";
import {
  xeenuxContractAbi,
  xeenuxContractAddress,
} from "@/lib/contracts/config";
import { useTransactor } from "./scaffold-eth";

// Hook for 'getUserInfo' function
export function useUserInfo(_address: Address) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserInfo",
    args: [_address],
  });
}

export function useUserDirectRefNo(_id: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "usersDirectRefNo",
    args: [_id],
  });
}

export function useUserPackages(_id: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserPackages",
    args: [_id],
  });
}

export function useUserTeamStats(_id: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserTeamStats",
    args: [_id],
  });
}

export function useUserClaims(_id: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserClaims",
    args: [_id],
  });
}

export function useUserVolumes(_id: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserVolumes",
    args: [_id],
  });
}

export const useWithdraw = () => {
  const { address, isConnected } = useAccount();
  const [status, setStatus] = useState<"idle" | "withdrawing">("idle");
  const [error, setError] = useState<Error | null>(null);
  const { writeContractAsync } = useWriteContract();
  const transactor = useTransactor();

  const withdraw = async (amount: bigint) => {
    try {
      if (!isConnected) {
        throw new WalletNotConnectedException();
      }

      setStatus("withdrawing");

      // Call the withdraw function on the contract
      const txHash = await transactor(() =>writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "withdraw",
        args: [amount],
      }));

      // await waitForTransactionReceipt(config, { hash: txHash });
      setStatus("idle");
      return txHash as Address;
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err : new Error("Withdrawal failed"));
      throw err;
    }
  };

  return {
    withdraw,
    status,
    error,
  };
};

export function useGetUserBinaryTree(_userId: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getUserBinaryTree",
    args: [_userId],
  });
}

export function useIncomeHistory(_userId: bigint, _type: number) {
  const [page, setPage] = useState(BigInt(1));
  const query = useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getFilteredActivities",
    args: [_userId, _type, page],
  });
  return { ...query, page, setPage };
}

export function useGetAllUserLevels(_userId: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getAllLevelDetails",
    args: [_userId],
  });
}

export function useGetUserLevelDetails(_userId: bigint) {
  const [level, setLevel] = useState(BigInt(0));
  return {
    ...useReadContract({
      address: xeenuxContractAddress,
      abi: xeenuxContractAbi,
      functionName: "getLevelDetails",
      args: [_userId, level],
    }),
    setLevel,
  };
}
