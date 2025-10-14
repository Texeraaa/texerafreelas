import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DynamicHeader from '@/components/DynamicHeader';
import { ThemeProvider } from '@/components/theme-provider';
import ProgressIndicator from '@/components/ProgressIndicator';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pedro Teixeira - Desenvolvedor Full-Stack',
  description:
    'Portfólio de Pedro Teixeira, desenvolvedor Full-Stack especializado em React, Node.js e tecnologias modernas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressIndicator />
          <DynamicHeader />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
