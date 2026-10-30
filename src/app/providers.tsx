'use client';

import React from 'react';
import { ToastProvider } from '@/context/ToastContext';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { Toast } from '@/components/ui/Toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          {children}
          <Toast />
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}
