export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 p-[1px] shadow-lg shadow-purple-900/30">
        <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-[#0a0a0f]">
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 32C12 20.9543 20.9543 12 32 12C35.9887 12 39.7194 13.1658 42.8883 15.2702C46.0572 17.3746 48.5178 20.3277 49.9611 23.7935"
              stroke="url(#stroke1)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M52 32C52 43.0457 43.0457 52 32 52C28.0113 52 24.2806 50.8342 21.1117 48.7298C17.9428 46.6254 15.4822 43.6723 14.0389 40.2065"
              stroke="url(#stroke2)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 32C20 36.4183 23.5817 40 28 40C30.1217 40 32.067 39.1763 33.5355 37.7078C35.004 36.2393 35.8277 34.294 35.8277 32.1723C35.8277 30.0506 35.004 28.1053 33.5355 26.6368C32.067 25.1683 30.1217 24.3446 28 24.3446"
              stroke="url(#stroke3)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="stroke1" x1="12" y1="12" x2="52" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="stroke2" x1="12" y1="52" x2="52" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="stroke3" x1="20" y1="24" x2="36" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-semibold text-gradient tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Colorweave
        </span>
        <span className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
          ai studio
        </span>
      </div>
    </div>
  );
}
