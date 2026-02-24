"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AcademicBackground from "@/components/AcademicBackground";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsSection from "@/components/SkillsSection";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    const [copied, setCopied] = useState(false);
    const email = "danrleydimas@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
            <Navbar />

            <HeroSection />

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <SkillsSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ExperienceTimeline />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ProjectGallery />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <AcademicBackground />

            {/* Footer */}
            <footer id="contact" className="py-12 border-t border-white/10 mt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10"></div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Vamos Conversar</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Atualmente, estou aberto a novas oportunidades. Se você tiver alguma dúvida ou quiser apenas dar um oi, farei o possível para responder!
                    </p>

                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href={`mailto:${email}?subject=Contato via Portfólio`}
                            className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95"
                        >
                            Diga Olá
                        </a>
                        
                        <ContactForm />

                        <button 
                            onClick={handleCopy}
                            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium hover:bg-white/10 transition-all hover:border-white/20"
                        >
                            {copied ? "E-mail copiado!" : "Copiar e-mail"}
                        </button>
                    </div>

                    <div className="mt-16 flex justify-center gap-6">
                        <a href="https://github.com/DanrleyDimasCN" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/danrley-dimas/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Danrley Dimas. Feito com Next.js & Tailwind.
                    </p>
                </div>
            </footer>
        </main>
    );
}
