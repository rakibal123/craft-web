import React from 'react';
import { Container } from '@/components/ui/Container';

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col animate-pulse" aria-label="Loading page content">
      {/* Hero skeleton */}
      <div className="bg-cream/60 min-h-[334px] w-full flex items-center">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          <div className="space-y-4">
            <div className="h-3 w-32 bg-border/60 rounded" />
            <div className="h-10 w-3/4 bg-border/60 rounded" />
            <div className="h-16 w-5/6 bg-border/60 rounded" />
            <div className="h-10 w-40 bg-primary/30 rounded-full" />
          </div>
          <div className="h-[250px] bg-border/40 rounded-lg hidden md:block" />
        </Container>
      </div>

      {/* Trust bar skeleton */}
      <div className="bg-soft-cream py-6 border-b border-border/30">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-border/60" />
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-20 bg-border/60 rounded" />
                <div className="h-2 w-28 bg-border/40 rounded" />
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}
