import Section from "./Section";

export default function AcademicBackground() {
    return (
        <Section id="academic" title="Formação Acadêmica">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Education Card */}
                <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/20 rounded-xl text-primary">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Formação</h3>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l-2 border-primary/20 pl-4 py-1">
                            <h4 className="text-xl font-semibold text-gray-200">Análise e Desenvolvimento de Sistemas</h4>
                            <p className="text-primary font-medium mt-1">Unicesumar</p>
                            <p className="text-sm text-gray-500 mt-2">Cursando (2º Semestre)</p>
                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">Foco em engenharia de software, arquitetura de sistemas e metodologias ágeis.</p>
                        </div>

                        <div className="border-l-2 border-primary/20 pl-4 py-1">
                            <h4 className="text-xl font-semibold text-gray-200">Técnico em Informática para Internet</h4>
                            <p className="text-primary font-medium mt-1">Senac Bauru-SP</p>
                            <p className="text-sm text-gray-500 mt-2">Concluído | Diploma FullStack</p>

                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                Formação intensiva com foco no ecossistema **JavaScript**. Especialização em **React**, **React Native** e **Node.js**, com arquitetura de dados em **MySQL** e **PostgreSQL**.
                            </p>

                            {/* Mini Badges para os certificados */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["Front-end", "Back-end", "Mobile"].map((cert) => (
                                    <span key={cert} className="text-[10px] px-2 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md uppercase tracking-wider font-bold">
                                        Certificado {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Card */}
                <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Especializações</h3>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 shadow-[0_0_8px_var(--secondary)]"></div>
                            <div>
                                <h4 className="font-semibold text-gray-200">Desenvolvimento Front-end</h4>
                                <p className="text-sm text-gray-500 mt-1">Certificação Senac | Foco em React.js e UX/UI</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 shadow-[0_0_8px_var(--secondary)]"></div>
                            <div>
                                <h4 className="font-semibold text-gray-200">Desenvolvimento Back-end</h4>
                                <p className="text-sm text-gray-500 mt-1">Certificação Senac | Node.js, MySQL e PostgreSQL</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 shadow-[0_0_8px_var(--secondary)]"></div>
                            <div>
                                <h4 className="font-semibold text-gray-200">Desenvolvimento Mobile</h4>
                                <p className="text-sm text-gray-500 mt-1">Certificação Senac | Aplicações nativas com React Native</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_#60a5fa]"></div>
                            <div>
                                <h4 className="font-semibold text-gray-200 italic">Estudando: Python & Django</h4>
                                <p className="text-sm text-gray-400 mt-1">Expandindo o arsenal para arquiteturas de alta resiliência.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-200 italic">Estudando: Fundamentos e Algoritmos em C</h4>
                                <p className="text-sm text-gray-400 mt-1">Explorando Ciência da Computação e lógica de baixo nível (Unicesumar).</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </Section>
    );
}
