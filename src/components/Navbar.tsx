"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    <span className="text-primary">&lt;</span>
                    Danrley
                    <span className="text-secondary">/&gt;</span>
                </Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <Link href="#about" className="hover:text-primary transition-colors">
                        Sobre
                    </Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">
                        Skills
                    </Link>
                    <Link href="#experience" className="hover:text-primary transition-colors">
                        Experiência
                    </Link>
                    <Link href="#academic" className="hover:text-primary transition-colors">
                        Acadêmico
                    </Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">
                        Projetos
                    </Link>
                </div>
                <button className="md:hidden text-gray-300 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
