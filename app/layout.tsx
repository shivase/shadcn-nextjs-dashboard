import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import { cn } from 'lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'shadcn nextjs dashboard',
  description: 'A dashboard for shadcn nextjs project',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'dark')}>{children}</body>
    </html>
  );
}
