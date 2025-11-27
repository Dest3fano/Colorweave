import Logo from './Logo';
import NavLink from './NavLink';
import GetStartedBanner from './GetStartedBanner';

const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#partners', label: 'Partners' },
  { href: '#mypassage', label: 'My Passage' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gradient-to-r from-[#090914]/95 via-[#0b0f1f]/95 to-[#090c15]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(5,6,12,0.45)]">
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
          
          {/* Center: Primary navigation */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <NavLink key={item.href} href={item.href} variant="menu">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
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
