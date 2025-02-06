'use client'

import { Card } from '@/components/ui/card'
import { 
  TrendingUp, 
  Users, 
  DollarSign,
  Flame,
  ArrowUpRight
} from 'lucide-react'

const stats = [
  {
    title: 'Total Volume',
    value: '$2.4M',
    change: '+12.5%',
    icon: TrendingUp,
    color: 'text-green-500'
  },
  {
    title: 'Active Users',
    value: '12.8K',
    change: '+8.2%',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Total Fees',
    value: '$156.2K',
    change: '+5.4%',
    icon: DollarSign,
    color: 'text-purple-500'
  },
  {
    title: 'Tokens Burned',
    value: '1.2M XEE',
    change: '+2.3%',
    icon: Flame,
    color: 'text-orange-500'
  },
  {
    title: 'Weekly Rewards',
    value: '450K XEE',
    change: '+15.7%',
    icon: ArrowUpRight,
    color: 'text-cyan-500'
  }
]

export function AdminOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className="glass-card p-6 hover:border-purple-600 transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold mt-2 text-white">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg bg-opacity-20 ${stat.color.replace('text', 'bg')}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">{stat.change}</span>
            <span className="text-sm text-gray-400 ml-2">vs last week</span>
          </div>
        </Card>
      ))}
    </div>
  )
}