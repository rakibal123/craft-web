import React from 'react';
import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number;
  reviewsCount?: number;
  className?: string;
}

export function Rating({ rating, reviewsCount, className }: RatingProps) {
  const fullStars = Math.max(0, Math.min(5, Math.floor(rating)));
  const emptyStars = 5 - fullStars;

  const starsString = '★'.repeat(fullStars) + '☆'.repeat(emptyStars);

  return (
    <div
      className={cn('text-amber-star text-[10.5px] tracking-[1px] flex items-center', className)}
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      <span aria-hidden="true">{starsString}</span>
      {reviewsCount !== undefined && (
        <span className="no-underline text-muted tracking-normal ml-[3px] text-[10px]">
          ({reviewsCount})
        </span>
      )}
    </div>
  );
}
