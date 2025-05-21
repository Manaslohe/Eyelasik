import { Link, useLocation } from 'react-router-dom';
import '@fontsource/montserrat'; // Install via npm if not added

function Header() {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="bg-[#013A83] text-white font-montserrat">
      <nav className="container mx-auto py-8">
        <ul className="flex justify-center gap-20 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`uppercase ${
                  location.pathname === item.path
                    ? 'underline underline-offset-4'
                    : 'hover:underline hover:underline-offset-4'
                }`}
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
