import React from 'react';
import { ExternalLink, Star, ShoppingCart } from 'lucide-react';
import { NavigationProps } from '../types';

const AffiliateTeaser: React.FC<NavigationProps> = ({ onNavigate }) => {
  const products = [
    {
      title: "Bhagavad Gita As It Is",
      price: "₹350",
      rating: 4.9,
      image: "/images/find-1.jpg",
      source: "Amazon"
    },
    {
      title: "Meditation Beads (Tulsi)",
      price: "₹199",
      rating: 4.5,
      image: "/images/find-2.jpg",
      source: "Flipkart"
    },
    {
      title: "Brass Incense Holder",
      price: "₹450",
      rating: 4.7,
      image: "/images/find-3.jpg",
      source: "Amazon"
    },
    {
        title: "Yoga Mat - Premium",
        price: "₹899",
        rating: 4.6,
        image: "/images/find-4.jpg",
        source: "Flipkart"
      }
  ];

  return (
    <section className="py-20 bg-amber-950/20 border-t border-slate-800 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                  Divine Collections on <span className="text-amber-400">Amazon</span> & <span className="text-blue-400">Flipkart</span>
                </h2>
                <p className="text-slate-400 max-w-xl text-lg">
                  Enhance your spiritual practice with our handpicked selection of books, pooja essentials, and meditation accessories.
                </p>
            </div>
            <button 
                onClick={() => onNavigate('/amazon-finds')}
                className="flex items-center gap-2 text-amber-100 border border-amber-500/30 px-6 py-3 rounded-full hover:bg-amber-500/10 transition bg-slate-800/50 backdrop-blur-sm"
            >
                View All Recommendations <ExternalLink className="h-4 w-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-900/10">
              <div className="relative h-64 overflow-hidden bg-white p-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/e2e8f0/1e293b?text=Image+Not+Found";
                  }}
                />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md ${product.source === 'Amazon' ? 'bg-slate-900 text-amber-400 border border-amber-400' : 'bg-blue-600 text-white'}`}>
                    {product.source}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1 text-slate-200 group-hover:text-amber-400 transition-colors">{product.title}</h3>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 mb-4 text-sm">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-slate-600 ml-1">(120+ reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">{product.price}</span>
                    <button 
                        onClick={() => onNavigate(product.source === 'Amazon' ? '/amazon-finds' : '/flipkart-finds')}
                        className="h-8 w-8 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors"
                    >
                        <ShoppingCart className="h-4 w-4" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateTeaser;