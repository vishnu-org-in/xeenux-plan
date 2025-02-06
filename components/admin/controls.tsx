'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { 
  Settings, 
  Percent,
  Flame,
  Gift,
  RotateCw,
  ArrowRight,
  ChevronDown,
  Check,
  X
} from 'lucide-react'

interface AdminControlsProps {
  onAction: (action: string, value?: number | string) => Promise<void>
  isLoading: boolean
}

interface PlatformData {
  lastSync: string
  totalUsers: number
  activeContracts: number
  pendingTransactions: number
  systemHealth: 'Healthy' | 'Warning' | 'Critical'
}

interface ExchangeRate {
  pair: string
  rate: string
  change24h: string
  lastUpdated: string
}

export function AdminControls({ onAction, isLoading }: AdminControlsProps) {
  const [swapFee, setSwapFee] = useState(1)
  const [burnAmount, setBurnAmount] = useState('')
  const [customFee, setCustomFee] = useState('')
  const [showPlatformData, setShowPlatformData] = useState(false)
  const [showExchangeRates, setShowExchangeRates] = useState(false)

  // Sample data - would come from API in production
  const platformData: PlatformData = {
    lastSync: '2024-02-14 15:30 UTC',
    totalUsers: 15234,
    activeContracts: 45,
    pendingTransactions: 12,
    systemHealth: 'Healthy'
  }

  const exchangeRates: ExchangeRate[] = [
    { pair: 'XEE/USDT', rate: '1.245', change24h: '+5.2%', lastUpdated: '5 min ago' },
    { pair: 'XEE/BNB', rate: '0.00324', change24h: '+3.1%', lastUpdated: '5 min ago' },
    { pair: 'XEE/ETH', rate: '0.00056', change24h: '-1.2%', lastUpdated: '5 min ago' },
    { pair: 'XEE/BUSD', rate: '1.242', change24h: '+4.8%', lastUpdated: '5 min ago' }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Swap Fee Controls */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-500/20">
            <Percent className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Swap Fee Controls</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Current Fee: {swapFee}%</label>
            <Slider
              value={[swapFee]}
              onValueChange={([value]) => setSwapFee(value)}
              max={5}
              step={0.1}
              className="mb-6"
            />
          </div>

          <div className="flex gap-3">
            {[0.5, 1, 2, 3].map((fee) => (
              <Button
                key={fee}
                variant="outline"
                className="flex-1 glass-input hover:bg-purple-500/20"
                onClick={() => {
                  setSwapFee(fee)
                  onAction('setSwapFee', fee)
                }}
                disabled={isLoading}
              >
                {fee}%
              </Button>
            ))}
          </div>

          <div className="flex gap-3">
            <Input
              type="number"
              placeholder="Custom fee %"
              value={customFee}
              onChange={(e) => setCustomFee(e.target.value)}
              className="glass-input"
            />
            <Button
              onClick={() => onAction('setCustomFee', customFee)}
              disabled={isLoading || !customFee}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Set Fee
            </Button>
          </div>
        </div>
      </Card>

      {/* Token Burning */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-500/20">
            <Flame className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Token Burning</h2>
          
        </div>
        <p className="text-gray-400 text-sm">1000$ available for burn</p> 

        <div className="space-y-4">
          <div className="flex gap-3">
            <Input
              type="number"
              placeholder="Amount of tokens to burn"
              value={burnAmount}
              onChange={(e) => setBurnAmount(e.target.value)}
              className="glass-input"
            />
            <Button
              onClick={() => onAction('burnTokens', burnAmount)}
              disabled={isLoading || !burnAmount}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Burn
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            Warning: Token burning is irreversible. Please double-check the amount.
          </p>
        </div>
      </Card>

      {/* Weekly Bonus */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-500/20">
            <Gift className="w-5 h-5 text-green-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Weekly Bonus</h2>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            Trigger the distribution of weekly bonuses to eligible users.
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Next distribution in: 2d 14h</span>
            <Button
              onClick={() => onAction('triggerWeeklyBonus')}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              Distribute Now
            </Button>
          </div>
        </div>
      </Card>

      {/* System Settings with Collapsible Sections */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-500/20">
            <Settings className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">System Settings</h2>
        </div>

        <div className="space-y-4">
          {/* Platform Data Sync */}
          <div className="space-y-3">
            <Button
              onClick={() => {
                onAction('syncData')
                setShowPlatformData(!showPlatformData)
              }}
              disabled={isLoading}
              variant="outline"
              className="w-full justify-between bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span>Sync Platform Data</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showPlatformData ? 'rotate-180' : ''}`} />
            </Button>

            {showPlatformData && (
              <div className="bg-black/20 rounded-lg p-4 space-y-3 border border-blue-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Last Sync</span>
                  <span className="text-sm text-gray-200">{platformData.lastSync}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Users</span>
                  <span className="text-sm text-gray-200">{platformData.totalUsers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Active Contracts</span>
                  <span className="text-sm text-gray-200">{platformData.activeContracts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Pending Transactions</span>
                  <span className="text-sm text-gray-200">{platformData.pendingTransactions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">System Health</span>
                  <div className="flex items-center gap-2">
                    {platformData.systemHealth === 'Healthy' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : platformData.systemHealth === 'Warning' ? (
                      <X className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm ${
                      platformData.systemHealth === 'Healthy' 
                        ? 'text-green-500' 
                        : platformData.systemHealth === 'Warning'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}>
                      {platformData.systemHealth}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exchange Rates Update */}
          <div className="space-y-3">
            <Button
              onClick={() => {
                onAction('updateRates')
                setShowExchangeRates(!showExchangeRates)
              }}
              disabled={isLoading}
              variant="outline"
              className="w-full justify-between bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span>Update Exchange Rates</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showExchangeRates ? 'rotate-180' : ''}`} />
            </Button>

            {showExchangeRates && (
              <div className="bg-black/20 rounded-lg p-4 space-y-3 border border-blue-500/20">
                {exchangeRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-gray-200">{rate.pair}</span>
                      <p className="text-xs text-gray-400">Last updated: {rate.lastUpdated}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-200">{rate.rate}</span>
                      <p className={`text-xs ${
                        rate.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {rate.change24h}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}