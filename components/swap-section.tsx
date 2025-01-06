'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDownUp } from 'lucide-react'
import { TokenSelector } from './swap/token-selector'
import { SwapSettings } from './swap/swap-settings'
import { SwapDetails } from './swap/swap-details'

export function SwapSection() {
  const [fromToken, setFromToken] = useState({
    symbol: 'USDT',
    icon: '/usdt-logo.png',
    balance: '1000.00'
  })
  const [toToken, setToToken] = useState({
    symbol: 'XEE',
    icon: '/logo.png',
    isRounded: true,
    balance: '0.00'
  })
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [slippage, setSlippage] = useState('0.5')

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <div className=" mx-auto mt-8 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
      <div className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Swap Tokens</h2>
        
        <TokenSelector
          token={fromToken}
          amount={fromAmount}
          onAmountChange={setFromAmount}
          balance={fromToken.balance}
        />
        
        <div className="flex justify-center -my-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSwapTokens}
            className="glass-button z-10 hover:rotate-180 transition-transform duration-300"
          >
            <ArrowDownUp className="w-4 h-4" />
          </Button>
        </div>
        
        <TokenSelector
          token={toToken}
          amount={toAmount}
          onAmountChange={setToAmount}
          balance={toToken.balance}
        />
        
        <SwapSettings
          slippage={slippage}
          onSlippageChange={setSlippage}
        />
        
        <div className="glass-card p-4">
          <SwapDetails
            minimumReceived="0.00 XEE"
            priceImpact="< 0.01%"
            fee="0.3%"
          />
        </div>
        
        <Button className="w-full glass-button py-6 text-lg font-semibold">
          Swap Tokens
        </Button>
      </div>
    </div>
  )
}