import { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/components/auth-provider';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Masquerade Manor',
  description:
    'Masquerade Manor Online: Unmask hidden identities, roll dice, strategize, and be the last guest standing!',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Masquerade Manor',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  applicationName: 'Masquerade Manor',
  keywords: ['template'],
  authors: [{ name: 'Li Yuxuan', url: 'https://xmliszt.github.io/' }],
  creator: 'Li Yuxuan',
  alternates: {
    canonical: 'http://localhost:3000',
  },
  category: 'technology',
  openGraph: {
    title: 'Masquerade Manor',
    description:
      'Masquerade Manor Online: Unmask hidden identities, roll dice, strategize, and be the last guest standing!',
    url: 'http://localhost:3000',
    siteName: 'Taboo AI',
    images: [
      {
        url: 'https://i.imgur.com/IIP6UzK.jpeg',
        width: 800,
        height: 600,
        alt: 'Masquerade Manor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masquerade Manor',
    description:
      'Masquerade Manor Online: Unmask hidden identities, roll dice, strategize, and be the last guest standing!',
    siteId: '1704579643',
    creator: '@xmliszt',
    creatorId: '1704579643',
    images: ['https://i.imgur.com/IIP6UzK.jpeg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
