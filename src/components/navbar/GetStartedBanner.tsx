export default function GetStartedBanner() {
  return (
    <div className="relative group">
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
      
      {/* Main banner */}
      <div className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg overflow-hidden">
        <div className="relative z-10 flex items-center gap-2 text-white">
          <span className="font-semibold text-sm tracking-wide drop-shadow-[0_2px_8px_rgba(10,10,15,0.6)]">
            Get Started
          </span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </div>
        
        {/* Shine effect */}
        <div className="pointer-events-none absolute inset-0 rounded-lg">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
