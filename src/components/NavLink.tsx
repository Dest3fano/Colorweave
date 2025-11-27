interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outlined' | 'menu';
}

export default function NavLink({ href, children, variant = 'default' }: NavLinkProps) {
  const baseStyles = "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2";
  
  const variantStyles = {
    default: "text-foreground hover:text-primary hover:bg-muted",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary",
    outlined: "relative overflow-hidden bg-white text-gray-900 border border-gray-200 shadow-md hover:border-primary/60 hover:bg-white hover:shadow-[0_15px_35px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-500/0 after:via-purple-400/10 after:to-blue-400/0 after:opacity-0 hover:after:opacity-100 after:transition-opacity",
    menu: "relative px-3 py-1 text-sm font-semibold text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/5 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-blue-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </a>
  );
}
