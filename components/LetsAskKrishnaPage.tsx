import React, { useState } from 'react';
import { Shield, MessageCircle, UserPlus, CreditCard, BookOpen, ChevronDown, ChevronUp, AlertCircle, Check, Sparkles, Clock } from 'lucide-react';
import { NavigationProps } from '../types';

const LetsAskKrishnaPage: React.FC<NavigationProps> = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const razorpayLink = "https://rzp.io/rzp/AskSubscription";

  const faqs = [
    {
      question: "How private are my questions?",
      answer: "Completely anonymous. We do not store your name with the question in the public channel. Only the question text and the answer are posted. No one will know who asked it."
    },
    {
      question: "How many questions can I ask?",
      answer: "You have 30 days to ask questions. We kindly request you to limit this to approximately 30 questions per person to ensure everyone gets a chance to seek guidance."
    },
    {
      question: "What happens after payment?",
      answer: "After a successful payment via Razorpay, you will land on a thank-you page containing your unique Order ID and the invite link to the private WhatsApp Channel."
    },
    {
      question: "Is this professional counseling?",
      answer: "No. This service provides spiritual guidance rooted in the Bhagavad Gita. It is not a substitute for professional medical, legal, or financial counseling."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-slate-950">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background: Soft blue/gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-amber-950 opacity-100"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="h-3 w-3" /> <span>Divine Guidance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                Lets Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">Krishna</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Ask anonymous life questions and receive answers in Lord Krishna’s voice, inspired by timeless Bhagavad Gita wisdom.
              </p>
            </div>

            {/* Right: Offer Box (White Card) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="bg-white text-slate-900 rounded-2xl shadow-2xl shadow-blue-900/20 p-8 max-w-xl w-full relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 border-4 border-white/10 ring-1 ring-slate-900/5">
                {/* Decorative peacock feather hint */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-600 to-green-500 opacity-20 rounded-bl-[100px] -mr-4 -mt-4"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif text-center">What's Included</h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5 flex-shrink-0"><MessageCircle className="h-4 w-4 text-blue-600" /></div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                        Ask anonymous questions about your life and receive answers in the voice of Lord Krishna, inspired by Bhagavad Gita wisdom.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-100 p-1 rounded-full mt-0.5 flex-shrink-0"><Shield className="h-4 w-4 text-red-600" /></div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                        Your questions are posted with answers - completely anonymously in the Lets Ask Krishna WhatsApp Channel – no name, no Order ID, no info on who asked it.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1 rounded-full mt-0.5 flex-shrink-0"><Sparkles className="h-4 w-4 text-amber-600" /></div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                        Answers are created with AI assistance, reviewed by a human curator for Gita alignment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5 flex-shrink-0"><BookOpen className="h-4 w-4 text-green-600" /></div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                        1‑year access to the WhatsApp Channel to read all questions and answers.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5 flex-shrink-0"><Clock className="h-4 w-4 text-purple-600" /></div>
                    <span className="text-slate-700 text-sm leading-relaxed font-medium">
                        Validity: 30 days to submit questions + 1 year to read the channel.
                    </span>
                  </li>
                </ul>

                <a 
                  href={razorpayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all text-center"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Simple 4 Steps to Start</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Begin your journey to clarity in minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CreditCard, title: "1. Subscribe", desc: "Pay via secure Razorpay. After successful payment, You'll land on a thank-you page where you will get the Channel invite.", color: "text-blue-400" },
              { icon: UserPlus, title: "2. Join Channel", desc: "Click the invite link to get 1-year access to the Lets Ask Krishna WhatsApp Channel.", color: "text-amber-400" },
              { icon: MessageCircle, title: "3. Ask Anonymously", desc: "Use the link in channel description to submit your question in the form. No one knows who asked it. Complete anonymity.", color: "text-green-400" },
              { icon: BookOpen, title: "4. Read Answers", desc: "Watch the channel for Krishna-style answers rooted in Bhagavad Gita wisdom.", color: "text-purple-400" }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition-colors">
                <div className={`absolute top-6 right-6 text-6xl font-bold opacity-5 font-serif select-none`}>{idx + 1}</div>
                <div className={`${step.color} mb-6`}>
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
             <span className="inline-block px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-500 text-sm">
                Limit to ~30 questions to share space with other seekers.
             </span>
          </div>
        </div>
      </section>

      {/* --- TRUST & PROCESS --- */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
            
            {/* Left: About */}
            <div className="w-full lg:w-1/2">
               <h2 className="text-3xl font-bold text-white mb-6 font-serif">Behind the Answers</h2>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 border border-blue-500/20">
                        <Sparkles className="h-6 w-6" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-2">Compassionate Voice</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Answers are crafted using advanced AI tools designed to emulate Krishna's compassionate and calm tone.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-400 border border-amber-500/20">
                        <Shield className="h-6 w-6" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-2">Human Reviewed</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Every answer is reviewed by a human for alignment with Gita principles before posting. While we strive for perfection, please use your own judgment.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Sample Flow */}
            <div className="w-full lg:w-1/2">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-t-2xl"></div>
                    <div className="mb-2 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Sample Interaction</div>
                    
                    <div className="space-y-6 mt-4">
                        {/* User Question */}
                        <div className="flex justify-end">
                            <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm">
                                <p>How to handle work stress? I feel overwhelmed.</p>
                            </div>
                        </div>

                        {/* Krishna Answer */}
                        <div className="flex justify-start">
                            <div className="bg-blue-900/20 border border-blue-500/20 text-blue-100 px-6 py-4 rounded-2xl rounded-tl-none max-w-[90%] relative">
                                <Sparkles className="h-4 w-4 text-amber-400 absolute top-4 right-4" />
                                <p className="text-sm leading-relaxed italic font-serif">
                                    "Dear friend, do not let the chaos of the mind disturb your peace. In Chapter 2, I teach that you have a right to your duties, but not to the results. Perform your work with focus, but surrender the anxiety of the outcome to Me. Calmness is the greatest strength."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-10 text-center font-serif">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-medium text-slate-200">{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="h-5 w-5 text-amber-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING & CTA --- */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500"></div>
             
             <h2 className="text-3xl font-bold text-white mb-6 font-serif">Lets Ask Krishna Subscription</h2>
             {/* Price removed as per request */}
             <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
                 Join the community of seekers. Get 30 days to ask your questions and 1 full year of access to the channel's wisdom.
             </p>
             
             <a 
                href={razorpayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-amber-900/30 transition-all transform hover:scale-105"
              >
                Get Started
             </a>
          </div>
        </div>
      </section>

      {/* --- DISCLAIMER FOOTER --- */}
      <div className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="flex items-start justify-center gap-2 text-slate-600 text-xs leading-relaxed text-justify md:text-center">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                    <strong>Important Information:</strong> This service offers Gita-inspired spiritual guidance and is for entertainment and educational purposes only. It does not constitute professional medical, legal, financial, or psychological advice. No specific outcomes are guaranteed. Answers are generated with AI assistance and reviewed by humans, but may occasionally contain errors or interpretations that differ from yours. Please use your own judgment. This service is not for emergencies; if you are in crisis, please contact professional emergency services immediately. While we maintain the anonymity of your questions, please avoid including sensitive personal data (like phone numbers, addresses, or financial info) in your question text.
                </p>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-xs text-slate-500">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Us</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default LetsAskKrishnaPage;