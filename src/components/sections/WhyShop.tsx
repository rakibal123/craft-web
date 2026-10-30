import React from 'react';
import { TrustItem } from '@/components/ui/TrustItem';
import { whyShopItems as defaultItems } from '@/data/trust-items';
import { TrustItemData } from '@/types';

interface WhyShopProps {
  items?: TrustItemData[];
  eyebrow?: string;
}

export function WhyShop({
  items = defaultItems,
  eyebrow = 'WHY SHOP WITH CRAFTORA',
}: WhyShopProps) {
  return (
    <section
      id="why"
      className="bg-pale-green max-w-[1212px] mx-3.5 xl:mx-auto mt-7 rounded-md py-5 px-4 sm:px-10 pb-6 text-center"
      aria-label="Why Shop with Craftora"
    >
      <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#333] font-medium mb-4.5">
        {eyebrow}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {items.map((item) => (
          <div key={item.id} className="flex justify-start sm:justify-center">
            <TrustItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
