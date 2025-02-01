'use client'

import { Header } from '@/components/header'
import RegisterPage from './register/page'

export default function DashboardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <RegisterPage />
    </div>
  )
}