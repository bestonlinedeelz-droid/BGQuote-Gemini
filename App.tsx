import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import EbooksPage from './components/EbooksPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-poppins text-slate-200 selection:bg-amber-500 selection:text-white">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentPage === '/' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === '/ebooks' && <EbooksPage />}
        {/* Fallback for other routes placeholders */}
        {(currentPage !== '/' && currentPage !== '/ebooks') && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h2 className="text-4xl font-bold text-white font-serif mb-4">Coming Soon</h2>
                <p className="text-slate-400 max-w-md">We are currently curating the best finds for this category. Stay tuned!</p>
                <button onClick={() => handleNavigate('/')} className="mt-8 text-amber-500 underline hover:text-amber-400">Return Home</button>
            </div>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;