import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductGrid } from '@/components/product/ProductGrid';
import { products as defaultProducts } from '@/data/products';
import { Product } from '@/types';

interface NewArrivalsProps {
  products?: Product[];
  eyebrow?: string;
  title?: string;
  highlightWord?: string;
  actionText?: string;
  actionHref?: string;
}

export function NewArrivals({
  products = defaultProducts,
  eyebrow = 'New Arrivals',
  title = 'Fresh Finds for a Better Everyday',
  highlightWord = 'Everyday',
  actionText = 'View All New Arrivals',
  actionHref = '#new',
}: NewArrivalsProps) {
  return (
    <section id="new" className="pt-12 sm:pt-14" aria-labelledby="new-arrivals-heading">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlightWord={highlightWord}
          actionText={actionText}
          actionHref={actionHref}
        />

        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
