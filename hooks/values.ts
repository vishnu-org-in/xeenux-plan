import { getSupportedNetworks } from "@/config";
import { usdtTokenAddress, xeenuxContractAddresses, xeenuxTokenAddresses } from '@/lib/contract/addresses';
import { Address } from "viem";
export const chainId = String(getSupportedNetworks()[0].id) as keyof typeof xeenuxContractAddresses;
export const xeenuxContractAddress = xeenuxContractAddresses[chainId] as Address;
export const usdtAddress = usdtTokenAddress[chainId] as Address;
export const xeenuxTokenAddress = xeenuxTokenAddresses[chainId] as Address;