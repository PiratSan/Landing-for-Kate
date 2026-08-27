import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://targetkate.ru'),
  title: 'Екатерина — таргетолог для бизнеса',
  description: 'Запуск, ведение и аудит таргетированной рекламы. Стратегия, креативы и аналитика с понятным результатом.',
  openGraph: {
    title: 'Екатерина — таргетолог для бизнеса',
    description: 'Реклама, которая ведёт к заявкам: от первой гипотезы до понятной системы привлечения клиентов.',
    images: ['/og.png'],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Екатерина — таргетолог для бизнеса',
    description: 'Реклама, которая ведёт к заявкам: от первой гипотезы до понятной системы привлечения клиентов.',
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
