'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Share2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ReferralLinks({userId}: {userId: number}) {
  const { toast } = useToast()
  const leftLink = `${window.location.origin}?ref=${userId}&position=left`
  const rightLink = `${window.location.origin}?ref=${userId}&position=right`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    })
  }

  return (
    <div className="flex  flex-col lg:flex-row  gap-4 w-full">
      <div className="glass-card py-2 w-full px-6 flex items-center">

        <div className="flex items-center w-full gap-2">
          <h3 className="text-xs font-semibold">Left Referral Link</h3>
          <input
            type="text"
            value={leftLink}
            readOnly
            className="flex-1 bg-black/20 rounded-lg px-4 py-2 text-sm"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(leftLink)}
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              // Share functionality
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="glass-card py-2 px-6 w-full ">

        <div className="flex w-full items-center gap-2">
          <h3 className="text-sm font-semibold">Right Referral Link</h3>
          <input
            type="text"
            value={rightLink}
            readOnly
            className="flex-1 bg-black/20 rounded-lg px-4 py-2 text-sm"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(rightLink)}
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              // Share functionality
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}