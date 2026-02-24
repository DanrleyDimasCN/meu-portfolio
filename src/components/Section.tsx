export default function Section({
    id,
    title,
    children,
    className = "",
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={`py-24 relative ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                    <span className="text-primary mr-3">#</span>
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
