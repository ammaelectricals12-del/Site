import { useState } from 'react';
import { Page } from '../types';
import { X, Menu } from 'lucide-react'; // Optional: for better icons

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl rounded-xl bg-black/70 backdrop-blur-lg shadow-xl">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src="/logo.jpg" alt="Logo" className="h-14 w-14 object-contain" />
            <span className="text-3xl font-bold text-white">Amma Electricals</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-amber-500'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:block bg-amber-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors"
          >
            Get Quote
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-3 bg-black/80 backdrop-blur-lg rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`text-base font-medium ${
                  currentPage === item.page
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-amber-500'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="bg-amber-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors"
            >
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
