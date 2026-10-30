import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        'group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1',
        className
      )}
    >
      <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3.5 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_22px_rgba(0,0,0,0.12)] bg-card-bg">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(max-width: 560px) 50vw, (max-width: 1050px) 33vw, 17vw"
          placeholder={category.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={category.blurDataURL}
          className="object-cover object-center"
        />
      </div>

      <b className="block text-[12.5px] font-semibold text-ink group-hover:text-primary transition-colors leading-tight">
        {category.name}
      </b>

      <small className="text-[11.5px] text-muted leading-tight mt-0.5">
        {category.subtitle}
      </small>
    </Link>
  );
}
