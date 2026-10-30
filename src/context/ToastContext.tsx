'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface ToastContextType {
  toastMessage: string | null;
  isVisible: boolean;
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setToastMessage(message);
    setIsVisible(true);

    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2200);
  }, []);

  return (
    <ToastContext.Provider value={{ toastMessage, isVisible, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
