import React, { useRef } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Gift, Star } from 'lucide-react';

const products = {
  spiritual: [
    {
      id: 's1',
      title: 'Lord Hanuman Idol',
      description: 'Hanuman Murti for Peace, Positivity, Good Luck, Success, and Prosperity Black Matte Finish,Resin,10 Cm,8 Cm',
      image: '/images/SG1.jpg',
      link: 'https://amzn.to/4tnYisQ',
      rating: 4.5,
      reviews: 281
    },
    {
      id: 's2',
      title: 'Ganesha Dream Catcher',
      description: 'Spiritual Charm Car Hanging Accessories for Positive Vibes Car Mirror Hanging Gift - Black & White',
      image: '/images/SG2.jpg',
      link: 'https://amzn.to/4wiZqkl',
      rating: 4.2,
      reviews: 1536
    },
    {
      id: 's3',
      title: 'Laxmi Ganesh Saraswati Idol Diya',
      description: 'Oil Lamp Deepak - Metal Lakshmi Ganesha Showpiece Statue - Traditional Diya for daily Puja',
      image: '/images/SG3.jpg',
      link: 'https://amzn.to/42kSqpp',
      rating: 4.3,
      reviews: 2512
    },
    {
      id: 's4',
      title: 'JaipurCrafts Peacock Designed Chowki',
      description: 'Wooden Meenakari Rajwadi Chowki/Patla | Wooden patla for puja-8.50"x 11"x 2.50" Inch - Pooja room Decorations Items, Pooja chowki',
      image: '/images/SG4.jpg',
      link: 'https://amzn.to/4u0ctWd',
      rating: 4.2,
      reviews: 981
    },
    {
      id: 's5',
      title: '100% Pure Brass Akhand Jyot Diya',
      description: 'Adjustable Bati Knob, Wick Lifting Screw Lever, Glass Cover (Large Size, 250 ml Oil Capacity, Stay Lit for 48 Hours, Wick Included, Authentic Borosilicate)',
      image: '/images/SG5.jpg',
      link: 'https://amzn.to/4eCRbt6',
      rating: 4.1,
      reviews: 1156
    },
    {
      id: 's6',
      title: 'Wooden Pyramid Shape Incense Box',
      description: 'Wooden Agarbatti Stand with ash Catcher for Home Office | Incense Sticks Holder (Medium)',
      image: '/images/SG6.jpg',
      link: 'https://amzn.to/3RdE4oi',
      rating: 4.2,
      reviews: 828
    },
    {
      id: 's7',
      title: 'Pure Cow Ghee Wicks – 100N',
      description: 'Ready-to-Light Diya Battis | Wax-Free, Long-Lasting, Easy to Use | for Daily Puja, Aarti & Festivals',
      image: '/images/SG7.jpg',
      link: 'https://amzn.to/4woJ8qg',
      rating: 4.2,
      reviews: 4172
    },
    {
      id: 's8',
      title: 'Akhand Diya with Borosilicate Shade',
      description: 'Klassic Navjyoti 4 Inch - for Mandir, Decorative Brass & Oil Lamp Lantern Diya with Glass Cover for Prayers',
      image: '/images/SG8.jpg',
      link: 'https://amzn.to/4d9oK3q',
      rating: 4.0,
      reviews: 714
    }
  ],
  kids: [
    {
      id: 'k1',
      title: 'Kids Digital Camera Toy',
      description: '3.0MP 1080P Video Camera with 2-Inch Screen & 32GB Capacity USB Rechargeable with Games, Filters, Time-Lapse Educational Birthday Gift for Boys & Girls Age 3–12 (Blue)',
      image: '/images/KG1.jpg',
      link: 'https://amzn.to/3Pi8Yv4',
      rating: 3.6,
      reviews: 955
    },
    {
      id: 'k2',
      title: 'Foldable Kick Skating Cycle',
      description: 'Skate Scooter for Kids (Max User Weight: 50Kg) Kids Scooter (Pink, Blue)',
      image: '/images/KG2.jpg',
      link: 'https://amzn.to/4tiDN0F',
      rating: 4.2,
      reviews: 4601
    },
    {
      id: 'k3',
      title: 'Jazz Drum Set Senior Musical Band',
      description: '3 Drums, 1 Dish, 1 Stool & Sticks for Kids (Assorted Colors & Designs)',
      image: '/images/KG3.jpg',
      link: 'https://amzn.to/4nijkYH',
      rating: 4.2,
      reviews: 1435
    },
    {
      id: 'k4',
      title: 'Art Set for Kids',
      description: '145 Pieces Drawing Kit with Colour Pencils, Oil Pastels, Paint Brushes, Unicorn Theme Art Set',
      image: '/images/KG4.jpg',
      link: 'https://amzn.to/4f8uYDd',
      rating: 4.2,
      reviews: 1129
    },
    {
      id: 'k5',
      title: 'Magnetic Fishing Game',
      description: '2 Player Toy with 24 Magnetic Fishes, Lights & Music, Rechargeable with Type-C Charging, Trolley Design, Board Game',
      image: '/images/KG5.jpg',
      link: 'https://amzn.to/4ubxb5B',
      rating: 4.2,
      reviews: 1629
    }
  ],
  devotees: [
    {
      id: 'd1',
      title: 'Krishna Hand with Flute & Peacock Feather',
      description: 'Home Decor Gift, Office & Living Room, Peacock Showpiece with Flute, Lord Laddo Gopal Figurine Murlidhar, Kanhaiya, Makhan Chor, Diwali Decoration',
      image: '/images/KD1.jpg',
      link: 'https://amzn.to/4d9o6V3'
    },
    {
      id: 'd2',
      title: 'Peacock Feather Dream Catcher',
      description: 'Handmade Boho Décor for Bedroom & Living Room | Vastu Positive Energy | Natural Feather | Festive Gift Item | 45x18 cm | Black',
      image: '/images/KD2.jpg',
      link: 'https://amzn.to/3Pxnv6i',
      rating: 4.3,
      reviews: 429
    },
    {
      id: 'd3',
      title: 'Krishna Mantra Wall Hanging',
      description: 'Wood Hare Krishna Vasudevaya Haraye Paramatmane Living Room|Home Decoration Item|Wall Art,63 Cm',
      image: '/images/KD3.jpg',
      link: 'https://amzn.to/4u8yd2s',
      rating: 4.5,
      reviews: 354
    },
    {
      id: 'd4',
      title: 'ISKCON geeta jar',
      description: '64 Inspirational Verses for Human Emotions – 8 Color Coded Cards - Krishna path in Hindi & English – Bhagavad Gita jar Wisdom Gift',
      image: '/images/KD4.jpg',
      link: 'https://amzn.to/4u6c9oY',
      rating: 4.4,
      reviews: 105
    }
  ]
};

