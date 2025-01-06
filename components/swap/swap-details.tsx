'use client'

interface SwapDetailsProps {
  minimumReceived: string
  priceImpact: string
  fee: string
}

export function SwapDetails({ minimumReceived, priceImpact, fee }: SwapDetailsProps) {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">Minimum Received</span>
        <span className="text-gray-200">{minimumReceived}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Price Impact</span>
        <span className="text-gray-200">{priceImpact}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Liquidity Provider Fee</span>
        <span className="text-gray-200">{fee}</span>
      </div>
    </div>
  )
}