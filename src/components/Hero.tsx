const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-google-blue dark:text-blue-400 font-medium text-lg tracking-wide uppercase">
                            Hola, soy Enrique Fernandez
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-google-gray-900 dark:text-white leading-tight tracking-tight">
                            Desarrollador <span className="text-google-blue dark:text-blue-400">Full Stack</span> y Diseñador UX/UI
                        </h1>
                        <p className="text-xl text-google-gray-700 dark:text-google-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed text-balance">
                            Creo experiencias digitales minimalistas y funcionales, inspiradas en los mejores estándares de diseño.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-google-blue text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-google hover:shadow-google-hover active:scale-95"
                        >
                            Contactame
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white dark:bg-google-gray-800 text-google-blue dark:text-blue-400 border border-google-gray-300 dark:border-google-gray-600 font-medium rounded-full hover:bg-google-gray-50 dark:hover:bg-google-gray-700 transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                            Ver Proyectos
                        </a>
                    </div>
                </div>

                {/* Optional: Add profile image or abstract shape here */}
                <div className="flex-1 w-full max-w-md relative">
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-google-blue/10 to-google-red/10 border border-google-gray-100 dark:border-google-gray-800 flex items-center justify-center p-8">
                        {/* Placeholder for now, later user can replace with image */}
                        <div className="text-9xl">👨🏻‍💻</div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-google-yellow/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-google-blue/10 rounded-full blur-2xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
