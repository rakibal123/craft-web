import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center min-h-[50vh]">
      <Container className="text-center max-w-md mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold block mb-2">
          404 Error
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink-heading mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-ink-body mb-8 leading-relaxed">
          The handmade treasure you are looking for seems to have moved or does not exist.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </Container>
    </div>
  );
}
