import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fleetwoods-field-guide.brainy-frog-9195.chatgpt.site'),
  title: 'Fleetwood’s Field Guide to Everything',
  description: 'Notes, discoveries, important findings, and other things worth remembering.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Fleetwood’s Field Guide to Everything',
    description: 'Notes, discoveries, important findings, and other things worth remembering.',
    images: [{ url: '/images/caterpillar.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleetwood’s Field Guide to Everything',
    description: 'Notes, discoveries, important findings, and other things worth remembering.',
    images: ['/images/caterpillar.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
