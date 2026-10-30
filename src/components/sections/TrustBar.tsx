import React from 'react';
import { Container } from '@/components/ui/Container';
import { TrustItem } from '@/components/ui/TrustItem';
import { trustItems } from '@/data/trust-items';
import { TrustItemData } from '@/types';

interface TrustBarProps {
  items?: TrustItemData[];
}

export function TrustBar({ items = trustItems }: TrustBarProps) {
  return (
    <div className="bg-soft-cream border-b border-border/50">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        {items.map((item) => (
          <TrustItem key={item.id} item={item} />
        ))}
      </Container>
    </div>
  );
}
