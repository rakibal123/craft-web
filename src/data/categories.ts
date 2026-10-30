import { Category } from '@/types';
import { blurPlaceholders } from './blur-placeholders';

export const categories: Category[] = [
  {
    id: 'textiles-fabric',
    name: 'Textiles & Fabric',
    subtitle: 'Cozy Comfort',
    href: '#cats',
    image: '/images/categories/category-textiles.webp',
    alt: 'Textiles and Fabric collection',
    blurDataURL: blurPlaceholders['/images/categories/category-textiles.webp'],
  },
  {
    id: 'planters-decor',
    name: 'Planters & Decor',
    subtitle: 'Stylish Living',
    href: '#cats',
    image: '/images/categories/category-planters.webp',
    alt: 'Planters and Decor collection',
    blurDataURL: blurPlaceholders['/images/categories/category-planters.webp'],
  },
  {
    id: 'pottery-clay',
    name: 'Pottery & Clay',
    subtitle: 'Shape & Mold',
    href: '#cats',
    image: '/images/categories/category-pottery.webp',
    alt: 'Pottery and Clay collection',
    blurDataURL: blurPlaceholders['/images/categories/category-pottery.webp'],
  },
  {
    id: 'candle-making',
    name: 'Candle Making',
    subtitle: 'Calm Your Space',
    href: '#cats',
    image: '/images/categories/category-candles.webp',
    alt: 'Candle Making supplies',
    blurDataURL: blurPlaceholders['/images/categories/category-candles.webp'],
  },
  {
    id: 'weaving-baskets',
    name: 'Weaving & Baskets',
    subtitle: 'Simplify Life',
    href: '#cats',
    image: '/images/categories/category-weaving.webp',
    alt: 'Weaving and Baskets handmade items',
    blurDataURL: blurPlaceholders['/images/categories/category-weaving.webp'],
  },
  {
    id: 'diy-furniture',
    name: 'DIY Furniture',
    subtitle: 'Modern & Minimal',
    href: '#cats',
    image: '/images/categories/category-furniture.webp',
    alt: 'DIY Furniture minimalist chair',
    blurDataURL: blurPlaceholders['/images/categories/category-furniture.webp'],
  },
];
