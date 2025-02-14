import { Address } from "viem";
import { Tokens } from "@reown/appkit";
import xeenuxAbiJson from "./xeenux.abi";
import { xeenuxTokenAddresses } from "./addresses";

export const xeenuxContractAbi = xeenuxAbiJson;

// TOKENS
export const tokens: Tokens = {
  "eip155:31337": {
    address: xeenuxTokenAddresses["31337"],
    image: "token_image_url", //optional
  },
  // "eip155:97": {
  // 	address: xeenuxTokenAddresses['97'],
  // 	image: 'token_image_url' //optional
  // }
};
