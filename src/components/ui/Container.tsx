import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('w-full max-w-[1240px] mx-auto px-4 sm:px-6 xl:px-10', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
