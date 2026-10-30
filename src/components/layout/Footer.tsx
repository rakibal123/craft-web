import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import {
  BrandLeafIcon,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  YouTubeIcon,
} from '@/components/icons';
import { footerSections } from '@/data/navigation';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer id="ct" className="bg-subtle-cream pt-7 text-ink">
      <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr_1.2fr] gap-6 pb-6.5">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <Link
            href="/"
            className="inline-flex flex-col items-start leading-none text-primary group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <BrandLeafIcon className="w-5 h-5 -mb-1.5 ml-6.5 text-primary" />
            <b className="font-serif text-[32px] font-semibold text-ink-dark">
              Craftora
            </b>
            <small className="text-[8.5px] tracking-[0.28em] text-primary uppercase font-medium mt-0.5">
              Live Beautifully
            </small>
          </Link>
        </div>

        {/* Dynamic footer link sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-[12.5px] font-semibold text-ink mb-3.5">
              {section.title}
            </h4>
            <ul className="list-none p-0 m-0 grid gap-2.5 text-[11px] text-muted">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social media column */}
        <div>
          <h4 className="text-[12.5px] font-semibold text-ink mb-3.5">Follow Us</h4>
          <div className="flex items-center gap-3.5 text-ink mb-3">
            <Link
              href="#instagram"
              aria-label="Follow Craftora on Instagram"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
            >
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#facebook"
              aria-label="Follow Craftora on Facebook"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
            >
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#pinterest"
              aria-label="Follow Craftora on Pinterest"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
            >
              <PinterestIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#youtube"
              aria-label="Subscribe to Craftora on YouTube"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded p-0.5"
            >
              <YouTubeIcon className="w-5 h-5" />
            </Link>
          </div>
          <small className="text-[11px] text-muted block">#LiveBeautifully</small>
        </div>

        {/* Script Accent Quote Column */}
        <div className="hidden lg:flex flex-col items-end justify-center">
          <div className="font-script text-[26px] leading-[1.05] text-ink-dark text-right -rotate-4 select-none">
            {siteConfig.quote.line1}
            <br />
            {siteConfig.quote.line2}
            <br />
            {siteConfig.quote.line3}
            <br />
            {siteConfig.quote.line4}
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="bg-copy-bg py-3.5 text-[11px] text-muted">
        <Container className="flex items-center justify-between gap-2.5 flex-wrap">
          <span>© 2026 Craftora. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
