import React from 'react';
import { Star, ShoppingCart, Package } from 'lucide-react';
import HowItWorks from './HowItWorks';

const ShoppingPage: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Bhagavad Gita As It Is",
      description: "The most authentic translation with elaborate purports.",
      price: "₹350",
      rating: 4.9,
      reviews: 1250,
      // Image named as per title
      image: "/images/bhagavad-gita-as-it-is.jpg",
      // Link as per title (placeholder)
      link: "https://amzn.to/49Oypfy"
    },
    {
      id: 2,
      title: "Brass Incense Holder",
      description: "Handcrafted brass holder for sticks and cones.",
      price: "₹450",
      rating: 4.7,
      reviews: 890,
      image: "/images/brass-incense-holder.jpg",
      link: "https://amzn.to/4akbGYE"
    },
    {
      id: 3,
      title: "Lord Krishna Idol Brass",
      description: "Exquisite 6-inch brass idol for your home altar.",
      price: "₹1,299",
      rating: 4.8,
      reviews: 450,
      image: "/images/lord-krishna-idol-brass.jpg",
      link: "https://amzn.to/4bY1573"
    },
    {
      id: 4,
      title: "Wooden Book Stand Rehal",
      description: "Sheesham wood stand for reading holy scriptures comfortably.",
      price: "₹599",
      rating: 4.5,
      reviews: 320,
      image: "/images/wooden-book-stand-rehal.jpg",
      link: "https://amzn.to/4a0bdtz"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-16 border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
                <Package className="h-3 w-3" /> <span>Curated Essentials</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Spiritual Shopping</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Top-rated spiritual essentials delivered quickly to your doorstep. We've done the research so you don't have to.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col">
                {/* Image */}
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="h-64 overflow-hidden bg-white relative flex items-center justify-center p-4">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/400x400/fff/1e293b?text=Product";
                        }}
                    />
                    <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Best Seller
                    </div>
                </a>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Minor Font Label for Amazon */}
                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-1 opacity-80">Amazon</span>
                    
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-amber-400 transition-colors">{product.title}</h3>
                    </a>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4 mt-auto">
                        <div className="flex text-amber-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-sm font-bold text-white">{product.rating}</span>
                        </div>
                        <span className="text-xs text-slate-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                        <span className="text-xl font-bold text-white">{product.price}</span>
                        <a 
                            href={product.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-800 hover:bg-amber-600 hover:text-white text-amber-500 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            <ShoppingCart className="h-4 w-4" /> Buy Now
                        </a>
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

export default ShoppingPage;