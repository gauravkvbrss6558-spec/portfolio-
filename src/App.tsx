import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import IntroAnimation from '@/components/IntroAnimation';
import Cursor from '@/components/Cursor';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <IntroAnimation />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Credentials />
      </main>
      <Contact />
    </div>
  );
}

export default App;
