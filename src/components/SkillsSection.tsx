import Section from "./Section";

export default function SkillsSection() {
    const hardSkills = [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "React Native", level: 75 },
        { name: "Python", level: 50 },
        { name: "Tailwind CSS", level: 95 },
        { name: "C", level: 50 },
    ];

    const softSkills = [
        "Comunicação Clara",
        "Trabalho em Equipe",
        "Resolução de Problemas",
        "Adaptabilidade",
        "Pensamento Crítico",
        "Autodidata",
        "Gestão de Tempo",
        "Proatividade",
        "Trabalho sob Pressão",
    ];

    return (
        <Section id="skills" title="Habilidades">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Hard Skills */}
                <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/20 rounded-xl text-primary">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Hard Skills</h3>
                    </div>

                    <div className="space-y-6">
                        {hardSkills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-gray-200">{skill.name}</span>
                                    <span className="text-primary">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full shadow-[0_0_10px_var(--primary)]"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {softSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 hover:border-secondary/30 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_var(--secondary)]"></div>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                            &quot;Além do código, acredito que o sucesso de um projeto depende de comunicação clara, empatia com o usuário e a capacidade de trabalhar em equipe de forma colaborativa e ágil.&quot;
                        </p>
                    </div>
                </div>

            </div>
        </Section>
    );
}
