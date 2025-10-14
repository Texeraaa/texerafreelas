import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import TypingAnimation from './ui/TypingAnimation';
import Link from 'next/link';

export default function HeroSimple() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">
              Criador de Sites e Apps
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <TypingAnimation
                text="Crio sites profissionais que fazem seu negócio crescer."
                className="bg-gradient-primary bg-clip-text text-transparent"
                avgSpeed={30}
                variance={0.6}
                misprintChance={0.05}
                startDelay={300}
                instant={false}
              />
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Transformo sua ideia em um site moderno e funcional. Sites que vendem, impressionam
              seus clientes e fazem você se destacar da concorrência.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-elegant">
              <Link href="#contact">Quero Meu Site</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative glass-card rounded-2xl p-8 shadow-elegant">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-card-text-muted">✨ O que eu faço por você:</div>
                <div className="text-card-text">📱 Sites que funcionam no celular</div>
                <div className="text-card-text">🚀 Carregam super rápido</div>
                <div className="text-card-text">💼 Design profissional</div>
                <div className="text-card-text">🔍 Aparecem no Google</div>
                <div className="text-card-text">💰 Geram mais vendas</div>
                <div className="text-card-text">🎯 Atraem mais clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
