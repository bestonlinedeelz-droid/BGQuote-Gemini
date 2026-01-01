import React from 'react';
import { BookHeart, Flame, ShoppingBag } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Authentic Wisdom",
      description: "Access accurate translations and commentaries of the Bhagavad Gita to understand the deepest truths.",
      icon: <BookHeart className="h-8 w-8 text-slate-900" />,
      color: "bg-amber-500"
    },
    {
      title: "Spiritual Lifestyle",
      description: "Incorporate the teachings into your daily life with our practical guides and community support.",
      icon: <Flame className="h-8 w-8 text-slate-900" />,
      color: "bg-orange-500"
    },
    {
      title: "Curated Finds",
      description: "Discover high-quality spiritual products from Amazon and Flipkart, handpicked for your journey.",
      icon: <ShoppingBag className="h-8 w-8 text-slate-900" />,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 font-serif">Path to Enlightenment</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We bridge the gap between ancient wisdom and modern living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 -z-0 border-t-2 border-dashed border-slate-700"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/20 mb-8 transition-transform group-hover:scale-110 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;