import React from 'react';
import { Check, BookOpen, ShoppingBag, ArrowRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import Testimonials from './Testimonials';
import { NavigationProps } from '../types';

const EbooksPage: React.FC<NavigationProps> = ({ onNavigate }) => {

  return (
    <div className="animate-in fade-in duration-500">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
                <BookOpen className="h-3 w-3" /> <span>Digital Library</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">BGQuote Ebooks Collection</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Unlock the secrets of the universe, simplified for every age and stage of life. Instant access to timeless wisdom.
          </p>
        </div>
      </section>

      {/* --- Value Proposition Section 1 - Life Questions --- */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="/images/ebook-1.jpg" 
                  alt="Let's Ask Krishna Ebook" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500"
                  onError={(e) => e.currentTarget.src = "https://placehold.co/600x800/1e293b/fbbf24?text=Life+Questions"}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2 block">For The Seekers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Unravel Life's Toughest Questions</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Why do bad things happen to good people? What is my purpose? "Let’s Ask Krishna" brings you gentle, profound answers directly from the scriptures, simplified for your daily struggles.
              </p>
              <ul className="space-y-4 mb-8">
                {['Direct answers to modern dilemmas', 'Calming and reassuring tone', 'Practical takeaways for peace of mind'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">₹147</span>
                  <span className="text-slate-500 text-sm line-through">₹299</span>
              </div>
              <a 
                href="https://rzp.io/rzp/letsaskkrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-amber-900/20 transition-all flex items-center gap-2 group w-fit hover:scale-105"
              >
                Purchase Ebook <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Proposition Section 2 - Modern Gita (Reversed Layout) --- */}
      <section className="py-20 bg-slate-900 border-b border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="/images/ebook-2.jpg" 
                  alt="Gita for Today's World" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-800 -rotate-2 hover:rotate-0 transition-transform duration-500"
                  onError={(e) => e.currentTarget.src = "https://placehold.co/600x800/1e293b/fbbf24?text=Modern+Gita"}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">For The Modern Mind</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Ancient Wisdom, Modern Context</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                The Bhagavad Gita isn't just for monks. Discover how its verses apply to your career, relationships, and mental health. No complex jargon, just actionable wisdom.
              </p>
              <ul className="space-y-4 mb-8">
                {['Verse-by-verse modern breakdown', 'Real-world examples', 'Techniques for stress management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">₹127</span>
                  <span className="text-slate-500 text-sm line-through">₹299</span>
              </div>
              <a 
                href="https://rzp.io/rzp/BGQuote1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 group w-fit hover:scale-105"
              >
                Purchase Ebook <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Proposition Section 3 - Kids --- */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="/images/ebook-3.jpg" 
                  alt="Gita For Kids" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500"
                  onError={(e) => e.currentTarget.src = "https://placehold.co/600x800/1e293b/fbbf24?text=For+Kids"}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-2 block">For The Next Generation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Bedtime Stories with Values</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Plant the seeds of dharma early. Beautiful illustrations and simplified stories that teach courage, kindness, and focus to children ages 3-10.
              </p>
              <ul className="space-y-4 mb-8">
                {['Engaging storytelling format', 'Vibrant full-color illustrations', 'Moral lessons for character building'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">₹119</span>
                  <span className="text-slate-500 text-sm line-through">₹299</span>
              </div>
              <a 
                href="https://rzp.io/rzp/BGforkids"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-900/20 transition-all flex items-center gap-2 group w-fit hover:scale-105"
              >
                Purchase Ebook <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer - ENHANCED */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto bg-slate-800/80 backdrop-blur-md border border-amber-500/50 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 shadow-2xl shadow-amber-900/20 relative overflow-hidden">
                {/* Ribbon */}
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-md z-20">
                   50% OFF
                </div>

                {/* Left: Bundle Image */}
                <div className="w-full max-w-[280px] lg:max-w-xs flex-shrink-0 flex justify-center">
                    <img 
                        src="/images/bundle-pack.png" 
                        alt="Ultimate Wisdom Bundle" 
                        className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/600x800/1e293b/fbbf24?text=Bundle+Pack";
                        }}
                    />
                </div>

                {/* Middle: Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-amber-900/40 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
                        <Clock className="h-4 w-4" />
                        <span className="uppercase tracking-widest">Limited Period Offer</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Buy More, <span className="text-amber-500">Save More!</span></h2>
                    <p className="text-xl text-slate-300 mb-4 font-medium">Ultimate Wisdom Bundle</p>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
                        Get all 3 bestselling ebooks for a complete spiritual journey. Don't miss this chance to transform your life at a fraction of the cost.
                    </p>
                    
                    <div className="flex flex-col gap-3 items-center lg:items-start mb-6">
                         <div className="flex items-center gap-3 text-slate-200 font-medium">
                            <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check className="h-4 w-4 text-green-500" /></div> 
                            <span>Let's Ask Krishna</span>
                         </div>
                         <div className="flex items-center gap-3 text-slate-200 font-medium">
                            <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check className="h-4 w-4 text-green-500" /></div>
                            <span>Bhagavad Gita for Modern World</span>
                         </div>
                         <div className="flex items-center gap-3 text-slate-200 font-medium">
                            <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><Check className="h-4 w-4 text-green-500" /></div>
                            <span>Bhagavad Gita for kids</span>
                         </div>
                    </div>
                </div>

                {/* Right: Pricing & CTA */}
                <div className="flex flex-col items-center bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-700 w-full lg:w-auto min-w-[280px] lg:min-w-[300px]">
                    <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-3 mb-1">
                             <span className="text-slate-500 text-xl line-through decoration-red-500 decoration-2">₹393</span>
                             <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">SAVE ₹196</span>
                        </div>
                        <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">₹197</span>
                        <p className="text-amber-500 text-sm font-medium mt-2 flex items-center justify-center gap-1">
                            <AlertCircle className="h-3 w-3" /> Offer ends soon
                        </p>
                    </div>
                    <a 
                      href="https://rzp.io/rzp/BGQuotecombo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-amber-900/50 transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        <ShoppingBag className="h-5 w-5" />
                        Grab The Bundle
                    </a>
                    <p className="text-slate-500 text-xs mt-4 text-center">
                        Secure Payment • Instant Email Delivery
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials reuse */}
      <Testimonials />

      {/* Amazon/Flipkart Hook (Friendly Suggestion) */}
      <div className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold text-white mb-6 font-serif">More Finds from BG Quote</h3>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  As a friendly suggestion, check out our curated list of other products available on Amazon and Flipkart. We've handpicked items that we think you'll really like!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => onNavigate('/amazon-finds')}
                    className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-amber-500/50 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                     Explore Amazon Finds <ArrowRight className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => onNavigate('/flipkart-finds')}
                    className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                     Explore Flipkart Finds <ArrowRight className="h-4 w-4" />
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EbooksPage;