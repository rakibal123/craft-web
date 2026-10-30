import { PromoBannerData } from '@/types';
import { blurPlaceholders } from './blur-placeholders';

export const promoBanners: PromoBannerData[] = [
  {
    id: 'refresh-your-space',
    title: 'Refresh Your Space',
    description: 'Up to 30% Off',
    ctaText: 'Shop the Sale',
    ctaHref: '#new',
    image: '/images/banners/promo-sale.webp',
    alt: 'Living space refresh with handmade accents',
    variant: 'green',
    blurDataURL: blurPlaceholders['/images/banners/promo-sale.webp'],
  },
  {
    id: 'little-details',
    title: 'Little Details Make a Big Difference',
    description: 'Stylish accents for a warmer home.',
    ctaText: 'Shop Home Decor',
    ctaHref: '#cats',
    image: '/images/banners/promo-decor.webp',
    alt: 'Ceramic vases and decorative textures',
    variant: 'warm',
    blurDataURL: blurPlaceholders['/images/banners/promo-decor.webp'],
  },
];
