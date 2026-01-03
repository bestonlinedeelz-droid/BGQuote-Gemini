import React from 'react';
import { MessageCircle, Bell, ExternalLink, TrendingUp } from 'lucide-react';

export const WhatsAppCard: React.FC<{className?: string}> = ({ className = "" }) => {
  return (
    <div className={`bg-gradient-to-r from-slate-900 to-green-950/30 border border-green-500/20 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group ${className}`}>
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full group-hover:bg-green-500/20 transition-all duration-700"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
            <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/50 hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white fill-current" />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-serif">
                    Join "Loot Locator" Channel
                </h3>
                <p className="text-slate-300 max-w-lg text-sm md:text-base">
                    Get instant alerts on price drops for spiritual books, idols, and meditation gear. <br className="hidden md:block"/>Don't miss out on the best deals from Amazon & Flipkart!
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-3 relative z-10">
            <a 
                href="https://whatsapp.com/channel/0029VaB29xKEgGfHFxK6rd06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-900/20 transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap ring-4 ring-green-500/20"
            >
                <Bell className="h-5 w-5" />
                Join for Free <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
            <div className="flex items-center gap-2 text-green-300/80 text-xs font-medium tracking-wide bg-green-950/30 px-3 py-1.5 rounded-full border border-green-500/10 animate-pulse">
                <TrendingUp className="h-3 w-3" />
                <span>Join 2,400+ members saving daily!</span>
            </div>
        </div>
    </div>
  );
};

const WhatsAppCta: React.FC = () => {
  return (
    <section className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <WhatsAppCard />
      </div>
    </section>
  );
};

export default WhatsAppCta;