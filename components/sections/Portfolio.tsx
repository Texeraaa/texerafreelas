import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import portfolioCybercode from '@/assets/cybercode.png';
import portfolioHzc from '@/assets/HZC.png';
import Image from 'next/image';

export default function Portifolio() {
  const projects = [
    {
      title: 'CyberCode',
      description:
        'Projeto educacional interativo para ensinar estrutura de dados e programação em C++ a iniciantes, com aulas por tema (structs, arrays, pilhas, filas, listas encadeadas, mapas), demonstrações visuais e um mini-game de batalha de hordas em C++; inclui layout responsivo, navegação e vídeo-aulas próprias.',
      image: portfolioCybercode,
      technologies: ['React', 'Tailwind CSS', 'shadcn/ui', 'C++'],
      liveUrl: 'https://cybercode-sable.vercel.app/',
      githubUrl: 'https://github.com/Texeraaa/cybercode.front',
    },
    {
      title: 'HZC — Landing Page',
      description:
        'Landing page responsiva para uma loja fictícia de skates, focada em conversão: hero com promoções, vitrine de decks/rodas/shape do mês, CTAs para WhatsApp e “Comprar agora”, depoimentos, FAQ, captação de e-mail (newsletter) e feed do Instagram; SEO/OG otimizados, performance A+ e animações suaves.',
      image: portfolioHzc,
      technologies: ['Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://hzc-skateboard.vercel.app/index.html',
      githubUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Portfólio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projetos que{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              fazem a diferença
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group glass-card-light overflow-hidden hover:shadow-elegant transition-all duration-300 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title} - ${project.description.substring(0, 100)}...`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 glass-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver projeto ${project.title} ao vivo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Mais Projetos
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
