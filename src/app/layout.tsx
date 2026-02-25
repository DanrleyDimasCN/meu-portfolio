import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Danrley Dimas | Software Engineer',
  description: 'Desenvolvedor Full Stack especializado em React e Node.js.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png' },
      { url: '/favicon-16x16.png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className="antialiased font-sans text-gray-200">
                {children}
            </body>
        </html>
    );
}
