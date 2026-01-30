import React from 'react';
import { ExternalLink, Star, ShoppingCart, RefreshCw } from 'lucide-react';
import { NavigationProps } from '../types';

const AffiliateTeaser: React.FC<NavigationProps> = ({ onNavigate }) => {
  const products = [
    {
      title: "Notebook Journal",
      rating: 4.4,
      reviews: "2,673",
      image: "/images/notebook-journal.jpg",
      link: "https://amzn.to/4jmm1qb"
    },
    {
      title: "Premium Key Holder",
      rating: 4.5,
      reviews: "565",
      image: "/images/premium-key-holder.jpg",
      link: "https://amzn.to/3Lkk2pz"
    },
    {
      title: "Handicrafts Standing Krishna",
      rating: 4.5,
      reviews: "748",
      image: "/images/handicrafts-standing-krishna.jpg",
      link: "https://amzn.to/4pjjr5u"
    },
    {
        title: "Gita Quotes Jar",
        rating: 3.6,
        reviews: "11",
        image: "/images/gita-quotes-jar.jpg",
        link: "https://amzn.to/3KU80Dq"
      }
  ];

  // Bright, eye-catching button style
  const actionButtonStyle = "flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-amber-900/50 hover:shadow-amber-500/40 transform hover:scale-105 transition-all duration-300 border border-amber-400/30";

  return (
    <section className="py-20 bg-amber-950/20 border-t border-slate-800 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                  Curated <span className="text-amber-400">Shopping</span> Finds
                </h2>
                <div className="flex items-start gap-3 text-slate-400 max-w-xl text-lg">
                  <RefreshCw className="h-5 w-5 mt-1 text-amber-500 flex-shrink-0 animate-spin-slow" />
                  <p>
                    These suggestions are refreshed frequently! Check back often for new spiritual essentials, books, and meditation gear at the best prices.
                  </p>
                </div>
            </div>
            {/* Top Button */}
            <button 
                onClick={() => onNavigate('/shopping')}
                className={actionButtonStyle}
            >
                View Full Collection <ExternalLink className="h-5 w-5" />
            </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-900/10 flex flex-col">
              {/* Clickable Image Area */}
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden bg-white p-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/e2e8f0/1e293b?text=Amazon+Find";
                  }}
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md bg-slate-900 text-amber-400 border border-amber-400 z-10">
                    Amazon
                </div>
              </a>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                    {/* Clickable Title */}
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <h3 className="font-semibold text-lg line-clamp-1 text-slate-200 group-hover:text-amber-400 transition-colors">
                            {product.title}
                        </h3>
                    </a>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-slate-600 ml-1">({product.reviews} reviews)</span>
                </div>
                <div className="mt-auto pt-4">
                    <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-amber-600 text-amber-500 hover:text-white py-3 rounded-lg transition-all font-bold text-sm"
                    >
                        <ShoppingCart className="h-4 w-4" /> Buy Now
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
            <button 
                onClick={() => onNavigate('/shopping')}
                className={actionButtonStyle}
            >
                View Full Collection <ExternalLink className="h-5 w-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateTeaser;