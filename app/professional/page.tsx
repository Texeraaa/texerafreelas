import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portifolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen">
      {/* Botão para voltar à versão simplificada */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Versão Simplificada
          </Link>
        </Button>
      </div>

      {/* Badge indicando versão profissional */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary">
          Versão Profissional
        </div>
      </div>

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
