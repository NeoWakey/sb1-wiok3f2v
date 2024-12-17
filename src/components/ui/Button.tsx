interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  external?: boolean;
}

export default function Button({ children, href, variant = 'primary', external }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-colors';
  const variants = {
    primary: 'bg-[#6907be] hover:bg-[#5706a0] text-white',
    outline: 'border border-white hover:bg-white/10',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}