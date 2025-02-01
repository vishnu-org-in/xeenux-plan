'use client'

// import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/button'
import { LogOut, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function Header() {
  // const { open } = useWeb3Modal()
  // const { isConnected, address } = useAccount()
  const { theme, setTheme } = useTheme()

  return (
    <header className="glass-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/xeenux.png" 
              alt="xeenux" 
              width={40} 
              height={40} 
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-sm sm:text-xl font-bold gradient-text">XEENUX</span>
          </div>
          
          <div className="flex items-center gap-4">
            
            <Button 
              onClick={() => open()}
              className="glass-button text-[8px] sm:text-sm"
            >
              {/* {isConnected ? 
                `${address?.slice(0, 6)}...${address?.slice(-4)}` : 
                'Connect Wallet'
              } */}
              Connect Wallet
            </Button>

            <Button 
              onClick={() => open()}
              className="glass-button"
            >
              {/* {isConnected ? 
                `${address?.slice(0, 6)}...${address?.slice(-4)}` : 
                'Connect Wallet'
              } */}
              <LogOut className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}