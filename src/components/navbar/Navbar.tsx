'use client';

import { useState } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import GetStartedBanner from './GetStartedBanner';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar';

const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#partners', label: 'Partners' },
  { href: '#mypassage', label: 'My Passage' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <nav className="fixed top-[2.5rem] left-0 right-0 z-40 bg-gradient-to-r from-[#090914]/95 via-[#0b0f1f]/95 to-[#090c15]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(5,6,12,0.45)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block hover:opacity-80 transition-opacity duration-200">
              <Logo />
            </a>
          </div>
          
          {/* Center: Desktop navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <NavLink key={item.href} href={item.href} variant="menu">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right: Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <NavLink href="/login" variant="outlined">
              Login
            </NavLink>
            
            <a href="/get-started" className="block">
              <GetStartedBanner />
            </a>
          </div>

          {/* Mobile: Menu button only */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-white/5 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          menuItems={menuItems}
        />
      </div>
    </nav>
    </>
  );
}
