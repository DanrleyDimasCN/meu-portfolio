import Section from "./Section";

const experiences = [
    {
        role: "Estágio em Desenvolvimento Full Stack",
        company: "Hack Sales Performance",
        date: "2026/01 - Atual",
        description: "Desenvolvimento Full Stack da plataforma Hack Running. Unindo lógica sólida em TypeScript e MongoDB com interfaces modernas em Next.js, mantenho a resiliência do sistema enquanto escalo novas ferramentas para a gestão de equipes de corrida.",
        tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Zustand", "Tailwind CSS", "Shadcn UI", "Zod"],
    },
    {
        role: "Atendimento e Suporte Operacional",
        company: "Rodoserv Lanches Alameda Quality Center",
        date: "2014/11 - 2022/05, 2024/06 - 2026/02",
        description: "Responsável pelo atendimento ao cliente e suporte às operações em um dos maiores centros de conveniência da região. Experiência fundamental para o desenvolvimento de uma visão focada no usuário final e agilidade na entrega de resultados em cenários de alta exigência.",
        tech: ["Atendimento ao Cliente", "Organização", "Agilidade"],
    }
]

export default function ExperienceTimeline() {
    return (
        <Section id="experience" title="Experiência">
            <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:pl-8 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0 group">
                        {/* Timeline Dot */}
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[25px] md:-left-[41px] top-1.5 shadow-[0_0_10px_var(--primary)] group-hover:scale-125 transition-transform"></div>

                        <div className="glass p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <span className="text-secondary font-mono text-sm tracking-wider mt-2 md:mt-0 bg-secondary/10 px-3 py-1 rounded-full">
                                    {exp.date}
                                </span>
                            </div>
                            <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                            <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
