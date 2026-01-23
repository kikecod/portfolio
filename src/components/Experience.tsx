interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description?: string;
    highlights?: string[];
    type: 'work' | 'leadership';
}

const experiences: ExperienceItem[] = [
    {
        role: "Auxiliar de Docencia Titular",
        company: "Universidad Mayor de San Andrés (UMSA)",
        period: "Ene 2026 - Presente",
        type: 'work',
        highlights: [
            "Mentoría técnica y revisión de código para más de 90 estudiantes semestrales en 'Bases de Datos I' y 'Programación Web III'.",
            "Cátedra práctica en patrones de diseño Backend (MVC, Repository Pattern) con Java (Spring Boot), PHP (Laravel) y Node.js (NestJS).",
            "Diseño y administración de bases de datos (PostgreSQL, Oracle), incluyendo optimización de consultas SQL."
        ]
    },
    {
        role: "Co-Fundador",
        company: "Code Cat Studio",
        period: "Ago 2025 - Presente",
        type: 'leadership',
        highlights: [
            "Impulsé el lanzamiento y definí la visión inicial de una comunidad tecnológica estudiantil con +780 miembros.",
            "Coordiné la estrategia de convocatoria inicial, logrando el primer grupo núcleo para el crecimiento orgánico."
        ]
    }
];

const education = {
    institution: "Universidad Mayor de San Andrés (UMSA)",
    degree: "Licenciatura en Informática",
    area: "Mención Desarrollo de Software e Innovación Tecnológica",
    period: "Feb 2023 - Presente (Séptimo Semestre)",
    location: "La Paz, Bolivia"
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-dark-surface border-y border-google-gray-300 dark:border-google-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Education Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="p-2 bg-google-yellow/10 dark:bg-google-yellow/20 rounded-xl">
                            <svg className="w-6 h-6 text-google-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </span>
                        Educación
                    </h2>

                    <div className="bg-gradient-to-r from-google-yellow/5 to-google-blue/5 dark:from-google-yellow/10 dark:to-google-blue/10 rounded-2xl p-6 border border-google-gray-200 dark:border-google-gray-700 hover:shadow-google-hover dark:hover:shadow-dark-glow transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-google-gray-900 dark:text-white">
                                    {education.degree}
                                </h3>
                                <p className="text-google-blue dark:text-blue-400 font-medium">
                                    {education.area}
                                </p>
                                <p className="text-google-gray-700 dark:text-google-gray-300">
                                    {education.institution}
                                </p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                                <span className="px-4 py-1.5 bg-google-yellow/20 dark:bg-google-yellow/30 text-google-yellow dark:text-yellow-300 font-medium rounded-full text-sm">
                                    {education.period}
                                </span>
                                <span className="text-sm text-google-gray-500 dark:text-google-gray-400 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {education.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="p-2 bg-google-blue/10 dark:bg-google-blue/20 rounded-xl">
                        <svg className="w-6 h-6 text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    Experiencia & Liderazgo
                </h2>

                <div className="relative border-l-2 border-google-gray-300 dark:border-google-gray-700 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-12 group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-dark-surface border-4 
                                ${exp.type === 'work' ? 'border-google-blue dark:border-blue-400' : 'border-google-green dark:border-green-400'}
                                group-hover:scale-125 transition-transform duration-300`}
                            ></div>

                            <div className="bg-white dark:bg-dark-elevated rounded-2xl p-6 border border-google-gray-200 dark:border-google-gray-700 hover:shadow-google-hover dark:hover:shadow-dark-glow transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                    <h3 className="text-xl font-bold text-google-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit
                                        ${exp.type === 'work'
                                            ? 'bg-google-blue/10 dark:bg-google-blue/20 text-google-blue dark:text-blue-400'
                                            : 'bg-google-green/10 dark:bg-google-green/20 text-google-green dark:text-green-400'
                                        }`}
                                    >
                                        {exp.period}
                                    </span>
                                </div>

                                <h4 className={`text-lg font-medium mb-4 
                                    ${exp.type === 'work' ? 'text-google-blue dark:text-blue-400' : 'text-google-green dark:text-green-400'}`}
                                >
                                    {exp.company}
                                </h4>

                                {exp.highlights && (
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-google-gray-700 dark:text-google-gray-300">
                                                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 
                                                    ${exp.type === 'work' ? 'text-google-blue dark:text-blue-400' : 'text-google-green dark:text-green-400'}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
