import { useReadContract, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { xeenuxContractAbi } from "@/lib/contract/config";
import { Address, erc20Abi } from "viem";
import { useAppKitAccount } from "@reown/appkit/react";
import { WalletNotConnectedException } from "@/lib/exceptions";
import { config } from "@/config";
import { xeenuxContractAddress, xeenuxTokenAddress } from "./values";
import { waitForTransactionReceipt } from "@wagmi/core";

export const useRegister = ({ _package }: { _package: number | undefined }) => {
  const { address, isConnected } = useAppKitAccount();
  const [packageIndex, setPackageIndex] = useState<number | undefined>(
    _package,
  );
  const [packagePrice, setPackagePrice] = useState<{
    usdt: bigint;
    xee: bigint;
  }>({
    usdt: BigInt(0),
    xee: BigInt(0),
  });
  const [status, setStatus] = useState<
    "idle" | "reading-price" | "approving" | "registering"
  >("idle");
  const [error, setError] = useState<Error | null>(null);
  const {
    data: priceData,
    isSuccess: isPriceReady,
    isLoading: isPriceLoading,
    isError: isPriceError,
    error: priceError,
  } = useReadContract({
    address: xeenuxContractAddress,
    abi: xeenuxContractAbi,
    functionName: "getPackagePrice",
    args: [packageIndex || 0],
    query: {
      enabled: packageIndex !== undefined,
    },
  });
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
  useEffect(() => {
    if (isPriceLoading) setStatus("reading-price");
    else setStatus("idle");
  }, [isPriceLoading]);
  useEffect(() => {
    if (isPriceReady && priceData) {
      setPackagePrice(priceData as any);
    }
  }, [isPriceReady, priceData]);
  const { writeContractAsync } = useWriteContract();
  const { data: allowanceData } = useReadContract({
    address: xeenuxTokenAddress,
    abi: erc20Abi,
    functionName: "allowance",
    args: [address as Address, xeenuxContractAddress],
    query: {
      enabled: address !== undefined,
    },
  });
  const approveToken = async (amount: bigint): Promise<Address> => {
    setStatus("approving");
    try {
      if (allowanceData && allowanceData >= amount) {
        setStatus("idle");
        return "0x0";
      }
      const approvalHash = await writeContractAsync({
        address: xeenuxTokenAddress,
        abi: erc20Abi,
        functionName: "approve",
        args: [xeenuxContractAddress, amount],
      });

      await waitForTransactionReceipt(config, {
        hash: approvalHash,
      });

      return approvalHash as Address;
    } catch (error) {
      //   setRegistrationState(prev => ({
      //     ...prev,
      //     status: 'idle',
      //     error: error instanceof Error ? error.message : 'Approval failed'
      //   }));
      setStatus("idle");
      setError(error instanceof Error ? error : new Error("Approval failed"));
      throw error;
    }
  };
  const registerUser = async ({
    _name,
    _email,
    _phone,
    _ref,
    _position,
    _package,
  }: {
    _name: string;
    _email: string;
    _phone: string;
    _ref: number;
    _position: number;
    _package: number;
  }) => {
    try {
      if (!isConnected) {
        throw new WalletNotConnectedException();
      }
      // Wait explicitly for price to be ready
      if (!isPriceReady || !packagePrice) {
        throw new Error("Package price not loaded");
      }
      await approveToken(packagePrice.xee);
      setStatus("registering");
      const registrationHash = await writeContractAsync({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: "buy",
        args: [
          address as Address,
          BigInt(_ref),
          BigInt(_package),
          BigInt(_position),
          _name,
          _email,
          _phone,
        ],
      });
      await waitForTransactionReceipt(config, {
        hash: registrationHash,
      });
      setStatus("idle");
      return registrationHash as Address;
    } catch (error) {
      setStatus("idle");
      setError(
        error instanceof Error ? error : new Error("Registration failed"),
      );
      throw error;
    }
  };
  return {
    registerUser,
    packageIndex,
    packagePrice,
    isPriceReady,
    isPriceLoading,
    isPriceError,
    setPackageIndex,
    status,
    xeeBalanceData,
    isXeeBalanceLoading,
    isXeeBalanceError,
  };
};
