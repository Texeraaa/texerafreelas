import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Download, Mail, Linkedin, Github, Award, Briefcase, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function HeroProfessional() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(74,222,128,0.03),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge profissional */}
          <div className="flex justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Desenvolvedor Full-Stack • 2+ Anos de Experiência • Disponível para Contratação
            </Badge>
          </div>

          {/* Título principal */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Pedro H. Teixeira
            </h1>
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Desenvolvedor Full-Stack | Buscando Novos Desafios
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
                Desenvolvedor apaixonado por criar soluções escaláveis e trabalhar em equipes de
                alta performance
              </p>
            </div>
          </div>

          {/* Destaques profissionais */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-medium">React • Next.js • Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="font-medium">CLT • PJ • Remoto/Híbrido</span>
            </div>
          </div>

          {/* Descrição profissional */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Desenvolvedor full-stack com mais de 2 anos de experiência em empresas e projetos de
            diversos setores. Busco integrar uma equipe onde possa contribuir com minhas habilidades
            técnicas, crescer profissionalmente e fazer parte de uma cultura de inovação e
            excelência.
          </p>

          {/* CTAs profissionais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="shadow-elegant text-base px-8" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Agendar Conversa
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <a href="/Currículo-Pedro-Henrique-Teixeira.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Currículo
              </a>
            </Button>
          </div>

          {/* Links profissionais */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/Texeraaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pedrohteixeira17/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:ph.teixeira.ph2020@gmail.com"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
