import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';

interface HeroProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  storyText?: string;
  storyHref?: string;
}

export function Hero({
  eyebrow = 'Make Everyday Brighter',
  heading = 'Beautiful Crafts Happier You',
  description = 'Discover thoughtfully designed craft supplies and handmade essentials that bring comfort, style and joy to your life.',
  ctaText = 'Shop Now',
  ctaHref = '#new',
  storyText = 'Watch Our Story',
  storyHref = '#story',
}: HeroProps) {
  return (
    <section className="bg-cream relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 md:grid-cols-[42%_58%] min-h-[334px] p-0 w-full">
        {/* Left column: Text Content */}
        <div className="relative flex flex-col justify-center z-10 py-10 px-6 sm:px-8 md:py-8 md:pl-[max(75px,calc((100vw-1240px)/2+40px))] md:pr-5">
          {/* Decorative Leaf in Background */}
          <div className="absolute left-0 top-0 h-full w-auto -z-10 pointer-events-none opacity-60 sm:opacity-100">
            <Image
              src="/images/decor/hero-leaf.webp"
              alt=""
              width={70}
              height={334}
              priority
              className="h-full w-auto object-contain object-left"
              aria-hidden="true"
            />
          </div>

          <span className="text-[10.5px] uppercase tracking-[0.16em] text-muted font-medium">
            {eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="font-serif text-[38px] sm:text-[44px] lg:text-[56px] leading-[1.08] text-ink-heading font-semibold my-4 md:mt-4 md:mb-4.5"
          >
            {heading}
          </h1>

          <p className="text-sm text-ink-body max-w-[290px] mb-7 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-6.5 flex-wrap">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-primary text-white py-3.5 px-6.5 rounded-[40px] text-sm font-medium hover:bg-primary-dark transition-colors duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>{ctaText}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href={storyHref}
              className="inline-flex items-center gap-2.5 text-xs text-ink hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded py-1 px-1 group"
            >
              <i
                className="w-9 h-9 border-[1.5px] border-ink rounded-full flex items-center justify-center text-[13px] not-italic transition-transform group-hover:scale-105"
                aria-hidden="true"
              >
                ▶
              </i>
              <span className="font-medium">{storyText}</span>
            </Link>
          </div>
        </div>

        {/* Right column: Hero Image */}
        <div className="relative w-full h-[300px] md:h-full min-h-[300px] md:min-h-[334px]">
          <Image
            src="/images/hero/hero-woman.webp"
            alt="Woman enjoying a cozy handmade home"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover object-center md:[mask-image:linear-gradient(to_right,transparent,#000_14%)]"
          />
        </div>
      </div>
    </section>
  );
}
