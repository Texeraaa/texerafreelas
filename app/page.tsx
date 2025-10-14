import AboutSimple from '@/components/sections/AboutSimple';
import HeroSimple from '@/components/sections/HeroSimple';
import ServicesSimple from '@/components/sections/ServicesSimple';
import PortfolioSimple from '@/components/sections/PortfolioSimple';
import Contact from '@/components/sections/Contact';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Botão para ir à versão técnica - apenas desktop */}
      <div className="hidden md:block fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild>
          <Link
            href="/professional"
            className="flex items-center gap-2"
            aria-label="Ir para versão técnica do portfolio"
          >
            <Code className="h-4 w-4" />
            Versão Técnica
          </Link>
        </Button>
      </div>

      <main role="main">
        <section id="home" aria-label="Apresentação principal">
          <HeroSimple />
        </section>
        <section id="about" aria-label="Sobre o desenvolvedor">
          <AboutSimple />
        </section>
        <section id="services" aria-label="Serviços oferecidos">
          <ServicesSimple />
        </section>
        <section id="portfolio" aria-label="Portfolio de projetos">
          <PortfolioSimple />
        </section>
        <section id="contact" aria-label="Informações de contato">
          <Contact />
        </section>
      </main>
    </div>
  );
}
