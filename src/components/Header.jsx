import { Link, useLocation } from 'react-router-dom';
import '@fontsource/montserrat';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="bg-[#013A83] text-white font-montserrat">
      <nav className="container mx-auto px-4 py-4 md:py-6 lg:py-8">
        <div className="flex justify-end items-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <ul className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-20 text-sm font-medium tracking-wide ${
          isMenuOpen ? 'mt-4' : ''
        }`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`uppercase block py-2 lg:py-0 ${
                  location.pathname === item.path
                    ? 'underline underline-offset-4'
                    : 'hover:underline hover:underline-offset-4'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
