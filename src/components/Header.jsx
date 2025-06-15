import { Link, useLocation } from 'react-router-dom';
import '@fontsource/montserrat-alternates';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/blog', label: 'BLOG & FAQs' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="bg-[#013A83] text-white font-['Montserrat_Alternates']">
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
        <ul className={`
          transform-gpu transition-all duration-300 ease-in-out text-center
          ${isMenuOpen ? 'h-[200px] opacity-100' : 'h-0 opacity-0 overflow-hidden'}
          lg:h-auto lg:opacity-100 lg:overflow-visible lg:text-left
          lg:flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-32 text-ls font-[500] tracking-wide
          w-full bg-[#013A83] lg:bg-transparent
        `}>
          {navItems.map((item) => (
            <li key={item.path} className={`
              transform transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
              lg:transform-none lg:opacity-100 lg:pointer-events-auto
            `}>
              <Link
                to={item.path}
                className={`uppercase block py-3 lg:py-1 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.path
                    ? ''
                    : ''
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
