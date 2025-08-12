import About from '@/components/About';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Portifolio from '@/components/Portifolio';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portifolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
