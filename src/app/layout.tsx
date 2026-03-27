import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shievram Raja Rao | Data Analyst',
  description:
    'Portfolio website for Shievram Raja Rao, showcasing data analytics, ETL, reporting, and project work.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Shievram Raja Rao | Data Analyst',
    description:
      'Portfolio website for Shievram Raja Rao, showcasing data analytics, ETL, reporting, and project work.',
    url: 'https://example.com',
    siteName: 'Shievram Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
