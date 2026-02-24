import Section from "./Section";
import vendafacil from "../public/image-vendafacil.png";
import viniveta from "../public/image-viniVeta.png";
import bomclick from "../public/image-bomclick.png";
import { StaticImageData } from "next/image";
type Project = {
    title: string;
    description: string;
    tech: string[];
    image: StaticImageData;
    github?: string;
    link?: string;
};

const projects: Project[] = [
    {
        title: "Venda Fácil",
        description: "Sistema completo em desenvolvimento para automação comercial e gestão de estoque. Desenvolvido para facilitar a rotina de vendas com integração direta via WhatsApp.",
        tech: ["Next/React.js", "TypeScript", "Node.js/Express", "React Native", "Zustand", "Shadcn/UI", "WhatsApp API", "MongoDB", "Tailwind CSS"],
        image: vendafacil,
        
    },
    {
        title: "ViniVeta",
        description: "Aplicação focada no universo da vitivinicultura, com catálogo detalhado de uvas, sistema de contas e avaliações personalizadas.",
        image: viniveta,
        tech: ["React.js", "Node.js", "Express", "MySQL", "Styled Components"],
        github: "https://github.com/DanrleyDimasCN/ViniVeta",
    },
    {
        title: "Bom-Click",
        description: "Solução desenvolvida em grupo para análise de mercado, permitindo a comparação de preços em tempo real entre estabelecimentos locais.",
        image: bomclick,
        tech: ["React.js", "React Native", "Node.js/Express", "Context API", "MySQL", "Prisma"],
    
    }
];

export default function ProjectGallery() {
    return (
        <Section id="projects" title="Projetos em Destaque">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative cursor-pointer glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                    >
                        <div className="relative h-60 w-full overflow-hidden bg-[#111]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            {project.image ? (
                                <img src={project.image.src} alt={project.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono">Imagem Indisponível</div>
                            )}

                            {(!project.github && !project.link) && (
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                                    Projeto Privado
                                </div>
                            )}
                        </div>

                        <div className="p-8 relative z-20 -mt-10">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors mt-5">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {(project.github || project.link) ? (
                                <div className="flex gap-4 border-t border-white/10 pt-6">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-primary hover:text-white flex items-center gap-2 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            Demo Ao Vivo
                                        </a>
                                    )}
                                </div>
                            ) : (
                                <div className="border-t border-white/5 pt-6">
                                    <span className="text-xs text-gray-600 italic">Repositório Privado por motivos de segurança/negócio.</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}