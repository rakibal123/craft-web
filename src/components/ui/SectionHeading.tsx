import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  actionText,
  actionHref,
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <em className="not-italic text-primary">{highlightWord}</em>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex items-end justify-between mb-6 md:mb-7 gap-2.5',
        className
      )}
    >
      <div>
        <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#333] font-medium block">
          {eyebrow}
        </span>
        <h2 className="font-serif text-[26px] sm:text-[28px] md:text-[32px] font-semibold text-ink-heading mt-2 leading-[1.2]">
          {renderTitle()}
        </h2>
      </div>

      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="hidden sm:inline-flex items-center gap-1.5 text-[11.5px] text-ink hover:text-primary transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded py-1 px-1.5"
        >
          {actionText}
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
