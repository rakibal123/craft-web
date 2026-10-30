import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function BrandLeafIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 20C4 9 11 3 21 3c0 10-6 17-15 17" />
    </svg>
  );
}
