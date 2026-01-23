import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-google-gray-50 font-sans selection:bg-google-blue/20 selection:text-google-blue">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <BentoGrid />
        <Contact />
      </main>
    </div>
  )
}