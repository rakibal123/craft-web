import {
  Hero,
  TrustBar,
  CategoryGrid,
  NewArrivals,
  PromoBanners,
  WhyShop,
  Newsletter,
} from '@/components/sections';
import { trustItems, whyShopItems } from '@/data/trust-items';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { promoBanners } from '@/data/promo-banners';
import { siteConfig } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Make Everyday Brighter"
        heading="Beautiful Crafts Happier You"
        description={siteConfig.description}
        ctaText="Shop Now"
        ctaHref="#new"
        storyText="Watch Our Story"
        storyHref="#story"
      />
      <TrustBar items={trustItems} />
      <CategoryGrid
        categories={categories}
        eyebrow="Shop by Category"
        title="Find What Feels Like Home"
        highlightWord="Home"
        actionText="View All Categories"
        actionHref="#cats"
      />
      <NewArrivals
        products={products}
        eyebrow="New Arrivals"
        title="Fresh Finds for a Better Everyday"
        highlightWord="Everyday"
        actionText="View All New Arrivals"
        actionHref="#new"
      />
      <PromoBanners banners={promoBanners} />
      <WhyShop items={whyShopItems} eyebrow="WHY SHOP WITH CRAFTORA" />
      <Newsletter
        title="Join Our Community"
        description="Get exclusive offers, home inspiration and 10% off your first order."
      />
    </>
  );
}
