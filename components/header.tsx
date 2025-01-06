'use client'

// import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function Header() {
  // const { open } = useWeb3Modal()
  // const { isConnected, address } = useAccount()
  const { theme, setTheme } = useTheme()

  return (
    <header className="glass-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/xeenux.png" 
              alt="xeenux" 
              width={40} 
              height={40} 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold gradient-text">XEENUX</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
            
            <Button 
              onClick={() => open()}
              className="glass-button"
            >
              {/* {isConnected ? 
                `${address?.slice(0, 6)}...${address?.slice(-4)}` : 
                'Connect Wallet'
              } */}
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}