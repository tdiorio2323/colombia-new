
import type { Experience, ContentItem, Product, EliteMember } from '../types';
import { ShipIcon, DiamondIcon, CameraIcon, CrownIcon } from './Icons';

export const experiences: Experience[] = [
  {
    id: 1,
    icon: ShipIcon,
    title: 'Private Yacht Experience',
    description: 'Exclusive yacht experience in Colombian waters with personal crew.',
    duration: '4 hours',
    features: ['Private crew', 'Gourmet dining', 'Professional photos'],
    price: '$2,999',
  },
  {
    id: 2,
    icon: DiamondIcon,
    title: 'Diamond Penthouse',
    description: 'Luxury penthouse with breathtaking skyline views.',
    duration: '2 hours',
    features: ['Sky terrace', 'Premium suite', 'Champagne service'],
    price: '$1,999',
  },
  {
    id: 3,
    icon: CameraIcon,
    title: 'Elite Marina Session',
    description: 'Professional shoot at exclusive Colombian marina.',
    duration: '90 min',
    features: ['Pro photography', 'Multiple outfits', 'HD gallery'],
    price: '$1,299',
  },
  {
    id: 4,
    icon: CrownIcon,
    title: 'Colombian Goddess Ultimate',
    description: 'The ultimate luxury Colombian adventure experience.',
    duration: 'Full day',
    features: ['Everything included', 'VIP treatment', 'Unlimited access'],
    price: '$4,999',
  },
];

export const contentItems: ContentItem[] = [
    { id: 1, imageUrl: 'https://picsum.photos/400/600?random=1', title: 'Behind the Glamour', subtitle: '12:34', type: 'video', isVip: true },
    { id: 2, imageUrl: 'https://picsum.photos/400/600?random=2', title: 'Exclusive Photoshoot', subtitle: 'Photo Set', type: 'photo', isVip: true },
    { id: 3, imageUrl: 'https://picsum.photos/400/600?random=3', title: 'Red Carpet Moments', subtitle: '8:45', type: 'video', isVip: false },
    { id: 4, imageUrl: 'https://picsum.photos/400/600?random=4', title: 'VIP Experience', subtitle: 'Premium', type: 'photo', isVip: true },
];

export const products: Product[] = [
    { id: 1, imageUrl: 'https://picsum.photos/400/500?random=5', name: 'Diamond Collection', price: '$2,999.99', rating: 5, tag: 'Only 10 left' },
    { id: 2, imageUrl: 'https://picsum.photos/400/500?random=6', name: 'Colombian Emerald Crown', price: '$1,499.99', rating: 5 },
    { id: 3, imageUrl: 'https://picsum.photos/400/500?random=7', name: 'Yacht Club Membership', price: '$9,999.99', rating: 5, tag: 'Very Exclusive' },
    { id: 4, imageUrl: 'https://picsum.photos/400/500?random=8', name: 'Private Island Access', price: '$19,999.99', rating: 5, tag: 'Ultimate Luxury' },
];

export const eliteMembers: EliteMember[] = [
    { id: 1, rank: 1, name: 'Carlos M.', countryFlag: '🇨🇴', investment: '$45,247', title: 'Yacht Club Member' },
    { id: 2, rank: 2, name: 'Sofia R.', countryFlag: '🇺🇸', investment: '$31,156', title: 'VIP Elite' },
    { id: 3, rank: 3, name: 'Diego L.', countryFlag: '🇲🇽', investment: '$22,923', title: 'Premium Lover' },
];
