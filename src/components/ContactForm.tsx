"use client";
import { useState } from "react";
import confetti from "canvas-confetti"; // 1. Não esqueça do import!

export default function ContactForm() {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        error: false,
    });

    // 2. Apenas o ID final aqui para não duplicar a URL no fetch
    const FORM_ID = "mdalyzad"; 

    // 3. Função de celebração personalizada (Azul e Branco)
    const fireConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#ffffff', '#60a5fa'],
            zIndex: 999,
        });
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState({ ...state, submitting: true });

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            // Ajustado para usar apenas o ID
            const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, error: false });
                fireConfetti(); // 4. Onde o brilho acontece!
            } else {
                setState({ submitting: false, succeeded: false, error: true });
            }
        } catch (err) {
            setState({ submitting: false, succeeded: false, error: true });
        }
    }

    if (state.succeeded) {
        return (
            <div className="text-center py-12 glass rounded-3xl border border-primary/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Recebida!</h3>
                <p className="text-gray-400">Obrigado pelo contato. Responderei em breve no seu e-mail.</p>
                <button
                    onClick={() => setState({ ...state, succeeded: false })}
                    className="mt-6 text-sm text-primary hover:underline font-medium"
                >
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
            {/* ... o restante do seu formulário continua igual ... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                />
            </div>

            <textarea
                name="message"
                placeholder="Sobre o que vamos falar?"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
            />

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 rounded-2xl bg-primary text-white font-bold tracking-wide hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
                {state.submitting ? "Enviando engenharia..." : "Enviar Mensagem"}
            </button>

            {state.error && (
                <p className="text-red-400 text-sm text-center animate-bounce">
                    Ocorreu um erro. Tente novamente ou use o link direto de e-mail.
                </p>
            )}
        </form>
    );
}