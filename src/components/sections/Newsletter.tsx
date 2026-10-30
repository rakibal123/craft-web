'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { useToast } from '@/context/ToastContext';

interface NewsletterProps {
  title?: string;
  description?: string;
}

export function Newsletter({
  title = 'Join Our Community',
  description = 'Get exclusive offers, home inspiration and 10% off your first order.',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        showToast('Thanks for subscribing! 💚');
        setEmail('');
      } else {
        const data = await response.json().catch(() => ({}));
        showToast(data.error || 'Subscription failed. Please check your email.');
      }
    } catch {
      showToast('Thanks for subscribing! 💚');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-primary text-white mt-4 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Botanical Leaves Left and Right */}
      <div className="absolute left-0 top-0 h-full w-auto pointer-events-none opacity-40 sm:opacity-90 select-none">
        <Image
          src="/images/decor/newsletter-leaf-left.webp"
          alt=""
          width={285}
          height={258}
          className="h-full w-auto object-contain object-left"
          aria-hidden="true"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-auto pointer-events-none opacity-40 sm:opacity-90 select-none">
        <Image
          src="/images/decor/newsletter-leaf-right.webp"
          alt=""
          width={213}
          height={258}
          className="h-full w-auto object-contain object-right"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 py-7 sm:py-8.5">
        <div className="text-center md:text-left">
          <h2
            id="newsletter-heading"
            className="font-serif text-[23px] sm:text-[25px] font-semibold mb-1 text-white"
          >
            {title}
          </h2>
          <p className="text-[12.5px] text-white/90 m-0">
            {description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-[#f4f1ea] rounded-full p-1.5 w-full max-w-[430px] border-2 border-white/80 shadow-md transition-all focus-within:ring-2 focus-within:ring-white"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email address"
            aria-label="Your email address for newsletter"
            className="flex-1 bg-transparent border-0 outline-none px-4 text-xs sm:text-[12px] text-ink placeholder:text-muted/80 min-w-0"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-ink-dark text-white rounded-full py-2.5 px-5 sm:px-6 text-xs font-semibold cursor-pointer hover:bg-black transition-all shrink-0 active:scale-[0.98] shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      </Container>
    </section>
  );
}
