import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: `Actually, whatever doubts and questions I had in my mind all the answers were there in your book. And I really feel like Radhakrishna is answering me by those lines. I felt like that God is really with me.

Thanks a lot RADHE RADHE.`,
      author: "Charu Chitra",
      rating: 5,
      avatarUrl: "https://picsum.photos/seed/priya/100/100"
    },
    {
      id: 2,
      content: `It’s really insightful, just like your posts. Loved the way you explained everything. 

Keep up the great work!.`,
      author: "Deepthi",
      rating: 5,
      avatarUrl: "https://picsum.photos/seed/rahul/100/100"
    },
    {
      id: 3,
      content: `It’s really great, After reading it, I feel like I’ve come under the protection of Lord Krishna, and He is giving me His lessons. 

I felt really good after purchasing this book. Thank you for sharing it`,
      author: "Roshini",
      rating: 5,
      avatarUrl: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      id: 4,
      content: `I am still reading the book...

I really loved the way it has been written... Very well explained..`,
      author: "Kimey Wazare",
      rating: 5,
      avatarUrl: "https://picsum.photos/seed/arjun/100/100"
    },
    {
      id: 5,
      content: "Love the aesthetic and the vibe. It feels like a digital temple. Highly recommend the newsletter.",
      author: "Anita Roy",
      rating: 4,
      avatarUrl: "https://picsum.photos/seed/anita/100/100"
    },
    {
      id: 6,
      content: "It is inspiring, I really enjoyed it",
      author: "Kritika Saini",
      rating: 5,
      avatarUrl: "https://picsum.photos/seed/kritika/100/100"
    },
    {
      id: 7,
      content: "The curated Flipkart lists for pooja essentials saved me so much time during Diwali.",
      author: "Vikram Singh",
      rating: 4,
      avatarUrl: "https://picsum.photos/seed/vikram/100/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, testimonials.length - itemsPerPage + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-amber-500 text-xs font-bold tracking-wider uppercase mb-4 border border-slate-700">
            Community Voices
          </span>
          <h2 className="text-4xl font-bold text-white font-serif">What Readers Say</h2>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-12">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Track Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="px-3 flex-shrink-0 box-border"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 flex flex-col h-full transition-all duration-300 hover:border-amber-500/50">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-slate-600 fill-slate-700" />
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-8 flex-grow italic whitespace-pre-line text-sm md:text-base">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-600"
                      />
                      <div>
                        <h4 className="font-bold text-amber-500 text-sm">{testimonial.author}</h4>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < testimonial.rating ? 'fill-amber-500 text-amber-500' : 'fill-slate-700 text-slate-700'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;