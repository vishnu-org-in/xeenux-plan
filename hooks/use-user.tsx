import { Address } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { xeenuxContractAddress } from "./values";
import { xeenuxContractAbi } from "@/lib/contract/config";
import { useAppKitAccount } from "@reown/appkit/react";
import { useState } from "react";
import { WalletNotConnectedException } from "@/lib/exceptions";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config";

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
  const { address, isConnected } = useAppKitAccount();
  const [status, setStatus] = useState<"idle" | "withdrawing">("idle");
  const [error, setError] = useState<Error | null>(null);
  const { writeContractAsync } = useWriteContract();

  const withdraw = async (amount: bigint) => {
    try {
      if (!isConnected) {
        throw new WalletNotConnectedException();
      }

      setStatus("withdrawing");

      // Call the withdraw function on the contract
      const txHash = await writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "withdraw",
        args: [amount],
      });

      await waitForTransactionReceipt(config, { hash: txHash });

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

// Hook to get paginated withdrawal history with setPage for refetching
export function useWithdrawalHistory(_userId: bigint) {
  const [page, setPage] = useState<bigint>(BigInt(1));

  const query = useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getWithdrawalHistory",
    args: [_userId, page],
  });

  return { ...query, page, setPage };
}

export function useBinaryTree(_userId: bigint) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getBinaryTree",
    args: [_userId],
  });
}

export function useIncomeHistory(_userId: bigint, _type: number) {
  const [page, setPage] = useState(BigInt(1));
  const query = useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getFilteredIncomeHistory",
    args: [_userId, _type, page],
  });
  return { ...query, page, setPage };
}
