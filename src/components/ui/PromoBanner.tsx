import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PromoBannerData } from '@/types';
import { ArrowRightIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface PromoBannerProps {
  banner: PromoBannerData;
  className?: string;
}

export function PromoBanner({ banner, className }: PromoBannerProps) {
  const isGreen = banner.variant === 'green';

  return (
    <div
      className={cn(
        'relative rounded-lg overflow-hidden min-h-[175px] flex items-center px-5 sm:px-8 shadow-sm',
        isGreen
          ? 'bg-[linear-gradient(100deg,#55784f,#73906c)] text-white'
          : 'bg-[linear-gradient(100deg,#f5e6d4,#ead2b8)] text-promo-warmText',
        className
      )}
    >
      {/* Masked Right Image */}
      <div className="absolute right-0 top-0 h-full w-[56%] pointer-events-none">
        <Image
          src={banner.image}
          alt={banner.alt}
          fill
          sizes="(max-width: 820px) 56vw, 28vw"
          placeholder={banner.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={banner.blurDataURL}
          className="object-cover object-center [mask-image:linear-gradient(to_right,transparent,#000_30%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[55%] sm:max-w-[48%] py-5">
        <h3 className="font-serif text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] font-semibold mb-2">
          {banner.title}
        </h3>
        <p className="text-[13px] mb-3.5 opacity-90">{banner.description}</p>
        <Link
          href={banner.ctaHref}
          className="inline-flex items-center gap-2 bg-white text-ink hover:bg-card-bg transition-colors rounded-[30px] py-2.5 px-4.5 text-xs font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
        >
          <span>{banner.ctaText}</span>
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
