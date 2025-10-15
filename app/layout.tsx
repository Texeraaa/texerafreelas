import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DynamicHeader from '@/components/layout/DynamicHeader';
import { ThemeProvider } from '@/components/common/theme-provider';
import ProgressIndicator from '@/components/common/ProgressIndicator';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo-utils';
import { schemaData } from '@/lib/data/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = generatePageMetadata({
  page: 'home',
  version: 'simple',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="FJbn9LwbdcqGGOn9LXrDDylzD7v4ndnb3EgqdT0eAg4"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData.service),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
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
