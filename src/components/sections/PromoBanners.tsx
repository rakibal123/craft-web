import React from 'react';
import { PromoBanner } from '@/components/ui/PromoBanner';
import { promoBanners as defaultBanners } from '@/data/promo-banners';
import { PromoBannerData } from '@/types';

interface PromoBannersProps {
  banners?: PromoBannerData[];
}

export function PromoBanners({ banners = defaultBanners }: PromoBannersProps) {
  return (
    <section className="mt-12 sm:mt-13 px-3.5 max-w-[1240px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {banners.map((banner) => (
          <PromoBanner key={banner.id} banner={banner} />
        ))}
      </div>
    </section>
  );
}
