import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ bagCount = 0, onOpenBag, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Store', href: '#' },
    { label: 'Mac', href: '#' },
    { label: 'iPad', href: '#' },
    { label: 'iPhone', href: '#' },
    { label: 'Watch', href: '#' },
    { label: 'AirPods', href: '#', active: true },
    { label: 'TV & Home', href: '#' },
    { label: 'Entertainment', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Support', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Primary Global Apple Navigation */}
      <nav
        className={`w-full text-xs font-normal transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#161617]/85 backdrop-blur-md text-[#d2d2d7] border-b border-[#333336]/60'
            : 'bg-[#161617]/95 backdrop-blur-md text-[#d2d2d7]'
        }`}
      >
        <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between">
          {/* Apple Logo */}
          <a
            href="#"
            className="text-white hover:opacity-75 transition-opacity flex items-center"
            aria-label="Apple Home"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 170 170"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.79-11.89-14.24-5.35-8.26-9.67-17.6-12.98-28.02-3.3-10.42-4.96-20.4-4.96-29.93 0-14.16 3.6-25.75 10.8-34.77 7.21-9.02 16.32-13.63 27.33-13.84 4.58 0 9.78 1.25 15.6 3.75 5.82 2.5 9.74 3.79 11.76 3.86 1.63 0 5.76-1.39 12.39-4.16 6.64-2.77 12.24-3.9 16.82-3.41 12.51.98 22.38 5.76 29.61 14.34-10.89 6.63-16.22 15.75-15.98 27.37.23 9.34 3.81 17.15 10.74 23.42 6.94 6.27 15.22 9.77 24.84 10.51-2.18 6.63-4.78 13.06-7.8 19.3zM119.22 33.64c0-7.38 2.64-14.28 7.92-20.7 5.28-6.42 11.89-10.63 19.82-12.64.44 1.3.66 2.45.66 3.44 0 7.37-2.73 14.41-8.19 21.11-5.46 6.7-12.08 10.74-19.86 12.12-.22-1.09-.35-2.2-.35-3.33z" />
            </svg>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-150 hover:text-white ${
                  item.active ? 'text-white font-medium' : 'text-[#d2d2d7]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Icons: Search & Bag */}
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenSearch}
              className="text-[#d2d2d7] hover:text-white transition-colors"
              aria-label="Search apple.com"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenBag}
              className="text-[#d2d2d7] hover:text-white transition-colors relative"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {bagCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#0071e3] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {bagCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#d2d2d7] hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161617] border-b border-neutral-800 px-6 py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-1.5 border-b border-neutral-800/40 ${
                  item.active ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
