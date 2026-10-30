import type { Metadata } from 'next';
import { Playfair_Display, Inter, Caveat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { TopBar, Header, Footer } from '@/components/layout';
import { siteConfig } from '@/data/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero/hero-woman.webp',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/hero/hero-woman.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-white text-ink min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary-dark"
      >
        <Providers>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
