import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationProps } from '../types';

const Header: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/images/logo.png");
  // Use a reliable placeholder if local image fails
  const fallbackLogo = "https://ui-avatars.com/api/?name=BG&background=f59e0b&color=fff&rounded=true&bold=true&size=128";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "BGQuote Ebooks", href: "/ebooks" },
    { label: "Shopping", href: "/shopping" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-amber-500/30 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button onClick={() => handleNavClick('/')} className="flex items-center gap-3 group focus:outline-none">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={logoSrc}
                  alt="BG Logo"
                  className="h-12 w-12 rounded-full border-2 border-amber-500 object-cover relative z-10"
                  onError={(e) => {
                     if (e.currentTarget.src !== fallbackLogo) {
                         e.currentTarget.src = fallbackLogo;
                     }
                  }}
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-amber-500 tracking-wide font-serif">
                Bhagavad Gita Quotes
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.label} 
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium transition-colors relative group py-2 ${link.href === '/lets-ask-krishna' ? 'text-blue-400 hover:text-blue-300' : 'text-slate-300 hover:text-amber-400'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${link.href === '/lets-ask-krishna' ? 'bg-blue-400' : 'bg-amber-500'}`}></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Actions - Only Mobile Menu Toggle Remains */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-amber-100 hover:text-amber-400"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200 h-screen">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.href)}
                className={`py-3 px-4 font-medium rounded-lg transition-colors flex justify-between items-center w-full text-left ${link.href === '/lets-ask-krishna' ? 'text-blue-300 bg-slate-800' : 'text-slate-200 hover:text-amber-400 hover:bg-slate-800'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;