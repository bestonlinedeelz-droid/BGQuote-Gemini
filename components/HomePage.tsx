import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import AffiliateTeaser from './AffiliateTeaser';
import WhatsAppCta from './WhatsAppCta';
import { NavigationProps } from '../types';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const CtaButton = () => (
    <div className="bg-slate-950 py-10 flex justify-center w-full px-4">
         <button 
            onClick={() => onNavigate('/ebooks')}
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold py-4 px-12 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-amber-900/40 hover:scale-105"
          >
            Get Ebooks
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
    </div>
  );

  return (
    <>
      <Hero onNavigate={onNavigate} />
      
      <CtaButton />
      <HowItWorks />
      <CtaButton />

      <Testimonials />
      <CtaButton />

      <AffiliateTeaser onNavigate={onNavigate} />
      <WhatsAppCta />
    </>
  );
};

export default HomePage;