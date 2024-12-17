import { COMPANY_NAME, NAV_LINKS, CALENDLY_URL } from '../../utils/constants';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import NavLink from './NavLink';

export default function Header() {
  const isVisible = useScrollDirection();

  return (
    <header className={`fixed w-full bg-white/10 backdrop-blur-md z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="flex items-center cursor-pointer"
          >
            <span className="font-normal text-xl">{COMPANY_NAME}</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}