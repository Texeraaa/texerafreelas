import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pedro Teixeira
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvedor full-stack especializado em criar soluções web modernas e escaláveis.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/texeraaa"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedrohteixeira17/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ph.teixeira.ph2020@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Sites e Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Sistemas Web Personalizado
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Backend & APIs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Painéis e Dashboards
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Tecnologias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  React & Next.js
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Node.js & Express
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  TypeScript
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cloud & DevOps
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ph.teixeira.ph2020@gmail.com</li>
              <li>+55 (19) 99779-8101</li>
              <li>São Paulo, Brasil</li>
              <li>Seg - Sex, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Feito com <Heart className="h-4 w-4 text-red-500" /> por Pedro H. Teixeira © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
