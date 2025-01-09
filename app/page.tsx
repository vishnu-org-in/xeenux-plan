'use client'

import { Header } from '@/components/header'
import { DashboardStats } from '@/components/dashboard-stats'
import { ReferralLinks } from '@/components/referral-links'
import { Sidebar } from '@/components/sidebar'
import { SwapSection } from '@/components/swap-section'
import { MainContent } from '@/components/main-content'
import { Hero } from '@/components/hero'
import RegisterPage from './register/page'

export default function DashboardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <RegisterPage />
    </div>
  )
}