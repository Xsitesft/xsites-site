import './globals.css';

export const metadata = {
  title: 'XSites',
  description: 'XSites website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-bg text-text">
      <head>
        <link rel="icon" href="/assets/favicon.svg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}