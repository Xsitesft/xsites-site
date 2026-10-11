import './globals.css';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'XSites — Sites profissionais para pequenas empresas em Angola',
  description:
    'A XSites cria sites profissionais para pequenas empresas em Angola, com soluções adaptadas a salões, restaurantes, clínicas, hotéis, lojas e prestadores de serviços.',
  openGraph: {
    title: 'XSites — Sites profissionais para pequenas empresas em Angola',
    description:
      'A XSites cria sites profissionais para pequenas empresas em Angola, com soluções adaptadas a salões, restaurantes, clínicas, hotéis, lojas e prestadores de serviços.',
    type: 'website',
    locale: 'pt_AO',
    siteName: 'XSites',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-AO" className={`${poppins.variable} ${inter.variable} bg-bg text-text`}>
      <head>
        <link rel="icon" href="/assets/favicon.svg" />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}