import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';

export default function PortfolioSimple() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            Meus Trabalhos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projetos que{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              geram resultados
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja alguns sites que criei e como eles ajudaram meus clientes
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
                  alt={`Projeto ${project.title} - ${project.descriptionSimple?.substring(0, 100) || project.description.substring(0, 100)}...`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-white">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 glass-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 px-3" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver projeto ${project.title}`}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Ver Site
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

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Gostou do que viu? Vamos criar algo incrível para o seu negócio!
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              Quero Meu Site Também
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
