'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/types';
import { useToast } from './ToastContext';

interface CartContextType {
  cartCount: number;
  cartItems: Record<string, number>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const { showToast } = useToast();

  const cartCount = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  const addToCart = useCallback(
    (product: Product) => {
      setCartItems((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
      showToast('Added to cart');
    },
    [showToast]
  );

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems({});
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
