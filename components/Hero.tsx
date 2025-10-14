/* eslint-disable react/jsx-no-comment-textnodes */
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import TypingAnimation from './ui/TypingAnimation';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">
              Desenvolvedor Full-Stack
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <TypingAnimation
                text="Transformo suas ideias em aplicações web incríveis."
                className="bg-gradient-primary bg-clip-text text-transparent"
                avgSpeed={30}
                variance={0.6}
                misprintChance={0.05}
                startDelay={300}
                instant={false}
              />
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Especializado em React, Node.js e tecnologias modernas. Desenvolvo soluções completas
              do frontend ao backend para fazer seu negócio crescer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-elegant">
              <Link href="#contact">Contratar Agora</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Currículo-Pedro-Henrique-Teixeira.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
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
              <div className="space-y-3 font-mono text-sm">
                <div className="text-card-text-muted">// Desenvolvedor Full-Stack</div>
                <div className="text-card-text">const developer = {'{'}</div>
                <div className="ml-4 text-card-text">
                  frontend: [&apos;ReactJs&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;,
                  &apos;VueJs&apos;],
                </div>
                <div className="ml-4 text-card-text">
                  backend: [&apos;Node.js&apos;, &apos;PostgreSQL&apos;, &apos;MongoDB&apos;],
                </div>
                <div className="ml-4 text-card-text">
                  cloud: [&apos;AWS&apos;, &apos;Vercel&apos;, &apos;Docker&apos;],
                </div>
                <div className="ml-4 text-card-text">experiencia: &apos;2+ anos&apos;</div>
                <div className="text-card-text">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
