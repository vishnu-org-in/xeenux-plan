import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { Address, erc20Abi } from "viem";
import {
  usdtTokenAddress,
  xeenuxContractAbi,
  xeenuxContractAddress,
  xeenuxTokenAddress,
} from "@/lib/contracts/config";

// Hook for 'getUserId' function
export function useUserId(userAddress: Address) {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "id",
    args: [userAddress],
  });
}

// Hook for 'getUserInfo' function
// export function useUserInfo(_id: BigInt) {
//     return useReadContract({
//         address: xeenuxContractAddress,
//         abi: contractsConfig.contract.abi,
//         functionName: 'getUserInfo',
//         args: [_id],
//     });
// }

// Hook for 'getUserInfo' function
export function useTokenInfo() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getTokenInfo",
  });
}
export function useSwapPrice() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "swapPrice",
  });
}
export function useTokensToBeBurnt() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "xeenuxToBeBurned",
  });
}

export function useXeeBalance() {
  const { address } = useAccount();
  return useReadContract({
    address: xeenuxTokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address as Address],
  });
}
export function useUsdtBalance() {
  const { address } = useAccount();
  return useReadContract({
    address: usdtTokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address as Address],
  });
}

export function useNextPrice() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "nextPrice",
  });
}

export function useLastBurnDate() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "lastBurnTimestamp",
  });
}
