import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Nav } from '@/components/layout/Nav';
import { StatusBar } from '@/components/layout/StatusBar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const THEME_INIT = `(function(){var t=localStorage.getItem('vl-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})()`;

export const metadata: Metadata = {
  title: 'VikLabs — Product Studio for Software, Video & Marketing',
  description: 'VikLabs is a small product studio building software, cutting video, and running marketing for founders who want one team handling all three.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={cn(geistSans.variable, geistMono.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <StatusBar />
        <ScrollProgress />
        <Nav />
        <main style={{ paddingTop: '84px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
