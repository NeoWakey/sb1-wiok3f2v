interface NavLinkProps {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-200 hover:text-blue-400 transition-colors"
    >
      {label}
    </a>
  );
}