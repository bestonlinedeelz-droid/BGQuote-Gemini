import React from 'react';
import { Check, BookOpen, Star, Sparkles, ShoppingBag } from 'lucide-react';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

const EbooksPage: React.FC = () => {
  const books = [
    {
      title: "Let’s Ask Krishna – Life Questions",
      price: "₹147",
      description: "Real-Life Questions answered with Krishna’s gentle reply.",
      features: [
        "Real-Life Questions & Answers",
        "Krishna’s Gentle Reply",
        "Bhagavad Gita Sanskrit Verse",
        "Section recaps for reflection"
      ],
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", // Placeholder
      popular: false
    },
    {
      title: "Bhagavad Gita for Today's world",
      price: "₹127",
      description: "Ancient wisdom explained with modern examples for daily life.",
      features: [
        "Verse → Transliteration → Meaning",
        "Modern examples for every verse",
        "Powerful quotes included",
        "Real-life applications"
      ],
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", // Placeholder
      popular: true
    },
    {
      title: "Bhagavad Gita for kids",
      price: "₹119",
      description: "Colorful, story-based Gita lessons for children ages 3–10.",
      features: [
        "Fun stories for ages 3–10",
        "Simplified Gita wisdom",
        "Visually rich illustrations",
        "Ideal for bedtime moral lessons"
      ],
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop", // Placeholder
      popular: false
    }
  ];

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

      {/* Books Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {books.map((book, index) => (
              <div 
                key={index} 
                className={`relative bg-slate-900 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${book.popular ? 'border-amber-500 shadow-xl shadow-amber-900/20 scale-105 md:-mt-4 z-10' : 'border-slate-800 hover:border-amber-500/50'}`}
              >
                {book.popular && (
                  <div className="absolute top-0 inset-x-0 bg-amber-500 text-slate-900 text-center py-1 text-xs font-bold uppercase tracking-wider z-20">
                    Most Popular
                  </div>
                )}
                
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 font-serif min-h-[3.5rem]">{book.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{book.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {book.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-800">
                    <div className="flex items-end gap-2 mb-4">
                        <span className="text-3xl font-bold text-white">{book.price}</span>
                        <span className="text-slate-500 text-sm mb-1 line-through">₹299</span>
                    </div>
                    <button className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${book.popular ? 'bg-amber-500 text-slate-900 hover:bg-amber-400' : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50'}`}>
                        Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-slate-900"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-2xl">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-amber-400 font-bold mb-4">
                        <Sparkles className="h-5 w-5" />
                        <span className="uppercase tracking-widest text-sm">Limited Time Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ultimate Wisdom Bundle</h2>
                    <p className="text-slate-300 mb-6">
                        Get all 3 bestselling ebooks for a complete spiritual journey. From kids' stories to deep life questions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                         <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-400">Life Questions</span>
                         <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-400">Modern Gita</span>
                         <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-400">Kids Edition</span>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center mb-6">
                        <span className="text-slate-400 text-lg line-through block">₹393</span>
                        <span className="text-5xl font-bold text-amber-500">₹197</span>
                    </div>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-amber-900/50 transform hover:scale-105 transition-all flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        Get Full Bundle
                    </button>
                    <p className="text-slate-500 text-xs mt-3">Instant Email Delivery</p>
                </div>
            </div>
        </div>
      </section>

      {/* Reused Sections */}
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default EbooksPage;