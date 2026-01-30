import React from 'react';
import { Star, ShoppingCart, TrendingUp } from 'lucide-react';
import WhatsAppCta from './WhatsAppCta';

const ShoppingPage: React.FC = () => {
  // Updated specific products
  const products = [
    // 1. Krishna Swing Light
    {
      id: 1,
      title: "Krishna Swing Light",
      description: "Enchanting 3D crystal illusion light featuring Lord Krishna on a swing. A divine night lamp for peaceful ambiance.",
      rating: 4.4,
      reviews: 42,
      image: "/images/krishna-swing-light.jpg",
      link: "https://amzn.to/4q2Q8o0",
      boughtStats: "300+ bought last month"
    },
    // 2. Wall Hanging
    {
      id: 2,
      title: "Krishna Mantra Wall Hanging",
      description: "Beautifully crafted wooden wall hanging with the powerful 'Vasudevaya' mantra. Adds a spiritual aura to your living space.",
      rating: 4.5,
      reviews: 259,
      image: "/images/krishna-mantra-wall-hanging.jpg",
      link: "https://amzn.to/4qLdMXr",
      boughtStats: ""
    },
    // 3. Pencil Set
    {
      id: 3,
      title: "Customized Name Pencil Set",
      description: "Personalized pencil set with custom names. Includes erasers and sharpeners, perfect for school kids and return gifts.",
      rating: 4.7,
      reviews: 48,
      image: "/images/customized-name-pencil-set.jpg",
      link: "https://amzn.to/3NKn07R",
      boughtStats: "1k+ bought past month"
    },
    // 4. Car Dashboard Idol
    {
      id: 4,
      title: "Krishna Idol for Car Dashboard",
      description: "Exquisite Lord Krishna murti perfect for car dashboards, office desks, or home mandirs. Exquisite craftsmanship.",
      rating: 5,
      reviews: 40,
      image: "/images/krishna-idol-for-car-dashboard.jpg",
      link: "https://amzn.to/3NTKCH0",
      boughtStats: "100+ bought"
    },
    // 5. Notebook Journal
    {
      id: 5,
      title: "Notebook Journal",
      description: "Elegant notebook perfect for journaling your spiritual thoughts, daily gratitude, or mantra writing. High-quality paper.",
      rating: 4.4,
      reviews: 2673,
      image: "/images/notebook-journal.jpg",
      link: "https://amzn.to/4jmm1qb",
      boughtStats: "2k+ bought past month"
    },
    // 6. Key Holder
    {
      id: 6,
      title: "Premium Key Holder",
      description: "Stylish wall-mounted key holder to keep your home organized. A perfect blend of utility and aesthetic decor.",
      rating: 4.5,
      reviews: 565,
      image: "/images/premium-key-holder.jpg",
      link: "https://amzn.to/3Lkk2pz",
      boughtStats: "500+ bought past month"
    },
    // 7. Standing Krishna
    {
      id: 7,
      title: "Handicrafts Standing Krishna",
      description: "Beautifully handcrafted standing Krishna idol. An auspicious addition to your home altar or living room decor.",
      rating: 4.5,
      reviews: 748,
      image: "/images/handicrafts-standing-krishna.jpg",
      link: "https://amzn.to/4pjjr5u",
      boughtStats: "800+ bought past month"
    },
    // 8. Gita Quotes Jar
    {
      id: 8,
      title: "Gita Quotes Jar",
      description: "Start your day with wisdom. This jar contains handpicked quotes from the Bhagavad Gita for daily inspiration and peace.",
      rating: 3.6,
      reviews: 11,
      image: "/images/gita-quotes-jar.jpg",
      link: "https://amzn.to/3KU80Dq",
      boughtStats: "500+ bought last month"
    },
    // 9. Bhagavad Gita As It Is
    {
      id: 9,
      title: "Bhagavad Gita As It Is",
      description: "The world's most popular edition of the Bhagavad Gita. Essential wisdom for spiritual growth, delivered as it is.",
      rating: 4.8,
      reviews: 25400,
      image: "/images/bhagavad-gita-as-it-is.jpg",
      link: "https://amzn.to/49Oypfy",
      boughtStats: "#1 Best Seller"
    },
    // 10. Wooden Book Stand
    {
      id: 10,
      title: "Handcrafted Wooden Book Stand",
      description: "Traditional wooden Rehal for reading holy books comfortably. Foldable design with intricate carving.",
      rating: 4.3,
      reviews: 1200,
      image: "/images/wooden-book-stand.jpg",
      link: "https://amzn.to/4a0bdtz",
      boughtStats: "1k+ bought past month"
    },
    // 11. Brass Incense Stand
    {
      id: 11,
      title: "Antique Brass Incense Holder",
      description: "Elegant brass agarbatti stand for your puja room. Catches ash effectively and adds a traditional touch.",
      rating: 4.4,
      reviews: 850,
      image: "/images/brass-incense-stand.jpg",
      link: "https://amzn.to/4akbGYE",
      boughtStats: "200+ bought past month"
    },
    // 12. Krishna Idol
    {
      id: 12,
      title: "Divine Krishna Idol",
      description: "Beautifully detailed Krishna statue. Perfect for home decor, gifting, or your personal altar.",
      rating: 4.6,
      reviews: 340,
      image: "/images/krishna-idol-gift.jpg",
      link: "https://amzn.to/4bY1573",
      boughtStats: "800+ bought past month"
    },
    // 13. Water Bottle
    {
      id: 13,
      title: "Water Bottle with Sipper Cap",
      description: "PEXPO Craft Pro 1000 ISI Certified Stainless Steel Sports/Fridge Water Bottle with Sipper Cap. Lightweight and BPA Free.",
      rating: 4.1,
      reviews: 3716,
      image: "/images/water-bottle-sipper.jpg",
      link: "https://amzn.to/4re0YbW",
      boughtStats: "Best Seller"
    },
    // 14. Fridge Storage Containers
    {
      id: 14,
      title: "Fridge Storage Containers",
      description: "Pack of 6 Fridge Organiser Storage Boxes with Removable Drain Plate and Lids. Stackable design to keep fruits & vegetables fresh.",
      rating: 4.2,
      reviews: 11188,
      image: "/images/fridge-storage-containers.jpg",
      link: "https://amzn.to/4a5ZoC1",
      boughtStats: "Best Seller"
    },
    // 15. Touch Control LED
    {
      id: 15,
      title: "Touch Control LED Table Lamp",
      description: "USB Rechargeable, Touch Control Night Light with 3-Color Dimmable Brightness for Bedroom, Living Room & Study.",
      rating: 4.0,
      reviews: 3515,
      image: "/images/touch-control-led-lamp.jpg",
      link: "https://amzn.to/3Z4sA7y",
      boughtStats: ""
    },
    // 16. Motion Sensor LED Light
    {
      id: 16,
      title: "Motion Sensor LED Light",
      description: "Rechargeable Motion Sensor LED Light (40cm). Magnetic Under Cabinet Light with 3 Modes & 1200mAh Battery.",
      rating: 3.8,
      reviews: 1064,
      image: "/images/motion-sensor-led-light.jpg",
      link: "https://amzn.to/4ajMnpJ",
      boughtStats: ""
    },
    // 17. Book Lamp
    {
      id: 17,
      title: "LED Study Book Lamp",
      description: "Book Lamp for Students, USB Rechargeable LED Study Light with 3 Brightness & Color Modes. Clip-On and Eye-Friendly.",
      rating: 4.1,
      reviews: 715,
      image: "/images/book-lamp.jpg",
      link: "https://amzn.to/4q3oB5U",
      boughtStats: ""
    },
    // 18. Lamps for Study Table
    {
      id: 18,
      title: "Lamps for Study Table",
      description: "Rechargeable USB Warm Light LED Children Eye Protection Desk Lamps. Cute design, perfect for study tables or work from home.",
      rating: 4.1,
      reviews: 549,
      image: "/images/lamps-study-table.jpg",
      link: "https://amzn.to/3McIqtI",
      boughtStats: ""
    },
    // 19. Mouse Pad large
    {
      id: 19,
      title: "World Map Gaming Mouse Pad",
      description: "Extended Size (800mm x 300mm) Desk Mat with Stitched Edges. Non-Slip Rubber Base, perfect for Office & Home.",
      rating: 4.4,
      reviews: 23991,
      image: "/images/mouse-pad-large.jpg",
      link: "https://amzn.to/49L0ioF",
      boughtStats: ""
    },
    // 20. Fast Charging 3A Type-C Cable
    {
      id: 20,
      title: "Fast Charging 3A Type-C Cable",
      description: "1.2 Meter Type-C Cable with Charge & Sync Function. Durable and fast charging for all compatible devices.",
      rating: 4.1,
      reviews: 33406,
      image: "/images/type-c-cable.jpg",
      link: "https://amzn.to/3NJuojM",
      boughtStats: ""
    },
    // 21. Anti Theft Number Lock Backpack
    {
      id: 21,
      title: "Anti Theft Backpack Bag",
      description: "Secure backpack with Number Lock and 15.6 Inch Laptop Compartment. Includes USB Charging Port, perfect for travel.",
      rating: 4.0,
      reviews: 13742,
      image: "/images/anti-theft-backpack.jpg",
      link: "https://amzn.to/4qLnyJ7",
      boughtStats: ""
    },
    // 22. Crossbody Crescent Bags
    {
      id: 22,
      title: "Crossbody Crescent Bags",
      description: "Trendy travel crossbody bag for women. Over shoulder purse with zipper, half moon sling design. Stylish and unisex.",
      rating: 4.3,
      reviews: 354,
      image: "/images/crossbody-crescent-bag.jpg",
      link: "https://amzn.to/4qM0slJ",
      boughtStats: "Best Seller"
    },
    // 23. Leather Backpack for Women
    {
      id: 23,
      title: "Leather Backpack for Women",
      description: "Elegant leather backpack purse for ladies. A perfect fashionable gift for sister, mother, or friends.",
      rating: 3.8,
      reviews: 314,
      image: "/images/leather-backpack-women.jpg",
      link: "https://amzn.to/3NCxaaC",
      boughtStats: "Best Seller"
    },
    // 24. Wrist Handbag for Women
    {
      id: 24,
      title: "Crochet Wrist Handbag",
      description: "Kawn® Crochet Wrist Handbag with Knot Pouch design. Portable, knitted, breathable and lightweight tote for shopping.",
      rating: 4.4,
      reviews: 511,
      image: "/images/wrist-handbag-women.jpg",
      link: "https://amzn.to/4k7IlEb",
      boughtStats: ""
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Product Grid - Added pt-32 to account for fixed header since hero section is removed */}
      <section className="pt-32 pb-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col relative">
                
                {/* Image Area */}
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="h-64 overflow-hidden bg-white relative flex items-center justify-center p-4">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                             e.currentTarget.src = "https://placehold.co/400x400/fff/1e293b?text=Product";
                        }}
                    />
                    
                    {/* Bought Stats Badge */}
                    {product.boughtStats && (
                        <div className="absolute top-0 right-0 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg shadow-sm flex items-center gap-1 z-10">
                            <TrendingUp className="h-3 w-3" />
                            {product.boughtStats}
                        </div>
                    )}
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

                    <div className="mt-4 pt-4 border-t border-slate-800">
                        <a 
                            href={product.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-amber-600 hover:text-white text-amber-500 px-4 py-3 rounded-lg transition-colors text-sm font-bold"
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
      
      <WhatsAppCta />
    </div>
  );
};

export default ShoppingPage;