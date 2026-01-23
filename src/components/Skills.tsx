interface SkillCategory {
    label: string;
    details: string;
    icon: string;
    color: 'blue' | 'green' | 'yellow' | 'red';
}

const skills: SkillCategory[] = [
    {
        label: "Lenguajes",
        details: "Java, JavaScript, TypeScript, SQL, Python",
        icon: "code",
        color: "blue"
    },
    {
        label: "Backend Frameworks",
        details: "Spring Boot 3.x, Spring Cloud, Spring Security, NestJS, Node.js, Hibernate/JPA",
        icon: "server",
        color: "green"
    },
    {
        label: "Data & Cloud",
        details: "Docker, Kubernetes (Básico), AWS (EC2, S3, RDS), Git/GitHub, Linux",
        icon: "cloud",
        color: "yellow"
    },
    {
        label: "Idiomas",
        details: "Español (Nativo), Inglés (Avanzado - Certificado CBA)",
        icon: "globe",
        color: "red"
    }
];

const certifications = [
    {
        name: "AWS Certified Cloud Practitioner",
        status: "En curso",
        date: "Examen programado: Feb 2026",
        icon: "☁️"
    }
];

const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
        blue: {
            bg: "bg-google-blue/10 dark:bg-google-blue/20",
            text: "text-google-blue dark:text-blue-400",
            border: "border-google-blue/20 dark:border-blue-400/30"
        },
        green: {
            bg: "bg-google-green/10 dark:bg-google-green/20",
            text: "text-google-green dark:text-green-400",
            border: "border-google-green/20 dark:border-green-400/30"
        },
        yellow: {
            bg: "bg-google-yellow/10 dark:bg-google-yellow/20",
            text: "text-google-yellow dark:text-yellow-400",
            border: "border-google-yellow/20 dark:border-yellow-400/30"
        },
        red: {
            bg: "bg-google-red/10 dark:bg-google-red/20",
            text: "text-google-red dark:text-red-400",
            border: "border-google-red/20 dark:border-red-400/30"
        }
    };
    return colors[color] || colors.blue;
};

const getIcon = (icon: string, color: string) => {
    const colorClass = getColorClasses(color).text;

    switch (icon) {
        case 'code':
            return (
                <svg className={`w-6 h-6 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            );
        case 'server':
            return (
                <svg className={`w-6 h-6 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            );
        case 'cloud':
            return (
                <svg className={`w-6 h-6 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            );
        case 'globe':
            return (
                <svg className={`w-6 h-6 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            );
        default:
            return null;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-dark-surface border-y border-google-gray-300 dark:border-google-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-google-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="p-2 bg-google-blue/10 dark:bg-google-blue/20 rounded-xl">
                        <svg className="w-6 h-6 text-google-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </span>
                    Habilidades Técnicas
                </h2>
                <p className="text-xl text-google-gray-700 dark:text-google-gray-300 max-w-2xl mb-12">
                    Stack tecnológico enfocado en desarrollo backend y arquitecturas cloud.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {skills.map((skill, index) => {
                        const colors = getColorClasses(skill.color);
                        return (
                            <div
                                key={index}
                                className={`group p-6 rounded-2xl bg-gradient-to-br from-white to-google-gray-50 
                                    dark:from-dark-elevated dark:to-dark-surface
                                    border ${colors.border} hover:shadow-google-hover dark:hover:shadow-dark-glow 
                                    transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                                        {getIcon(skill.icon, skill.color)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold ${colors.text} mb-2`}>
                                            {skill.label}
                                        </h3>
                                        <p className="text-google-gray-700 dark:text-google-gray-300 leading-relaxed">
                                            {skill.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Certifications */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-google-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-google-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Certificaciones
                    </h3>

                    <div className="flex flex-wrap gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-google-yellow/5 to-google-blue/5 dark:from-google-yellow/10 dark:to-google-blue/10 border border-google-gray-200 dark:border-google-gray-700 hover:shadow-google-hover dark:hover:shadow-dark-glow transition-all duration-300"
                            >
                                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
                                <div>
                                    <h4 className="font-bold text-google-gray-900 dark:text-white">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm text-google-gray-500 dark:text-google-gray-400">
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className="w-2 h-2 bg-google-yellow rounded-full animate-pulse"></span>
                                            {cert.status} • {cert.date}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
