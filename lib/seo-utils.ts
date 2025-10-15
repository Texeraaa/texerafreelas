import { Metadata } from 'next';
import { seoData, SEOData } from '@/lib/data/seo';

interface GenerateMetadataProps {
  page: keyof typeof seoData;
  version?: 'simple' | 'technical';
}

export function generatePageMetadata({ page, version }: GenerateMetadataProps): Metadata {
  let data: SEOData;

  if (page === 'home' && version) {
    data = seoData.home[version];
  } else {
    data = seoData[page] as SEOData;
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [{ name: 'Pedro Henrique Teixeira' }],
    creator: 'Pedro Henrique Teixeira',
    publisher: 'Pedro Henrique Teixeira',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://pedroteixeira.vercel.app/'),
    alternates: {
      canonical: data.canonical || '/',
    },
    openGraph: {
      title: data.openGraph.title,
      description: data.openGraph.description,
      url: data.openGraph.url,
      siteName: 'Pedro Teixeira - Desenvolvedor Web',
      images: [
        {
          url: data.openGraph.image,
          width: 1200,
          height: 630,
          alt: data.openGraph.title,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.twitter.title,
      description: data.twitter.description,
      images: [data.twitter.image],
      creator: '@texeradev',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
  };
}
