import AboutSimple from '@/components/AboutSimple';
import HeroSimple from '@/components/HeroSimple';
import ServicesSimple from '@/components/ServicesSimple';
import PortfolioSimple from '@/components/PortfolioSimple';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Botão para ir à versão técnica */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild>
          <Link href="/professional" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Versão Técnica
          </Link>
        </Button>
      </div>

      <main>
        <section id="home">
          <HeroSimple />
        </section>
        <section id="about">
          <AboutSimple />
        </section>
        <section id="services">
          <ServicesSimple />
        </section>
        <section id="portfolio">
          <PortfolioSimple />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
