import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                    subject: `Nuevo mensaje de ${formData.name} desde tu Portfolio`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-google-blue via-blue-600 to-blue-700 dark:from-blue-800 dark:via-blue-900 dark:to-google-gray-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-google-hover dark:shadow-dark-glow-lg">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-google-yellow opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-google-green opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                    {/* Left side - Info */}
                    <div className="space-y-8 text-white">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                ¿Listo para colaborar?
                            </h2>
                            <p className="text-blue-100 dark:text-blue-200 text-lg">
                                Estoy disponible para nuevos proyectos, colaboraciones y oportunidades. ¡Hablemos!
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <a
                                href="mailto:fernandezenrique352@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Email</p>
                                    <p className="font-medium group-hover:underline">fernandezenrique352@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+59161129360"
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Teléfono</p>
                                    <p className="font-medium group-hover:underline">+591 61129360</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Ubicación</p>
                                    <p className="font-medium">La Paz, Bolivia</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://linkedin.com/in/enrique-fernandez-chiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/kikecod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://enriquefernandez.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-300"
                                aria-label="Website"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all disabled:opacity-50"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all disabled:opacity-50"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none disabled:opacity-50"
                                placeholder="Cuéntame sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2
                                ${status === 'success'
                                    ? 'bg-green-500 text-white cursor-default'
                                    : status === 'error'
                                        ? 'bg-red-500 text-white cursor-default'
                                        : 'bg-white text-google-blue hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98]'
                                }
                                disabled:opacity-70 disabled:cursor-not-allowed
                            `}
                        >
                            {status === 'sending' && (
                                <>
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Enviando...</span>
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>¡Mensaje Enviado!</span>
                                </>
                            )}
                            {status === 'error' && (
                                <>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span>Error - Intenta de nuevo</span>
                                </>
                            )}
                            {status === 'idle' && (
                                <>
                                    <span>Enviar Mensaje</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-center text-google-gray-500 dark:text-google-gray-400 text-sm space-y-2">
                <p>© {new Date().getFullYear()} Enrique Rafael Fernandez Chiri. Todos los derechos reservados.</p>
                <p className="flex items-center justify-center gap-2">
                    <span>Hecho con</span>
                    <span className="text-google-red animate-pulse">❤️</span>
                    <span>usando React & Tailwind CSS</span>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
