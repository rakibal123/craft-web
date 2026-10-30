'use client';

import React from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { HeartIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export function WishlistButton({
  productId,
  productName,
  className,
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = isInWishlist(productId);

  return (
    <button
      type="button"
      aria-label={active ? `Remove ${productName} from wishlist` : `Add ${productName} to wishlist`}
      onClick={() => toggleWishlist(productId, productName)}
      className={cn(
        'absolute top-2 right-2 w-[26px] h-[26px] rounded-full bg-white border-0 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm z-10',
        active ? 'text-[#d64545]' : 'text-ink hover:text-primary',
        className
      )}
    >
      <HeartIcon
        filled={active}
        className={cn('w-3.5 h-3.5 transition-colors', active && 'fill-current')}
      />
    </button>
  );
}
