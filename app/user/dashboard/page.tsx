'use client'

import { Header } from '@/components/header'
import { DashboardStats } from '@/components/dashboard-stats'
import { ReferralLinks } from '@/components/referral-links'
import { Sidebar } from '@/components/sidebar'
import { SwapSection } from '@/components/swap-section'
import { MainContent } from '@/components/main-content'
import { Hero } from '@/components/hero'

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <div className="flex-1 space-y-8">
            <MainContent />
            <SwapSection />
          </div>
        </div>
      </div>
    </div>
  )
}