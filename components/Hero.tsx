import React from 'react';
import { ArrowRight, Sparkles, BookOpen, MessageCircle, Download, Users, Star, CreditCard, UserPlus, EyeOff } from 'lucide-react';
import { NavigationProps } from '../types';

const Hero: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-slate-950 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Timeless Wisdom</span>
          </h1>
          <p className="text-lg text-slate-400">
            Ancient teachings for the modern soul. Choose your path to clarity and peace below.
          </p>
        </div>

        {/* Split Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          
          {/* Column 1: Ebooks */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 hover:border-amber-500/50 transition-all duration-500 shadow-2xl hover:shadow-amber-900/20 flex flex-col">
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
             
             <div className="p-8 md:p-12 relative z-10 flex flex-col flex-grow">
                <div className="mb-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-amber-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
                        <BookOpen className="h-3 w-3" /> <span>Knowledge</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif group-hover:text-amber-200 transition-colors">
                        BGQuote Ebooks
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-sm">
                        Unlock the secrets of the Bhagavad Gita with our simplified guides. Practical wisdom for work, relationships, and inner peace.
                    </p>

                    {/* Stats Icons */}
                    <div className="grid grid-cols-3 gap-3 mb-8 border-t border-slate-700/50 pt-6">
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-2 bg-amber-500/10 rounded-full text-amber-500 border border-amber-500/20">
                                <Download className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">Instant<br/>Access</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 border border-orange-500/20">
                                <Users className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">23k+<br/>Members</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-500 border border-yellow-500/20">
                                <Star className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">Daily<br/>Wisdom</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4">
                     <button 
                        onClick={() => onNavigate('/ebooks')}
                        className="w-full sm:w-auto bg-white text-slate-950 hover:bg-amber-400 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group-hover:scale-105"
                     >
                        Get Ebooks
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>

                {/* Decorative Image */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 pointer-events-none">
                   <img 
                      src="/images/ebook-1.jpg" 
                      alt="Ebook Preview" 
                      className="w-full h-full object-cover rounded-2xl shadow-2xl opacity-60 mask-image-gradient"
                      style={{ maskImage: 'linear-gradient(to top left, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top left, black 40%, transparent 100%)' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                   />
                </div>
             </div>
          </div>

          {/* Column 2: Lets Ask Krishna */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-950 via-slate-900 to-slate-900 border border-blue-900/50 hover:border-blue-400/50 transition-all duration-500 shadow-2xl hover:shadow-blue-900/20 flex flex-col">
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-75"></div>

             <div className="p-8 md:p-12 relative z-10 flex flex-col flex-grow">
                 <div className="mb-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
                        <Sparkles className="h-3 w-3" /> <span>New Service</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif group-hover:text-blue-200 transition-colors">
                        Lets Ask Krishna
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-sm">
                        Have a burning life question? Ask anonymously and receive compassionate answers in the voice of Lord Krishna.
                    </p>

                    {/* Step Icons */}
                    <div className="grid grid-cols-4 gap-2 mb-8 border-t border-blue-800/50 pt-6">
                        <div className="flex flex-col items-center text-center gap-2">
                             <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
                                <CreditCard className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">1. Pay</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                             <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
                                <UserPlus className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">2. Join</span>
                        </div>
                         <div className="flex flex-col items-center text-center gap-2">
                             <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
                                <EyeOff className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">3. Ask</span>
                        </div>
                         <div className="flex flex-col items-center text-center gap-2">
                             <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold">4. Receive</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4">
                     <button 
                        onClick={() => onNavigate('/lets-ask-krishna')}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 group-hover:scale-105"
                     >
                        <MessageCircle className="h-5 w-5" />
                        Ask Now
                     </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                    <Sparkles className="text-blue-400 w-64 h-64 -mb-16 -mr-16 blur-[1px]" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;