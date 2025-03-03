'use client'

import { SidebarDropdown } from './sidebar-dropdown'
import {
  HourglassIcon,
  Users,
  DollarSign,
  History,
  Package,
  Crown,
  Clock
} from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-full lg:w-72 space-y-4">
      <SidebarDropdown
        title="Rank"
        icon={<HourglassIcon className="w-5 h-5 text-purple-400" />}
      >
        <p className="text-sm text-gray-400 uppercase pt-4 font-bold">Silver</p>
      </SidebarDropdown>
      
      
      
      <SidebarDropdown
        title="My Income"
        icon={<DollarSign className="w-5 h-5 text-purple-400" />}
      >
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Earned</span>
            <span className="text-gray-200">$0.0000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">ROI income</span>
            <span className="text-gray-200">$0.0000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Binary income</span>
            <span className="text-gray-200">$0.0000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">BOOSTER Bonus</span>
            <span className="text-gray-200">$0.0000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Weekly Bonus</span>
            <span className="text-gray-200">$0.0000</span>
          </div>
         
        </div>
      </SidebarDropdown>
      
      <SidebarDropdown
        title="Active Packages"
        icon={<Package className="w-5 h-5 text-purple-400" />}
      >
        <p className="text-sm text-gray-400">No active packages</p>
      </SidebarDropdown>
      <SidebarDropdown
        title="My Team"
        icon={<Users className="w-5 h-5 text-purple-400" />}
      >
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Direct Team</span>
            <span className="text-gray-200">0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Team</span>
            <span className="text-gray-200">0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Direct Business</span>
            <span className="text-gray-200">0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Business</span>
            <span className="text-gray-200">0</span>
          </div>
        </div>
      </SidebarDropdown>
      {/*  */}
    </div>
  )
}