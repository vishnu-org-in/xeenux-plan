import { Address } from "viem";
import addresses from "./addresses.json";

export interface AddressMap {
  [chainId: string]: Address;
}

export interface Addresses {
  xeenuxContractAddresses: AddressMap;
  usdtTokenAddress: AddressMap;
  xeenuxTokenAddresses: AddressMap;
}

export const {
  xeenuxContractAddresses,
  usdtTokenAddress,
  xeenuxTokenAddresses,
} = addresses as Addresses;
