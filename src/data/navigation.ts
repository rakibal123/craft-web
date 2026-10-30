import { NavItem, FooterSection } from '@/types';

export const topBarLinks: NavItem[] = [
  { label: 'Track Order', href: '#track' },
  { label: 'Help', href: '#help' },
];

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#new', hasDropdown: true },
  { label: 'Categories', href: '#cats', hasDropdown: true },
  { label: 'About', href: '#why' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#ct' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Shop', href: '#new' },
      { label: 'About Us', href: '#why' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#ct' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Track Order', href: '#track' },
      { label: 'Shipping Info', href: '#shipping' },
      { label: 'Returns & Refunds', href: '#returns' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Support', href: '#support' },
    ],
  },
];
