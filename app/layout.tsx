import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/src/widgets/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '크루 - 경북대학교 동아리 가두모집',
  description: 'KNU CREW - 경북대학교 동아리 가두모집 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-[calc(100vh-70px)] flex-col antialiased`}
      >
        <Navbar />
        <main className='flex-1 overflow-auto py-[70px]'>{children}</main>
      </body>
    </html>
  );
}
