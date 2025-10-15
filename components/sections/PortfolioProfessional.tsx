import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';

export default function PortfolioProfessional() {
  const projectMetrics = [
    {
      icon: TrendingUp,
      label: 'Performance A+',
      description: 'Otimização e velocidade',
    },
    {
      icon: Users,
      label: 'UX Focado',
      description: 'Interface intuitiva',
    },
    {
      icon: Zap,
      label: 'Clean Code',
      description: 'Código manutenível',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            Portfólio de Projetos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trabalhos{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Realizados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Casos de sucesso e projetos técnicos desenvolvidos com atenção aos detalhes, performance
            e experiência do usuário.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projectMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="glass-card-light border-border/50 text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group glass-card-light overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                {project.category && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="shadow-lg" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver projeto ${project.title} ao vivo`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver Projeto
                    </a>
                  </Button>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button size="sm" variant="secondary" className="shadow-lg" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Stack Tecnológica
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="px-3 py-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="glass-card-light border-border/50 inline-block">
            <CardContent className="p-8 max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Mais projetos em desenvolvimento</h3>
              <p className="text-muted-foreground mb-6">
                Portfolio em constante atualização. Entre em contato para conhecer outros trabalhos
                e discutir seu próximo projeto.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all duration-300"
              >
                Vamos Conversar
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
