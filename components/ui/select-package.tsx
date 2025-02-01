import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Check } from 'lucide-react';
import { Button } from './button';

function selectPackage() {
  const [selectedPackage, setSelectedPackage] = useState('10')
  return (
    <div id="select-package">
      <Label className="mb-4 block">Select Package</Label>
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: '2.5', label: '$2.5', isActive: true },
          { value: '5', label: '$5' },
          { value: '10', label: '$10' },
          { value: '25', label: '$25' },
          { value: '50', label: '$50' },
          { value: '100', label: '$100' },
          { value: '250', label: '$250' },
          { value: '500', label: '$500' },
          { value: '1000', label: '$1,000' },
        ].map((pkg) => (
          <button
            key={pkg.value}
            onClick={() => setSelectedPackage(pkg.value)}
            className={`
                      relative p-2 rounded-xl transition-all duration-300
                      ${pkg.isActive ? 'bg-purple-500/20' : 'glass-card opacity-40'}
                      ${selectedPackage === pkg.value ?
                'ring-2 ring-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.2)] opacity-100' :
                'hover:opacity-100 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:bg-purp le-500/10'
              }
                    `}
          >
            <span className={`text-xl font-bold ${selectedPackage === pkg.value ? 'text-purple-400' : 'text-gray-400'}`}>
              {pkg.label}
            </span>
            {selectedPackage === pkg.value && (
              <Check className="absolute top-2 right-2 w-4 h-4 text-purple-500" />
            )}
          </button>
        ))}

        <Button className="mt-4 w-full glass-button" >Buy package</Button>
      </div>
    </div>
  )
}

export default selectPackage;