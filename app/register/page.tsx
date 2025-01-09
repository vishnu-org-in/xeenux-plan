'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Check } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import SelectPackage from '@/components/ui/select-package'

// Country codes data
const countryCodes = [
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' }
].sort((a, b) => a.country.localeCompare(b.country))

function CountryCodeSelect({ value, onChange }: { 
  value: string, 
  onChange: (value: string) => void 
}) {
  const [open, setOpen] = useState(false)
  const selectedCountry = countryCodes.find(c => c.code === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="glass-card w-[140px]justify-between"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-xl">{selectedCountry?.flag}</span>
            <span className="text-base font-medium">{value}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 bg-[#1a0329]/95 backdrop-blur-xl border-purple-500/20">
        <Command>
          <CommandInput 
            placeholder="Search country..." 
            className="h-12 bg-transparent"
          />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-auto">
            {countryCodes.map((country) => (
              <CommandItem
                key={country.code}
                value={`${country.country} ${country.code}`}
                onSelect={() => {
                  onChange(country.code)
                  setOpen(false)
                }}
                className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-purple-500/20"
              >
                <span className="text-xl">{country.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{country.country}</span>
                  <span className="text-sm text-gray-400">{country.code}</span>
                </div>
                {value === country.code && (
                  <Check className="ml-auto h-4 w-4 text-purple-500" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function RegisterPage() {
  const [selectedPackage, setSelectedPackage] = useState('2.5')
  const [position, setPosition] = useState<'left' | 'right'>('left')
  const [countryCode, setCountryCode] = useState('+1')

  return (
    <div className="min-h-screen px-2 py-2 bg-gradient-to-b from-[#12021c] to-[#1a0329]">
        {/* <Header /> */}
      <div className="container mx-auto px-4 py-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
    

        <Card className="glass-card max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Join now</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <Label className="mb-2">Name</Label>
                <Input 
                  placeholder="Enter your name"
                  className="glass-input"
                />
              </div>

              <div>
                <Label className="mb-2">Email</Label>
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="glass-input"
                />
              </div>

              <div>
                <Label className="mb-2">Mobile Number</Label>
                <div className="flex gap-2">
                  <CountryCodeSelect 
                    value={countryCode}
                    onChange={setCountryCode}
                  />
                  <Input 
                    type="tel"
                    placeholder="Enter mobile number"
                    className="glass-card flex-1"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-4 block">Choose position</Label>
                <RadioGroup 
                  value={position} 
                  onValueChange={(value) => setPosition(value as 'left' | 'right')}
                  className="flex gap-8"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="left" id="left" className="h-5 w-5" />
                    <Label htmlFor="left" className="text-lg">Left</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="right" id="right" className="h-5 w-5" />
                    <Label htmlFor="right" className="text-lg">Right</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Right Column */}
            {/* <div>
              <Label className="mb-4 block">Select Package</Label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2.5', label: '$2.5', isActive: true },
                  { value: '5', label: '$5' },
                  { value: '10', label: '$10' },
                  { value: '25', label: '$25' },
                  { value: '50', label: '$50' },
                  { value: '100', label: '$100' },
                  { value: '300', label: '$300' },
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
              </div>
            </div> */}
            <SelectPackage />
          </div>

          <Button 
            className="glass-button w-48 h-12 mt-12 font-semibold mx-auto block"
          >
            Submit
          </Button>
        </Card>
      </div>
    </div>
  )
}