import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://83.166.247.193'),
  title: 'Екатерина — таргетолог',
  description: 'Персональная страница Екатерины, специалиста по таргетированной рекламе.',
  openGraph: {
    title: 'Екатерина — таргетолог',
    description: 'Персональная страница Екатерины, специалиста по таргетированной рекламе.',
    images: ['/og.png'],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Екатерина — таргетолог',
    description: 'Персональная страница Екатерины, специалиста по таргетированной рекламе.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
