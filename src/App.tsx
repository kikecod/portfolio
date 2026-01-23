import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-google-gray-50 dark:bg-dark-bg font-sans selection:bg-google-blue/20 selection:text-google-blue dark:selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <BentoGrid />
        <Contact />
      </main>
    </div>
  )
}