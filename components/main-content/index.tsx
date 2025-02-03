'use client'

import { MainContentSection } from './main-content-section'
import { Progress } from '@/components/ui/progress'
import SelectPackage from '@/components/ui/select-package'
import { BinaryTree } from '../binary-tree'

const treeData = {
  id: 'XEE001',
  name: 'XEENUX',
  leftValue: 1013400,
  rightValue: 858000,
  left: {
    id: 'XEE002',
    name: 'John Doe',
    leftValue: 1012300,
    rightValue: 0,
    left: {
      id: 'XEE003',
      name: 'Alice Smith',
      leftValue: 1011200,
      rightValue: 0
    }
  },
  right: {
    id: 'XEE004',
    name: 'Jane Smith',
    leftValue: 253000,
    rightValue: 55000,
    left: {
      id: 'XEE005',
      name: 'Bob Johnson',
      leftValue: 165000,
      rightValue: 77000
    },
    right: {
      id: 'XEE006',
      name: 'Sarah Wilson',
      leftValue: 0,
      rightValue: 0
    }
  }
}


export function MainContent() {
  return (
    <div className="flex flex-col gap-4 relative">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4c51ff,rgba(177,84,255,0.4),rgba(0,212,255,0.15),transparent_70%)]" /> */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
      <MainContentSection
        title="Ceiling Limit(4X)"
        content={<Progress Earanings={0} earningsCompleted={0} />}
      />


      <MainContentSection
        title="Invest or Buy Packages"
        id="select-package-section"
        content={<SelectPackage value={0} onChange={() => {}} isReg={false} />}
      />

      <MainContentSection
        title="ROI Income"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="Level Income"
        content={<p className="text-gray-400">There are no records to display</p>}
      />


      <MainContentSection
        title="Booster Bonus"
        content={<p className="text-gray-400">There are no records to display</p>}
      />
      <MainContentSection
        title="Weekly Bonus"
        content={<p className="text-gray-400">There are no records to display</p>}
      />

      <MainContentSection
        title="My Tree"
        content={<BinaryTree data={treeData} />}
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