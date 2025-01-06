'use client'

import { Card } from '@/components/ui/card'
import { MainContentSection } from './main-content-section'
import { SearchBar } from './search-bar'
import { ProgressBar } from '../ui/progress-bar'
import { Progress } from '../ui/progress'

export function MainContent() {
  return (
    <div className="flex flex-col gap-4 relative">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4c51ff,rgba(177,84,255,0.4),rgba(0,212,255,0.15),transparent_70%)]" /> */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
      <MainContentSection
        title="Total Earnings"
        content={<Progress />}
      />

      <MainContentSection
        title="My Tree"
        content={<SearchBar />}
      />

      <MainContentSection
        title="Packages"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="Trading Passive Incentive"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="Royalty Rewards"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="Package History"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="Withdraw History"
        content={<p className="text-gray-400">There are no records to display</p>}
      />
    </div>
  )
}