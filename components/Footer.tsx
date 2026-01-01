import React, { useState } from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { NavigationProps } from '../types';

const Footer: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [logoSrc, setLogoSrc] = useState("/images/logo.png");
  const fallbackLogo = "https://ui-avatars.com/api/?name=BG&background=f59e0b&color=fff&rounded=true&bold=true";

  const handleNavClick = (path: string) => {
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => handleNavClick('/')}>
                <img 
                    src={logoSrc}
                    alt="Logo" 
                    className="w-10 h-10 rounded-full border border-amber-500" 
                    onError={() => {
                        console.error("Footer logo failed to load:", logoSrc);
                        if (logoSrc !== fallbackLogo) {
                            setLogoSrc(fallbackLogo);
                        }
                    }}
                />
                <span className="text-xl font-bold text-amber-500 font-serif">Bhagavad Gita Quotes</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Spreading the eternal message of the Gita. Join our community to find peace, wisdom, and spiritual growth in the modern world.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/bhagavadgitaquotefb?" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-500 hover:bg-amber-600 hover:text-white transition-colors border border-slate-800 hover:border-amber-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bhagavad.gita.quote?igsh=NGNvdWxqZnh1cnV1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-500 hover:bg-amber-600 hover:text-white transition-colors border border-slate-800 hover:border-amber-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-200 mb-6 font-serif">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><button onClick={() => handleNavClick('/')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('/ebooks')} className="hover:text-amber-500 transition-colors">BGQuote Ebooks</button></li>
              <li><button onClick={() => handleNavClick('/amazon-finds')} className="hover:text-amber-500 transition-colors">Amazon Finds</button></li>
              <li><button onClick={() => handleNavClick('/flipkart-finds')} className="hover:text-amber-500 transition-colors">Flipkart Finds</button></li>
              <li><button onClick={() => handleNavClick('/about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-slate-200 mb-6 font-serif">Connect</h4>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span>bhagavadgitaquote@gmail.com</span>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mt-4">
                    <p className="text-xs text-amber-500 font-medium italic">"No happiness neither in this world, nor the world beyond those who doubt oneself"</p>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-600">
            <p>Copyright © {new Date().getFullYear()} Bhagavad Gita Quotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;