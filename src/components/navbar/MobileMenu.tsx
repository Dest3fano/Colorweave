'use client';

import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Trigger animation after render
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Remove from DOM after animation completes
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 z-50">
      <div 
        className={`mx-4 mt-2 rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1b2e]/98 via-[#16213e]/98 to-[#0f172a]/98 backdrop-blur-xl shadow-[0_30px_80px_rgba(4,6,15,0.8)] transform transition-all duration-300 ease-out ${
          isAnimating 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-4'
        }`}
      >
        <div className="p-6 space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between px-4 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 rounded-xl transition-all duration-300 transform ${
                isAnimating 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              }`}
              style={{ 
                transitionDelay: isAnimating ? `${index * 50}ms` : '0ms' 
              }}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <svg className="h-4 w-4 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
          
          {/* Mobile Actions */}
          <div className="mt-5 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
            <a
              href="/login"
              className={`w-full text-center px-4 py-3 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform ${
                isAnimating 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isAnimating ? `${menuItems.length * 50 + 50}ms` : '0ms' }}
              onClick={onClose}
            >
              Login
            </a>
            <a
              href="/get-started"
              className={`w-full text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-purple-900/25 transition-all duration-300 transform ${
                isAnimating 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isAnimating ? `${menuItems.length * 50 + 100}ms` : '0ms' }}
              onClick={onClose}
            >
              Get Started
            </a>
          </div>
          
          {/* Divider */}
          <div 
            className={`my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-300 ${
              isAnimating ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: isAnimating ? '150ms' : '0ms' }}
          />
          
          {/* Support section */}
          <div 
            className={`px-4 py-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isAnimating ? '200ms' : '0ms' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/60 mb-1 uppercase tracking-[0.3em]">Need help?</p>
                <p className="text-sm text-white/90 font-semibold">support@colorweave.ai</p>
              </div>
              <svg className="h-5 w-5 text-white/30" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3.5 6l6.5 4 6.5-4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="14" height="10" rx="2" ry="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
