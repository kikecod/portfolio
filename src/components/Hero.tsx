const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left space-y-8">
                    <div className="space-y-4 opacity-0 animate-fade-in-up">
                        <h2 className="text-google-blue dark:text-blue-400 font-medium text-lg tracking-wide uppercase">
                            Hola, soy Enrique Fernandez
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-google-gray-900 dark:text-white leading-tight tracking-tight">
                            Desarrollador <span className="text-google-blue dark:text-blue-400">Backend</span> & Cloud
                        </h1>
                        <p className="text-xl text-google-gray-700 dark:text-google-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed text-balance">
                            Auxiliar de Docencia en la UMSA. Especializado en arquitecturas de microservicios, Spring Boot y tecnologías cloud.
                            Co-fundador de Code Cat Studio (+780 miembros).
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-up delay-200">
                        <a
                            href="#contact"
                            className="group px-8 py-3 bg-google-blue text-white font-medium rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-google hover:shadow-google-hover dark:hover:shadow-dark-glow active:scale-95"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Contáctame
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white dark:bg-google-gray-800 text-google-blue dark:text-blue-400 border border-google-gray-300 dark:border-google-gray-600 font-medium rounded-full hover:bg-google-gray-50 dark:hover:bg-google-gray-700 transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="/cv_enrique_fernandez.pdf"
                            download="CV_Enrique_Fernandez.pdf"
                            className="group px-8 py-3 bg-transparent text-google-gray-700 dark:text-google-gray-300 border border-google-gray-300 dark:border-google-gray-600 font-medium rounded-full hover:border-google-blue dark:hover:border-blue-400 hover:text-google-blue dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Descargar CV
                            </span>
                        </a>
                    </div>

                    {/* Quick stats */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start opacity-0 animate-fade-in-up delay-300">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-google-blue dark:text-blue-400">+90</div>
                            <div className="text-sm text-google-gray-500 dark:text-google-gray-400">Estudiantes mentorizados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-google-green dark:text-green-400">+780</div>
                            <div className="text-sm text-google-gray-500 dark:text-google-gray-400">Miembros en comunidad</div>
                        </div>
                    </div>
                </div>

                {/* Profile image area with floating animation */}
                <div className="flex-1 w-full max-w-md relative opacity-0 animate-fade-in delay-400">
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-google-blue/10 to-google-red/10 dark:from-google-blue/20 dark:to-google-red/20 border border-google-gray-100 dark:border-google-gray-800 flex items-center justify-center p-8 animate-float">
                        {/* Placeholder for now, later user can replace with image */}
                        <div className="text-9xl">👨🏻‍💻</div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-google-yellow/30 dark:bg-google-yellow/20 rounded-full blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-google-blue/20 dark:bg-google-blue/30 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
                    <div className="absolute top-1/2 right-0 w-16 h-16 bg-google-green/20 dark:bg-google-green/30 rounded-full blur-xl animate-pulse-slow delay-300"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
