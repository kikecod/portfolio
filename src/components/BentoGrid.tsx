interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string; // Placeholder color or simple pattern for now
    size: 'small' | 'medium' | 'large';
    link: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Dashboard",
        description: "Plataforma de análisis de ventas en tiempo real con gráficos interactivos.",
        tech: ["React", "Tailwind", "Recharts"],
        image: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        size: "large",
        link: "#"
    },
    {
        title: "Task Manager",
        description: "Aplicación de gestión de tareas colaborativa estilo Kanban.",
        tech: ["Vue", "Firebase"],
        image: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        size: "small",
        link: "#"
    },
    {
        title: "Portfolio v1",
        description: "Mi primer sitio web personal.",
        tech: ["HTML", "CSS"],
        image: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        size: "small",
        link: "#"
    },
    {
        title: "Social Media App",
        description: "Red social minimalista enfocada en la privacidad.",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        image: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        size: "medium",
        link: "#"
    }
];

const BentoGrid = () => {
    return (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-4">Proyectos Destacados</h2>
                <p className="text-xl text-google-gray-700 dark:text-google-gray-300 max-w-2xl">
                    Una selección de mis trabajos más recientes, explorando diferentes tecnologías y soluciones.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`
              relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:shadow-google-hover cursor-pointer group
              ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
              ${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              bg-white dark:bg-google-gray-800 border border-google-gray-300 dark:border-google-gray-700
            `}
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-20 ${project.image} blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className={`p-3 rounded-full ${project.image} bg-opacity-20`}>
                                    {/* Icon placeholder */}
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" /></svg>
                                </div>
                                <div className="bg-google-gray-100 dark:bg-google-gray-700 rounded-full px-3 py-1 text-xs font-medium text-google-gray-700 dark:text-google-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ver proyecto
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-google-gray-900 dark:text-white mb-2 group-hover:text-google-blue dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-google-gray-700 dark:text-google-gray-400 text-sm line-clamp-2 md:line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-google-gray-500 dark:text-google-gray-300 bg-google-gray-100 dark:bg-google-gray-700 px-2 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BentoGrid;
