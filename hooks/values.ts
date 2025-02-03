import {
    Addresses,
    usdtAddresses,
    xeenuxContractAddresses,
    xeenuxTokenAddresses,
} from "@/lib/contract/config";
import { getSupportedNetworks } from "@/config";
export const chainId = String(getSupportedNetworks()[0].id) as keyof Addresses;
export const xeenuxContractAddress = xeenuxContractAddresses[chainId];
export const xeenuxTokenAddress = xeenuxTokenAddresses[chainId];
export const usdtTokenAddress = usdtAddresses[chainId];
