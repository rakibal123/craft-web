'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  BrandLeafIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
} from '@/components/icons';
import { mainNavigation } from '@/data/navigation';
import { useCart } from '@/context/CartContext';
import { MobileNav } from './MobileNav';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-border">
      <Container className="flex items-center h-[76px] gap-5 lg:gap-10">
        {/* Mobile menu hamburger button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-ink hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg cursor-pointer"
        >
          {mobileMenuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex flex-col items-center leading-none text-primary group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 select-none"
        >
          <BrandLeafIcon className="w-5 h-5 -mb-1.5 ml-7 text-primary transition-transform group-hover:scale-110" />
          <b className="font-serif text-[32px] font-semibold text-ink-dark tracking-normal">
            Craftora
          </b>
          <small className="text-[8.5px] tracking-[0.28em] text-primary uppercase font-medium mt-0.5">
            Live Beautifully
          </small>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-7.5 text-[13px] text-ink font-medium"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded py-1 px-1 flex items-center gap-1"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <span className="text-[11px] text-muted -mt-0.5" aria-hidden="true">
                  ⌄
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Search bar */}
        <div className="hidden md:flex items-center gap-2 h-[42px] w-[min(300px,28vw)] ml-auto border border-border bg-cream rounded-[30px] px-4 text-ink focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <SearchIcon className="w-4 h-4 text-ink shrink-0" />
          <input
            type="search"
            placeholder="Search for products…"
            aria-label="Search for products"
            className="w-full bg-transparent border-0 outline-none text-xs text-ink placeholder:text-muted/80 focus:ring-0"
          />
        </div>

        {/* User and Cart Actions */}
        <div className="flex items-center gap-4.5 text-[23px] text-ink ml-auto md:ml-0 shrink-0">
          <Link
            href="#account"
            aria-label="User Account"
            className="relative p-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <UserIcon className="w-6 h-6" />
          </Link>

          <Link
            href="#cart"
            aria-label={`Shopping Cart with ${cartCount} items`}
            className="relative p-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <CartIcon className="w-6 h-6" />
            <span
              id="cn"
              className="absolute -top-1 -right-1.5 bg-primary text-white text-[9px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-normal leading-none"
              aria-hidden="true"
            >
              {cartCount}
            </span>
          </Link>
        </div>
      </Container>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={mainNavigation}
      />
    </header>
  );
}
