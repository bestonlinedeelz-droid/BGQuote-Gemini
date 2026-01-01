import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import AffiliateTeaser from './AffiliateTeaser';
import { NavigationProps } from '../types';

const HomePage: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <AffiliateTeaser />
    </>
  );
};

export default HomePage;