import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Meu Portfólio | Desenvolvedor de Software",
    description: "Um mostruário dos meus projetos e experiência em desenvolvimento de software.",
    icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest', // O arquivo que veio no ZIP também vai aqui
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
