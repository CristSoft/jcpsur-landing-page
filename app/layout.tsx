import type { Metadata } from 'next';
import { Geist, Lora } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iglesia-jose-c-paz-sur.cristsoft.chatgpt.site'),
  title: 'Iglesia Adventista José C. Paz Sur',
  description:
    'Una comunidad cristiana en José C. Paz. Conocé nuestros horarios, nuestra historia y encontrá un espacio de fe, esperanza y encuentro.',
  openGraph: {
    title: 'Iglesia Adventista José C. Paz Sur',
    description: 'Fe, esperanza y encuentro. Conocé nuestra comunidad, horarios y recursos para estudiar la Biblia.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://iglesia-jose-c-paz-sur.cristsoft.chatgpt.site',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Iglesia Adventista José C. Paz Sur — Fe, esperanza y encuentro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iglesia Adventista José C. Paz Sur',
    description: 'Fe, esperanza y encuentro. Conocé nuestra comunidad, horarios y recursos para estudiar la Biblia.',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