const ProductCarousel = ({ id, title, items }: { id: string, title: string, items: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Multiply items for infinite rolling effect
  const scrollItems = [...items, ...items, ...items];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll by one full visible width of the container
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id={id} className="pt-24 -mt-16 mb-20"> {/* Offset for sticky header if needed */}
      <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-500">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-amber-600 hover:text-white transition-colors border border-slate-700 hover:border-amber-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-amber-600 hover:text-white transition-colors border border-slate-700 hover:border-amber-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {scrollItems.map((product, idx) => (
          <div 
            key={`${product.id}-${idx}`}
            // 4 across means each is ~25% of the width minus gap adjustments
            className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col relative"
          >
            <a href={product.link || '#'} target="_blank" rel="noopener noreferrer" className="h-56 overflow-hidden bg-white relative flex items-center justify-center p-4">
              <img 
                src={product.image || product.img} 
                alt={product.title || product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                     e.currentTarget.src = "https://placehold.co/400x400/fff/1e293b?text=Product";
                }}
              />
              {product.price && (
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 font-bold px-3 py-1 rounded-full text-sm z-10">
                  {product.price}
                </div>
              )}
            </a>
            
            <div className="p-6 flex flex-col grow">
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-1 opacity-80">Amazon</span>

              <a href={product.link || '#'} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-amber-400 transition-colors" title={product.title || product.name}>
                  {product.title || product.name}
                </h3>
              </a>
              
              <p className="text-sm text-slate-400 mb-4 line-clamp-2 h-10">
                {product.description || product.desc}
              </p>
              
              {product.rating ? (
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <div className="flex text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-bold text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-slate-500">({product.reviews} reviews)</span>
                </div>
              ) : (
                <div className="mb-4 mt-auto h-5"></div>
              )}
              
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a 
                  href={product.link || '#'}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-amber-600 hover:text-white text-amber-500 py-3 rounded-lg font-bold transition-colors text-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GiftIdeasPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-20 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-slate-900 border-b border-slate-800 pt-16 pb-12 px-4 text-center">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
            <Gift className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 font-serif mb-6">
            Meaningful <span className="text-amber-500">Gift Ideas</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Discover a curated collection of gift suggestions. Whether you're looking for something special for a child, a dedicated devotee, or general well-being, find the perfect present here.
          </p>
          
          {/* Indexing / Jump Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => scrollTo('spiritual-gifts')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-600 text-amber-400 font-medium rounded-full transition-colors flex items-center gap-2"
            >
              Spiritual Gifts
            </button>
            <button 
              onClick={() => scrollTo('kids-gifts')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-600 text-amber-400 font-medium rounded-full transition-colors flex items-center gap-2"
            >
              Gifts for Kids
            </button>
            <button 
              onClick={() => scrollTo('devotee-gifts')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-600 text-amber-400 font-medium rounded-full transition-colors flex items-center gap-2"
            >
              Gifts for Krishna Devotees
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        <ProductCarousel id="spiritual-gifts" title="Spiritual Gifts" items={products.spiritual} />
        <ProductCarousel id="kids-gifts" title="Gifts for Kids" items={products.kids} />
        <ProductCarousel id="devotee-gifts" title="Gifts for Krishna Devotees" items={products.devotees} />
      </div>
    </div>
  );
}
