import { erc20Abi } from "viem";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  // 31337: {
  //   USDTERC20: {
  //     address: "0xab16A69A5a8c12C732e0DEFF4BE56A70bb64c926",
  //     abi: erc20Abi,
  //   },
  //   XEEERC20: {
  //     address: "0xE3011A37A904aB90C8881a99BD1F6E21401f1522",
  //     abi: erc20Abi,
  //   },
  // },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
