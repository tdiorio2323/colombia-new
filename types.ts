
import React from 'react';

export interface Experience {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  duration: string;
  features: string[];
  price: string;
}

export interface ContentItem {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  type: 'video' | 'photo';
  duration?: string;
  isVip: boolean;
}

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  rating: number;
  tag?: string;
}

export interface EliteMember {
  id: number;
  rank: number;
  name: string;
  countryFlag: string;
  investment: string;
  title: string;
}
