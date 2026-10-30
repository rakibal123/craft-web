import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark rounded-[40px]',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white rounded-[30px]',
    white: 'bg-white text-ink hover:bg-card-bg rounded-[30px] shadow-sm',
    dark: 'bg-ink-dark text-white hover:bg-black rounded-[30px]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-xs md:text-sm px-4 md:px-5 py-2.5',
    lg: 'text-sm px-6 py-3.5',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
}
