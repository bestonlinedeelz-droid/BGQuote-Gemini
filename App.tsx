import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import EbooksPage from './components/EbooksPage';
import ShoppingPage from './components/ShoppingPage';
import LetsAskKrishnaPage from './components/LetsAskKrishnaPage';
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
        {currentPage === '/lets-ask-krishna' && <LetsAskKrishnaPage onNavigate={handleNavigate} />}
        {currentPage === '/ebooks' && <EbooksPage onNavigate={handleNavigate} />}
        {currentPage === '/shopping' && <ShoppingPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;