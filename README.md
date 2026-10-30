# Craftora – Live Beautifully

Production-ready Next.js application converting the single-file Craftora prototype into an accessible, responsive, and high-performance storefront.

## Tech Stack
- **Framework**: Next.js (App Router, React 19)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom design tokens in `tailwind.config.ts`
- **Fonts**: `next/font` for Playfair Display, Inter, and Caveat
- **State Management**: React Context (`CartContext`, `WishlistContext`, `ToastContext`)
- **Images**: `next/image` with WebP format and blur placeholders
- **Icons**: Custom inline SVG components

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build
```bash
npm run build
npm run start
```

### Code Linting
```bash
npm run lint
```

## Folder Structure
```
src/
├─ app/
│  ├─ api/
│  │  └─ subscribe/
│  │     └─ route.ts        # Newsletter subscription API
│  ├─ layout.tsx            # fonts, metadata, Header/Footer, providers
│  ├─ page.tsx              # Home: composes section components only
│  ├─ loading.tsx           # Skeleton loading state
│  ├─ not-found.tsx         # 404 page
│  ├─ providers.tsx         # Client context provider wrapper
│  └─ globals.css           # Global tokens, CSS variables, reduced-motion
├─ components/
│  ├─ layout/               # TopBar, Header, MobileNav, Footer
│  ├─ sections/             # Hero, TrustBar, CategoryGrid, NewArrivals, PromoBanners, WhyShop, Newsletter
│  ├─ ui/                   # Button, SectionHeading, Rating, IconButton, Container, Toast, TrustItem, CategoryCard, PromoBanner
│  ├─ product/              # ProductCard, ProductGrid, WishlistButton, AddToCartButton
│  └─ icons/                # All inline SVG icons
├─ data/                    # site.ts, navigation.ts, trust-items.ts, categories.ts, products.ts, promo-banners.ts
├─ context/                 # CartContext.tsx, WishlistContext.tsx, ToastContext.tsx
├─ hooks/                   # useMediaQuery.ts, useScrollLock.ts
├─ lib/                     # utils.ts (cn helper, formatPrice)
└─ types/                   # index.ts (Product, Category, NavItem, etc.)
public/images/
├─ hero/                    # hero-woman.webp
├─ categories/              # 6 category images in WebP
├─ products/                # 6 product images in WebP
├─ banners/                 # 2 promo banners in WebP
└─ decor/                   # Leaf decorations in WebP
```

## Features & Interaction
- **Sticky Header**: Navigation, search input, account link, live cart item counter, and accessible mobile hamburger drawer.
- **Wishlist & Cart**: Interactive heart toggle and add-to-cart with automatic toast notifications.
- **Newsletter**: Validated email subscription with feedback toast.
- **Responsive Layout**: Tailored breakpoints for mobile (360px+), tablet (640px/768px), and desktop (1024px/1280px).
- **Accessibility & SEO**: Semantic HTML5 tags, alt text for all media, keyboard navigation, and Open Graph / Twitter metadata.
