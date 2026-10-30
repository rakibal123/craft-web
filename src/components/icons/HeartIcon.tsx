import React from 'react';

interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  filled?: boolean;
}

export function HeartIcon({ className = '', filled = false, ...props }: HeartIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
    </svg>
  );
}
