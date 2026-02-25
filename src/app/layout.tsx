import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Meu Portfólio | Desenvolvedor de Software",
    description: "Um mostruário dos meus projetos e experiência em desenvolvimento de software.",
    icons: {
        icon: [
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/icon.svg' },
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
