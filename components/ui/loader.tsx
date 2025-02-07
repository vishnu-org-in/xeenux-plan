'use client'

export function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 animate-[spin_3s_linear_infinite]" />
        
        {/* Middle ring */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-transparent border-l-transparent animate-[spin_2s_linear_infinite]" />
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-cyan-500/20 animate-[spin_1.5s_linear_infinite_reverse]" />
        
        {/* Center dot */}
        <div className="absolute top-[22px] left-[22px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 animate-pulse" />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
      </div>
    </div>
  )
}