'use client';

import React from 'react';
import { useToast } from '@/context/ToastContext';
import { cn } from '@/lib/utils';

export function Toast() {
  const { toastMessage, isVisible } = useToast();

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed left-1/2 bottom-6 -translate-x-1/2 bg-primary text-white py-3 px-5 rounded-[30px] text-[13px] font-medium shadow-lg transition-all duration-300 z-[60] pointer-events-none select-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0'
      )}
    >
      {toastMessage}
    </div>
  );
}
