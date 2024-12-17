import { NAV_LINKS } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-normal text-white mb-4">Hero.AI</h2>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4 bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
              Socials
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/JHHERCULES1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium mb-4 bg-gradient-to-r from-white to-[#6907be] bg-clip-text text-transparent">
              Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright text centered at bottom */}
        <div className="text-center text-gray-400">
          © {currentYear} Hero.AI Inc - All rights reserved.
        </div>
      </div>
    </footer>
  );
}