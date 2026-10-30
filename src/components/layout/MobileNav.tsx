'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';
import { useScrollLock } from '@/hooks/useScrollLock';
import {
  BrandLeafIcon,
  CloseIcon,
  SearchIcon,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  YouTubeIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';
import { topBarLinks } from '@/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  useScrollLock(isOpen);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay with fade transition */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-[2px] transition-opacity duration-300',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Off-canvas Navigation Drawer sliding from Left to Right */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={cn(
          'fixed top-0 left-0 bottom-0 w-[290px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Drawer Header with Logo and Close button */}
        <div className="flex items-center justify-between h-[72px] px-5 border-b border-border bg-white shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="flex flex-col items-start leading-none text-primary"
          >
            <BrandLeafIcon className="w-4 h-4 -mb-1 ml-5 text-primary" />
            <b className="font-serif text-[26px] font-semibold text-ink-dark">
              Craftora
            </b>
            <small className="text-[7.5px] tracking-[0.24em] text-primary uppercase font-medium mt-0.5">
              Live Beautifully
            </small>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 inline-flex items-center justify-center text-ink hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full cursor-pointer hover:bg-cream"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search input */}
        <div className="px-5 pt-4 pb-2 shrink-0">
          <div className="flex items-center gap-2 h-10 border border-border bg-cream rounded-full px-3.5 text-ink focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <SearchIcon className="w-4 h-4 text-ink shrink-0" />
            <input
              type="search"
              placeholder="Search for products…"
              aria-label="Search products in mobile menu"
              className="w-full bg-transparent border-0 outline-none text-xs text-ink placeholder:text-muted/80"
            />
          </div>
        </div>

        {/* Navigation Links list */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-2 flex flex-col divide-y divide-border/60"
          aria-label="Mobile Navigation Links"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="py-3 text-sm font-medium text-ink hover:text-primary transition-colors flex items-center justify-between group"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                {item.label}
              </span>
              {item.hasDropdown && (
                <span className="text-xs text-muted" aria-hidden="true">
                  ⌄
                </span>
              )}
            </Link>
          ))}

          {/* Utility links */}
          <div className="pt-3 mt-1 grid gap-2 text-xs text-muted">
            {topBarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="py-1 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer Footer with social links */}
        <div className="p-5 border-t border-border bg-subtle-cream/80 shrink-0">
          <div className="flex items-center gap-3 text-ink mb-2">
            <Link
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-primary transition-colors p-1"
            >
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-primary transition-colors p-1"
            >
              <FacebookIcon className="w-4 h-4" />
            </Link>
            <Link
              href="#pinterest"
              aria-label="Pinterest"
              className="hover:text-primary transition-colors p-1"
            >
              <PinterestIcon className="w-4 h-4" />
            </Link>
            <Link
              href="#youtube"
              aria-label="YouTube"
              className="hover:text-primary transition-colors p-1"
            >
              <YouTubeIcon className="w-4 h-4" />
            </Link>
          </div>
          <small className="text-[10.5px] text-muted block">#LiveBeautifully</small>
        </div>
      </div>
    </>
  );
}
