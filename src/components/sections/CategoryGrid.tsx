import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { categories as defaultCategories } from '@/data/categories';
import { Category } from '@/types';

interface CategoryGridProps {
  categories?: Category[];
  eyebrow?: string;
  title?: string;
  highlightWord?: string;
  actionText?: string;
  actionHref?: string;
}

export function CategoryGrid({
  categories = defaultCategories,
  eyebrow = 'Shop by Category',
  title = 'Find What Feels Like Home',
  highlightWord = 'Home',
  actionText = 'View All Categories',
  actionHref = '#cats',
}: CategoryGridProps) {
  return (
    <section id="cats" className="pt-12 sm:pt-14" aria-labelledby="categories-heading">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlightWord={highlightWord}
          actionText={actionText}
          actionHref={actionHref}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-7.5 text-center">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
