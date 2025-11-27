import Logo from './Logo';
import NavLink from './NavLink';
import GetStartedBanner from './GetStartedBanner';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl">
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

          {/* Right: Navigation Items */}
          <div className="flex items-center gap-3">
            <NavLink href="/login" variant="outlined">
              Login
            </NavLink>
            
            <a href="/get-started" className="block">
              <GetStartedBanner />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
