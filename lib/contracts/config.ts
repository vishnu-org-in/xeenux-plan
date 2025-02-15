import { getSupportedNetworks } from "@/config";
import contractSData from "./data";
import { Address } from "viem";
import { Tokens } from "@reown/appkit";

export const chainId = getSupportedNetworks()[0]
  .id as keyof typeof contractSData;
export const xeenuxContractAddress = contractSData[chainId].XeenuxInvestment
  .address as Address;
export const xeenuxContractAbi = contractSData[chainId].XeenuxInvestment.abi;
export const usdtTokenAddress = contractSData[chainId].USDT.address as Address;
export const xeenuxTokenAddress = contractSData[chainId].XEE.address as Address;

// TOKENS
export const tokens: Tokens = {
  "eip155:31337": {
    address: xeenuxTokenAddress,
    image: "token_image_url", //optional
  },
  // "eip155:97": {
  // 	address: xeenuxTokenAddresses['97'],
  // 	image: 'token_image_url' //optional
  // }
};
