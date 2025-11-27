interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outlined';
}

export default function NavLink({ href, children, variant = 'default' }: NavLinkProps) {
  const baseStyles = "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2";
  
  const variantStyles = {
    default: "text-foreground hover:text-primary hover:bg-muted",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary",
    outlined: "bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
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
