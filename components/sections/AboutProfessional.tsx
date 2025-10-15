import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function AboutProfessional() {
  const techStack = {
    frontend: {
      title: 'Frontend',
      icon: Code2,
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    backend: {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Prisma', 'RESTful APIs'],
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['AWS', 'Vercel', 'Docker', 'Git', 'CI/CD', 'Linux'],
    },
  };

  const highlights = [
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva em times multidisciplinares com Scrum/Kanban',
    },
    {
      icon: TrendingUp,
      title: 'Aprendizado Contínuo',
      description: 'Sempre atualizado com as melhores práticas e novas tecnologias',
    },
    {
      icon: Rocket,
      title: 'Ownership & Proatividade',
      description: 'Comprometimento com o sucesso do produto e da equipe',
    },
  ];

  const experience = [
    {
      title: 'Arquitetura de Software',
      description: 'Design de sistemas escaláveis e manuteníveis',
    },
    {
      title: 'Clean Code',
      description: 'Código legível, testável e bem documentado',
    },
    {
      title: 'Performance',
      description: 'Otimização de aplicações e experiência do usuário',
    },
    {
      title: 'SEO & Acessibilidade',
      description: 'Desenvolvimento com foco em standards web',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Sobre Mim</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Desenvolvedor Pronto para{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Novos Desafios
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Mais de 2 anos de experiência trabalhando com tecnologias modernas. Busco fazer parte de
            uma equipe onde possa contribuir, aprender e crescer profissionalmente.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.values(techStack).map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="glass-card-light border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="glass-card-light border-border/50 text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-gradient-primary">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Details */}
        <Card className="glass-card-light border-border/50 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Minhas Competências</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolvedor com sólida experiência em todas as etapas do ciclo de
                    desenvolvimento. Busco contribuir com times que valorizam qualidade técnica,
                    colaboração e inovação.
                  </p>
                </div>

                <div className="space-y-4">
                  {experience.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-base">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Como Trabalho</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <span className="font-semibold text-foreground">Comunicação Efetiva:</span>{' '}
                      Valorizo transparência, feedback constante e alinhamento com a equipe.
                      Documentação clara do que desenvolvo.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Qualidade de Código:</span>{' '}
                      Comprometido com clean code, testes automatizados e code reviews. Código
                      pensado para o time, não só para mim.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Metodologias Ágeis:</span>{' '}
                      Experiência com Scrum e Kanban. Participo ativamente de dailies, plannings e
                      retrospectivas.
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Mentalidade de Crescimento:
                      </span>{' '}
                      Sempre disposto a aprender novas tecnologias, receber feedbacks e contribuir
                      para o crescimento do time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
