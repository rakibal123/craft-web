import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function ShippingIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M2 8h16v14H2zM18 13h6l4 4v5h-10" />
      <circle cx="8" cy="23" r="2.5" />
      <circle cx="23" cy="23" r="2.5" />
    </svg>
  );
}

export function SecurePaymentIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M16 3l11 4v8c0 7-5 12-11 14C10 27 5 22 5 15V7z" />
      <path d="m11 16 4 4 7-8" />
    </svg>
  );
}

export function EasyReturnsIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M26 12A11 11 0 0 0 6 10M6 5v5h5M6 20a11 11 0 0 0 20 2M26 27v-5h-5" />
    </svg>
  );
}

export function SustainableIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 27C5 12 14 5 28 5c0 14-8 22-20 22M5 27 18 14" />
    </svg>
  );
}

export function QualityGemIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M9 5h14l5 7-12 15L4 12zM4 12h24M12 5l4 22M20 5l-4 22" />
    </svg>
  );
}

export function SupportHeadphonesIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M6 18v-3a10 10 0 0 1 20 0v3M4 17h4v7H4zM24 17h4v7h-4zM26 24c0 3-4 4-8 4" />
    </svg>
  );
}
