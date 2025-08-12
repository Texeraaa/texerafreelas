import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/services';
import Portifolio from '@/components/portifolio';
import Contact from '@/components/Contact';

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
