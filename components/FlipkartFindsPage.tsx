import React from 'react';
import { ExternalLink, Star, ShoppingCart, Sparkles } from 'lucide-react';
import HowItWorks from './HowItWorks';

const FlipkartFindsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Original Tulsi Mala",
      description: "108 beads original Tulsi mala for chanting and meditation.",
      price: "₹199",
      rating: 4.5,
      reviews: 2100,
      image: "/images/flipkart-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Premium Yoga Mat",
      description: "Anti-slip, eco-friendly yoga mat with alignment lines.",
      price: "₹899",
      rating: 4.6,
      reviews: 540,
      image: "/images/flipkart-2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Brass Akhand Diya",
      description: "Traditional oil lamp with borosilicate glass cover.",
      price: "₹349",
      rating: 4.4,
      reviews: 1100,
      image: "/images/flipkart-3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Meditation Cushion",
      description: "Ergonomic buckwheat hull cushion for prolonged sitting.",
      price: "₹999",
      rating: 4.7,
      reviews: 150,
      image: "/images/flipkart-4.jpg",
      link: "#"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-16 border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="h-3 w-3" /> <span>Flipkart Assured Picks</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Flipkart Pooja Essentials</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Quality checked pooja items and meditation gear at the best prices. Authentic and reliable.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                {/* Image */}
                <div className="h-64 overflow-hidden bg-white relative flex items-center justify-center p-4">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/400x400/fff/1e293b?text=Flipkart+Item";
                        }}
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Flipkart Assured
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-blue-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-sm font-bold text-white">{product.rating}</span>
                        </div>
                        <span className="text-xs text-slate-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                        <span className="text-xl font-bold text-white">{product.price}</span>
                        <button className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600 hover:text-white text-blue-500 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                            <ShoppingCart className="h-4 w-4" /> Buy Now
                        </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <HowItWorks />
    </div>
  );
};

export default FlipkartFindsPage;