'use client'

import { useContractData } from "@/context/contract";

interface SwapDetailsProps {
  amount: number
  priceImpact: string
  swapFee: bigint
  symbol: string
}
function applySwapFee(amount: bigint, feePercent: bigint): bigint {
  return (amount * (BigInt(10000) - feePercent)) / BigInt(10000);
}
export function SwapDetails({ amount, priceImpact, swapFee, symbol }: SwapDetailsProps) {
  const { tokenInfo } = useContractData();
  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">Minimum Received</span>
        <span className="text-gray-200">{applySwapFee(BigInt(amount), swapFee).toString()} {symbol}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Price Impact</span>
        <span className="text-gray-200">{priceImpact}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Liquidity Provider Fee</span>
        <span className="text-gray-200">{swapFee.toString()}%</span>
      </div>
    </div>
  )
}