import React from 'react';

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  href: string; // Used as key for navigation
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  colorClass: string;
}

export interface NavigationProps {
  onNavigate: (page: string) => void;
}