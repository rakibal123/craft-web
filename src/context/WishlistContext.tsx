'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { useToast } from './ToastContext';

interface WishlistContextType {
  wishlist: Record<string, boolean>;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string, productName?: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const { showToast } = useToast();

  const isInWishlist = useCallback(
    (productId: string) => Boolean(wishlist[productId]),
    [wishlist]
  );

  const toggleWishlist = useCallback(
    (productId: string, productName?: string) => {
      setWishlist((prev) => {
        const nextState = !prev[productId];
        if (nextState) {
          showToast(productName ? `Added ${productName} to wishlist` : 'Added to wishlist');
        } else {
          showToast(productName ? `Removed ${productName} from wishlist` : 'Removed from wishlist');
        }
        return {
          ...prev,
          [productId]: nextState,
        };
      });
    },
    [showToast]
  );

  return (
    <WishlistContext.Provider value={{ wishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
