export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  alt: string;
  blurDataURL?: string;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  href: string;
  image: string;
  alt: string;
  blurDataURL?: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface TrustItemData {
  id: string;
  title: string;
  description: string;
  icon: 'shipping' | 'secure' | 'returns' | 'sustainable' | 'quality' | 'heart' | 'support';
}

export interface PromoBannerData {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  alt: string;
  variant: 'green' | 'warm';
  blurDataURL?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  title: string;
  description: string;
  url: string;
  freeShippingNotice: string;
  quote: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
}
