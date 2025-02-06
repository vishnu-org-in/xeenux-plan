'use client'

import { Header } from '@/components/header'
import { AdminOverview } from '@/components/admin/overview'
import { AdminControls } from '@/components/admin/controls'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
// import { useToast } from '@/components/ui/use-toast'

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleAction = async (action: string, value?: number | string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: 'Success',
        description: `${action} completed successfully`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#12021c] to-[#1a0329]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Admin Dashboard</h1>
        
        <AdminOverview />
        <AdminControls 
          onAction={handleAction}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}