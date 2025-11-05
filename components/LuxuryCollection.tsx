import React from 'react';
import type { Product } from '../types';
import { products } from './data';
import SectionTitle from './SectionTitle';
import { CartIcon, StarIcon } from './Icons';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-brand-gold' : 'text-stone-600'}`}
        />
      ))}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-brand-dark-2/50 border border-stone-700/50 rounded-2xl overflow-hidden group hover:border-brand-rose/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover" />
        {product.tag && (
          <span className="absolute top-4 right-4 bg-brand-rose/80 text-brand-dark text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-white">{product.name}</h3>
          <StarRating rating={product.rating} />
        </div>
        <p className="text-2xl font-semibold text-stone-300 mb-6">{product.price}</p>
        <button className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg shadow-pink-500/10 hover:shadow-glow hover:bg-brand-gradient-hover transition-all duration-300">
          <CartIcon className="w-5 h-5" />
          Purchase
        </button>
      </div>
    </div>
  );
};

const LuxuryCollection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Luxury Collection"
          subtitle="Exclusive treasures for distinguished collectors"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryCollection;
