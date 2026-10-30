import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { Rating } from '@/components/ui/Rating';
import { WishlistButton } from './WishlistButton';
import { AddToCartButton } from './AddToCartButton';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col h-full text-left">
      <div className="relative aspect-[130/139] rounded-lg overflow-hidden bg-card-bg">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 560px) 50vw, (max-width: 1050px) 33vw, 17vw"
          placeholder={product.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={product.blurDataURL}
          priority={priority}
          className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <WishlistButton productId={product.id} productName={product.name} />
      </div>

      <h3 className="font-sans text-[11.5px] font-medium text-ink mt-3.5 mb-1.5 line-clamp-1">
        {product.name}
      </h3>

      <div className="text-[12.5px] font-semibold text-ink mb-1.5">
        {formatPrice(product.price)}
      </div>

      <Rating rating={product.rating} reviewsCount={product.reviewsCount} />

      <div className="mt-auto">
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
