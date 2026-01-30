import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import EbooksPage from './components/EbooksPage';
import ShoppingPage from './components/ShoppingPage';
import LetsAskKrishnaPage from './components/LetsAskKrishnaPage';
import Footer from './components/Footer';

function App() {
  // Initialize state based on the current browser URL
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    return path === '/' ? '/' : path;
  });

  // Handle Back/Forward browser buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Update the URL in the browser without reloading
    window.history.pushState({}, '', page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-poppins text-slate-200 selection:bg-amber-500 selection:text-white">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentPage === '/' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === '/lets-ask-krishna' && <LetsAskKrishnaPage onNavigate={handleNavigate} />}
        {currentPage === '/ebooks' && <EbooksPage onNavigate={handleNavigate} />}
        {currentPage === '/shopping' && <ShoppingPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;