import React from 'react';
import { TrustItemData } from '@/types';
import {
  ShippingIcon,
  SecurePaymentIcon,
  EasyReturnsIcon,
  SustainableIcon,
  QualityGemIcon,
  SupportHeadphonesIcon,
  HeartIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';

interface TrustItemProps {
  item: TrustItemData;
  className?: string;
  iconClassName?: string;
}

export function TrustItem({ item, className, iconClassName }: TrustItemProps) {
  const renderIcon = () => {
    switch (item.icon) {
      case 'shipping':
        return <ShippingIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'secure':
        return <SecurePaymentIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'returns':
        return <EasyReturnsIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'sustainable':
        return <SustainableIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'quality':
        return <QualityGemIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'support':
        return <SupportHeadphonesIcon className={cn('w-[34px] h-[34px] shrink-0 text-ink', iconClassName)} />;
      case 'heart':
        return <HeartIcon filled className={cn('w-6 h-6 shrink-0 text-ink', iconClassName)} />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {renderIcon()}
      <div>
        <b className="block text-[12.5px] font-semibold text-ink leading-tight">
          {item.title}
        </b>
        <small className="text-[11px] text-muted leading-tight block mt-0.5">
          {item.description}
        </small>
      </div>
    </div>
  );
}
