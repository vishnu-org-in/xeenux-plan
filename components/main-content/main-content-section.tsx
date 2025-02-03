'use client'

import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { ReactNode, useState } from 'react'

interface MainContentSectionProps {
  title: string
  content: ReactNode,
  id?: string
}

export function MainContentSection({ title, content, id = "" }: MainContentSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="glass-card overflow-hidden" id={id}>
      <button
        className="w-full p-4 flex items-center justify-between text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
        <ChevronDown 
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isExpanded && (
        <div className="text-xs p-4 pt-0">
          {content}
        </div>
      )}
    </Card>
  )
}