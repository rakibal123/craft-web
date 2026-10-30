import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f5d4a',
          dark: '#244a3b',
        },
        cream: '#f7f2ea',
        'card-bg': '#f1eeea',
        ink: {
          DEFAULT: '#1f2a25',
          heading: '#14201a',
          dark: '#1f3b30',
          body: '#3d4842',
        },
        muted: '#6b746e',
        border: '#e8e2d6',
        'pale-green': '#eef2ec',
        'soft-cream': '#fbf8f3',
        'subtle-cream': '#faf8f4',
        'copy-bg': '#f0eeea',
        amber: {
          star: '#f2a413',
        },
        promo: {
          greenA: '#55784f',
          greenB: '#73906c',
          warmA: '#f5e6d4',
          warmB: '#ead2b8',
          warmText: '#3a2a1d',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
