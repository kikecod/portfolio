const experiences = [
    {
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Presente",
        description: "Liderando la migración a React y optimizando el rendimiento de la plataforma principal."
    },
    {
        role: "Full Stack Developer",
        company: "Creative Agency",
        period: "2021 - 2023",
        description: "Desarrollo de sitios web corporativos y aplicaciones web para clientes internacionales."
    },
    {
        role: "Junior Web Developer",
        company: "StartUp Local",
        period: "2020 - 2021",
        description: "Colaboración en el desarrollo de MVPs utilizando tecnologías modernas."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-google-gray-900/50 border-y border-google-gray-300 dark:border-google-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-12">Experiencia</h2>

                <div className="relative border-l-2 border-google-gray-300 dark:border-google-gray-700 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-google-gray-900 border-4 border-google-blue dark:border-blue-400"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-google-gray-900 dark:text-white">{exp.role}</h3>
                                <span className="text-sm font-medium text-google-gray-500 dark:text-google-gray-400 bg-google-gray-100 dark:bg-google-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-google-blue dark:text-blue-400 mb-3">{exp.company}</h4>
                            <p className="text-google-gray-700 dark:text-google-gray-300 max-w-2xl text-lg leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
