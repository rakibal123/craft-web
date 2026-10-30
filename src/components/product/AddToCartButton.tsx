'use client';

import React from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className={cn(
        'mt-2.5 w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-[30px] py-[7px] px-2 text-xs font-medium cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
        className
      )}
    >
      Add to Cart
    </button>
  );
}
