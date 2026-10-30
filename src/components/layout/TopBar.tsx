import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { topBarLinks } from '@/data/navigation';

export function TopBar() {
  return (
    <div className="bg-primary text-white text-xs">
      <Container className="flex items-center justify-between py-2 gap-3 text-center sm:text-left">
        <span className="hidden md:inline-block font-normal truncate">
          {siteConfig.freeShippingNotice}
        </span>
        <div className="flex items-center justify-center w-full md:w-auto gap-3.5 text-xs shrink-0">
          {topBarLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 && <span className="opacity-60">|</span>}
              <Link
                href={link.href}
                className="hover:underline transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-1"
              >
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
