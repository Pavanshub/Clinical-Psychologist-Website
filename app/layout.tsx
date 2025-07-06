import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Clinical Psychologist | Los Angeles Therapy',
  description: 'Dr. Serena Blake is a licensed clinical psychologist in Los Angeles, CA, specializing in anxiety, relationship counseling, and trauma recovery. Book your free consultation today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}