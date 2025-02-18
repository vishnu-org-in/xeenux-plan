import {
  xeenuxContractAbi,
  xeenuxContractAddress,
  usdtTokenAddress,
  xeenuxTokenAddress,
} from "@/lib/contracts/config";
import { WalletNotConnectedException } from "@/lib/exceptions";
import { useState } from "react";
import { Address, erc20Abi } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useTransactor } from "./scaffold-eth";

// const chainId = String(getSupportedNetworks()[0].id) as keyof Addresses;
// const xeenuxContractAddress = xeenuxContractAddresses[chainId];
// const usdtTokenAddress = usdtAddresses[chainId];
// const xeenuxTokenAddress = xeenuxTokenAddresses[chainId];

export const useSwapUsdtToXee = () => {
  const { address, isConnected } = useAccount();
  const [status, setStatus] = useState<"idle" | "approving" | "swapping">(
    "idle"
  );
  const [error, setError] = useState<Error | null>(null);

  // Read USDT balance
  const {
    data: usdtBalanceData,
    isLoading: isUsdtBalanceLoading,
    isError: isUsdtBalanceError,
  } = useReadContract({
    address: usdtTokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address as Address],
    query: {
      enabled: address !== undefined,
    },
  });
  const { data: allowanceData } = useReadContract({
    address: usdtTokenAddress,
    abi: erc20Abi,
    functionName: "allowance",
    args: [address as Address, xeenuxContractAddress],
    query: {
      enabled: address !== undefined,
    },
  });

  const { writeContractAsync } = useWriteContract();
  const transactor = useTransactor();
  const approveUsdt = async (amount: bigint): Promise<Address> => {
    setStatus("approving");
    try {
      if (allowanceData && allowanceData >= amount) {
        setStatus("idle");
        return "0x0";
      }
      const approvalHash = await transactor(() =>
        writeContractAsync({
          address: usdtTokenAddress,
          abi: erc20Abi,
          functionName: "approve",
          args: [xeenuxContractAddress, amount],
        })
      );
      // await waitForTransactionReceipt(config, {
      //   hash: approvalHash,
      // });
      return approvalHash as Address;
    } catch (error) {
      setStatus("idle");
      setError(
        error instanceof Error ? error : new Error("USDT approval failed")
      );
      throw error;
    }
  };

  const swap = async (amount: bigint) => {
    try {
      if (!isConnected) {
        throw new WalletNotConnectedException();
      }

      // Verify USDT balance
      if (!usdtBalanceData || usdtBalanceData < amount) {
        throw new Error("Insufficient USDT balance");
      }

      // First approve USDT
      await approveUsdt(amount);

      // Then perform swap
      setStatus("swapping");
      const swapHash = await transactor(
        () =>
          writeContractAsync({
            address: xeenuxContractAddress,
            abi: xeenuxContractAbi,
            functionName: "swapUSDTToXeenux",
            args: [amount],
          }),
        {},
        { message: "Swap successful" }
      );

      // await waitForTransactionReceipt(config, {
      //   hash: swapHash,
      // });
      setStatus("idle");
      return swapHash as Address;
    } catch (error) {
      setStatus("idle");
      setError(error instanceof Error ? error : new Error("Swap failed"));
      throw error;
    }
  };

  return {
    swap,
    status,
    error,
    usdtBalanceData,
    isUsdtBalanceLoading,
    isUsdtBalanceError,
  };
};

export const useSwapXeeToUsdt = () => {
  const { address, isConnected } = useAccount();
  const [status, setStatus] = useState<"idle" | "approving" | "swapping">(
    "idle"
  );
  const [error, setError] = useState<Error | null>(null);

  // Read XEE balance
  const {
    data: xeeBalanceData,
    isLoading: isXeeBalanceLoading,
    isError: isXeeBalanceError,
  } = useReadContract({
    address: xeenuxTokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address as Address],
    query: {
      enabled: address !== undefined,
    },
  });

  const { writeContractAsync } = useWriteContract();
  const transactor = useTransactor();
  const approveXee = async (amount: bigint): Promise<Address> => {
    setStatus("approving");
    try {
      const approvalHash = await transactor(() =>
        writeContractAsync({
          address: xeenuxTokenAddress,
          abi: erc20Abi,
          functionName: "approve",
          args: [xeenuxContractAddress, amount],
        })
      );

      return approvalHash as Address;
    } catch (error) {
      setStatus("idle");
      setError(
        error instanceof Error ? error : new Error("XEE approval failed")
      );
      throw error;
    }
  };

  const swap = async (amount: bigint) => {
    try {
      if (!isConnected) {
        throw new WalletNotConnectedException();
      }

      // Verify XEE balance
      if (!xeeBalanceData || xeeBalanceData < amount) {
        throw new Error("Insufficient XEE balance");
      }

      // First approve XEE
      await approveXee(amount);

      // Then perform swap
      setStatus("swapping");
      const swapHash = await transactor(
        () =>
          writeContractAsync({
            address: xeenuxContractAddress,
            abi: xeenuxContractAbi,
            functionName: "swapXeenuxToUSDT",
            args: [amount],
          }),
        {},
        { message: "Swap successful" }
      );

      setStatus("idle");
      return swapHash as Address;
    } catch (error) {
      setStatus("idle");
      setError(error instanceof Error ? error : new Error("Swap failed"));
      throw error;
    }
  };

  return {
    swap,
    status,
    error,
    xeeBalanceData,
    isXeeBalanceLoading,
    isXeeBalanceError,
  };
};

export function useSwapFee() {
  return useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "swapFee",
  });
}
