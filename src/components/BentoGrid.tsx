interface Project {
    title: string;
    description: string;
    stack: string;
    tech: string[];
    highlights: string[];
    size: 'small' | 'medium' | 'large';
    link: string;
    period: string;
    color: 'blue' | 'green' | 'yellow' | 'red';
}

const projects: Project[] = [
    {
        title: "Sistema de Votación Electrónica Universitaria",
        description: "Ecosistema de microservicios para votaciones universitarias seguras y escalables.",
        stack: "Java 21, Spring Cloud, Docker, Redis, PostgreSQL",
        tech: ["Spring Boot", "Spring Cloud", "Docker", "Redis", "PostgreSQL", "JWT"],
        highlights: [
            "Microservicios orquestados con Spring Cloud Gateway y Eureka Service Discovery",
            "Auth Service con Spring Security y JWT (Nimbus), implementando RBAC",
            "Redis como caché de segundo nivel, herencia JOINED en JPA/Hibernate",
            "Contenarización completa con Docker Compose"
        ],
        size: "large",
        link: "https://github.com/kikecod/elecciones-electronicas-backend",
        period: "Mar - May 2025",
        color: "blue"
    },
    {
        title: "Rogu - Plataforma de Reservas Deportivas",
        description: "Plataforma completa para reserva de espacios deportivos con pagos reales.",
        stack: "NestJS, PostgreSQL, React, AWS (EC2/RDS), Docker",
        tech: ["NestJS", "React", "AWS", "PostgreSQL", "Docker"],
        highlights: [
            "Liderazgo de equipo de 3 desarrolladores bajo metodología ágil",
            "Pasarela de pagos reales (Libélula) y verificación KYC (Persona)",
            "Infraestructura en AWS: EC2, RDS, S3"
        ],
        size: "medium",
        link: "https://github.com/kikecod/espacios_deportivos",
        period: "Sep - Dic 2025",
        color: "green"
    }
];

const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
        blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    };
    return colors[color] || colors.blue;
};

const getGradientClasses = (color: string) => {
    const gradients: Record<string, string> = {
        blue: "from-google-blue/20 to-transparent",
        green: "from-google-green/20 to-transparent",
        yellow: "from-google-yellow/20 to-transparent",
        red: "from-google-red/20 to-transparent",
    };
    return gradients[color] || gradients.blue;
};

const BentoGrid = () => {
    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="p-2 bg-google-red/10 dark:bg-google-red/20 rounded-xl">
                        <svg className="w-6 h-6 text-google-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </span>
                    Proyectos Destacados
                </h2>
                <p className="text-xl text-google-gray-700 dark:text-google-gray-300 max-w-2xl">
                    Proyectos de arquitectura backend y soluciones cloud que demuestran experiencia en sistemas escalables.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            relative overflow-hidden rounded-3xl p-6 transition-all duration-500 
                            hover:shadow-google-hover dark:hover:shadow-dark-glow cursor-pointer group
                            ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                            ${project.size === 'medium' ? 'md:col-span-2' : ''}
                            bg-white dark:bg-dark-elevated border border-google-gray-200 dark:border-google-gray-700
                            hover:-translate-y-2
                        `}
                    >
                        {/* Background gradient */}
                        <div className={`absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 rounded-full opacity-10 dark:opacity-20 bg-gradient-to-br ${getGradientClasses(project.color)} blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="h-full flex flex-col relative z-10">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-2xl ${getColorClasses(project.color)}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-google-gray-500 dark:text-google-gray-400">
                                        {project.period}
                                    </span>
                                    <div className="bg-google-gray-100 dark:bg-google-gray-700 rounded-full p-2 text-google-gray-700 dark:text-google-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-google-gray-900 dark:text-white mb-2 group-hover:text-google-blue dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-google-gray-700 dark:text-google-gray-400 text-sm mb-3">
                                    {project.description}
                                </p>
                                <p className="text-xs text-google-gray-500 dark:text-google-gray-500 mb-4 font-mono">
                                    {project.stack}
                                </p>

                                {/* Highlights for large cards */}
                                {project.size === 'large' && (
                                    <ul className="space-y-2 mb-4">
                                        {project.highlights.slice(0, 3).map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-google-gray-600 dark:text-google-gray-400">
                                                <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${project.color === 'blue' ? 'text-google-blue' : 'text-google-green'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="line-clamp-2">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, project.size === 'large' ? 6 : 4).map((t, i) => (
                                    <span key={i} className="text-xs font-medium text-google-gray-600 dark:text-google-gray-300 bg-google-gray-100 dark:bg-google-gray-700/50 px-2.5 py-1 rounded-lg hover:bg-google-gray-200 dark:hover:bg-google-gray-700 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BentoGrid;
