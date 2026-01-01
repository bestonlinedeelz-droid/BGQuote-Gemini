import React from 'react';
import { Check, BookOpen, Sparkles, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      image: "/images/ebook-1.jpg", 
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
      image: "/images/ebook-2.jpg",
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
      image: "/images/ebook-3.jpg",
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

      {/* Books Grid - Quick View */}
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
                <div className="h-80 overflow-hidden relative bg-slate-800 group">
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load ebook image: ${book.image}`);
                        e.currentTarget.src = "https://placehold.co/600x900/1e293b/fbbf24?text=Book+Cover";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
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

      {/* --- Value Proposition Section 1 - Life Questions --- */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
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
              <button className="text-white border-b-2 border-amber-500 pb-1 hover:text-amber-500 transition-colors flex items-center gap-2 group">
                Purchase Ebook <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Proposition Section 2 - Modern Gita (Reversed Layout) --- */}
      <section className="py-20 bg-slate-900 border-t border-slate-900">
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
              <button className="text-white border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                Purchase Ebook <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Proposition Section 3 - Kids --- */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
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
              <button className="text-white border-b-2 border-green-500 pb-1 hover:text-green-500 transition-colors flex items-center gap-2 group">
                Purchase Ebook <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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
      <Testimonials />
    </div>
  );
};

export default EbooksPage;