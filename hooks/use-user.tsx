import { Address } from "viem";
import { useReadContract } from "wagmi";
import { xeenuxContractAddress } from "./values";
import { xeenuxContractAbi } from "@/lib/contract/config";

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
