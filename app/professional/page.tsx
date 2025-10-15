import HeroProfessional from '@/components/sections/HeroProfessional';
import AboutProfessional from '@/components/sections/AboutProfessional';
import ServicesProfessional from '@/components/sections/ServicesProfessional';
import PortfolioProfessional from '@/components/sections/PortfolioProfessional';
import ContactProfessional from '@/components/sections/ContactProfessional';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  page: 'professional',
});

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen">
      {/* Botão para voltar à versão simplificada - aparece abaixo do header em telas grandes */}
      <div className="hidden lg:block fixed top-20 left-4 z-40">
        <Button variant="outline" size="sm" className="shadow-lg backdrop-blur-sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Versão Simplificada
          </Link>
        </Button>
      </div>

      {/* Badge indicando versão profissional - apenas em telas muito grandes (XL+) */}
      <div className="hidden xl:block fixed top-20 right-4 z-40">
        <div className="bg-gradient-primary text-white rounded-full px-4 py-2 text-xs font-semibold shadow-lg flex items-center gap-2 backdrop-blur-sm">
          <Building2 className="h-4 w-4" />
          Portfólio Corporativo
        </div>
      </div>

      <main role="main">
        <section id="home" aria-label="Apresentação profissional">
          <HeroProfessional />
        </section>
        <section id="about" aria-label="Experiência e habilidades técnicas">
          <AboutProfessional />
        </section>
        <section id="services" aria-label="Serviços de desenvolvimento full-stack">
          <ServicesProfessional />
        </section>
        <section id="portfolio" aria-label="Portfolio de projetos técnicos">
          <PortfolioProfessional />
        </section>
        <section id="contact" aria-label="Formulário de contato profissional">
          <ContactProfessional />
        </section>
      </main>
    </div>
  );
}
