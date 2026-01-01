import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { NavigationProps } from '../types';

const Hero: React.FC<NavigationProps> = ({ onNavigate }) => {
  // FIXED: Path should be '/images/hero.jpg', not 'public/images/hero.jpg'
  const [imgSrc, setImgSrc] = useState("/images/hero.jpg");
  const fallbackSrc = "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className="relative bg-slate-950 pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
                <Sparkles className="h-3 w-3" /> <span>Discover the Truth</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6 font-serif">
              Timeless Wisdom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
                For Modern Life
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Explore the profound teachings of the Bhagavad Gita. Find clarity, peace, and purpose through our curated ebooks and spiritual collections.
              <br />
              <br />
               "Bhagavad Gita’s Secrets to Unlock the Powerful Mindset – No Complex Jargon!"
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('/ebooks')}
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-amber-900/40"
              >
                Get Ebooks
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square">
               {/* Main Image */}
               <img 
                 src={imgSrc}
                 alt="Bhagavad Gita" 
                 className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-amber-900/20 z-10 relative border border-slate-800"
                 onError={(e) => {
                     console.error("Hero image failed to load:", imgSrc);
                     if (imgSrc !== fallbackSrc) {
                         setImgSrc(fallbackSrc);
                     }
                 }}
               />
               
               {/* Decorative border offset */}
               <div className="absolute inset-0 border-2 border-amber-500/30 rounded-[2rem] transform translate-x-4 translate-y-4 -z-0"></div>

               {/* Floating Quote Card - Positioned absolute on top of the image */}
               <div className="absolute -top-6 md:top-6 -left-4 md:-left-12 bg-slate-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl z-20 w-72 border border-slate-700 animate-in fade-in slide-in-from-top-4 duration-1000 delay-300">
                 <div className="flex flex-col gap-2">
                   <p className="text-amber-100 italic font-serif text-sm">
                     "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
                   </p>
                   <p className="text-amber-500 text-xs font-bold self-end">— Chapter 2, Verse 47</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;