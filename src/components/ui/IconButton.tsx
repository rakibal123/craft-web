import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  badge?: number | string;
}

export function IconButton({
  'aria-label': ariaLabel,
  badge,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        'relative inline-flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-full',
        className
      )}
      {...props}
    >
      {children}
      {badge !== undefined && (
        <span
          className="absolute -top-2 -right-2.5 bg-primary text-white text-[9px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-normal leading-none"
          aria-hidden="true"
        >
          {badge}
        </span>
      )}
    </button>
  );
}
