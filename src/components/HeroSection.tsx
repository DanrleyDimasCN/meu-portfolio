import Image from "next/image";
import profilePicture from "../public/image.png";

export default function HeroSection() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Olá, eu sou <br />
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            Danrley Dimas.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Eu crio softwares incrivelmente resilientes e bonitos. Meu foco como desenvolvedor é transformar lógica complexa em interfaces intuitivas, construindo soluções que equilibram performance e usabilidade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                        >
                            Ver Meus Projetos
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors glass"
                        >
                            Fale Comigo
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end shrink-0 z-10">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-primary to-secondary mx-auto">
                        {/* Note: Placeholder for the generated profile picture */}
                        <div className=" h-full w-full rounded-full bg-[#111] overflow-hidden border-4 border-[#0a0a0a] relative">
                            <Image src={profilePicture} alt="Foto de perfil" className="h-full w-full" fill />   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
