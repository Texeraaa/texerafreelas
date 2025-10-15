import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Code2,
  MonitorSmartphone,
  DatabaseZap,
  LayoutDashboard,
  Wrench,
  UploadCloud,
  CheckCircle2,
} from 'lucide-react';

export default function ServicesProfessional() {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Frontend',
      description:
        'Criação de interfaces modernas, responsivas e performáticas com foco na experiência do usuário.',
      features: [
        'React, Next.js e TypeScript',
        'Design Systems e componentização',
        'State management (Redux, Context, Zustand)',
        'Otimização de performance e SEO',
      ],
      highlight: 'Interfaces que encantam usuários',
    },
    {
      icon: DatabaseZap,
      title: 'Desenvolvimento Backend',
      description:
        'Construção de APIs robustas, escaláveis e bem documentadas para suportar aplicações complexas.',
      features: [
        'Node.js, NestJS e Express',
        'APIs RESTful e GraphQL',
        'Integração com bancos de dados (SQL/NoSQL)',
        'Autenticação JWT, OAuth e role-based access',
      ],
      highlight: 'Backend sólido e escalável',
    },
    {
      icon: MonitorSmartphone,
      title: 'Aplicações Full-Stack',
      description:
        'Desenvolvimento end-to-end de aplicações completas, conectando frontend e backend de forma eficiente.',
      features: [
        'Arquitetura de sistemas completos',
        'Integração frontend-backend',
        'Gestão de estado e cache',
        'Real-time com WebSockets',
      ],
      highlight: 'Solução completa do zero ao deploy',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards & Painéis Administrativos',
      description:
        'Criação de interfaces de gestão intuitivas com visualização de dados e métricas em tempo real.',
      features: [
        'Visualização de dados com gráficos',
        'Tabelas com filtros, ordenação e paginação',
        'Exportação de relatórios',
        'Gestão de permissões e usuários',
      ],
      highlight: 'Dados transformados em insights',
    },
    {
      icon: Wrench,
      title: 'Manutenção & Refatoração',
      description:
        'Melhoria de sistemas existentes, correção de bugs e implementação de novas funcionalidades.',
      features: [
        'Análise e otimização de código legado',
        'Implementação de testes unitários e E2E',
        'Migração para tecnologias modernas',
        'Debug e correção de problemas complexos',
      ],
      highlight: 'Evolução constante do produto',
    },
    {
      icon: UploadCloud,
      title: 'Deploy & CI/CD',
      description:
        'Configuração de pipelines de deploy automatizado e infraestrutura cloud para ambientes de produção.',
      features: [
        'CI/CD com GitHub Actions / GitLab CI',
        'Deploy em AWS, Vercel, Railway',
        'Configuração de ambientes (dev, staging, prod)',
        'Monitoramento e logs de aplicação',
      ],
      highlight: 'Do código à produção com segurança',
    },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            Áreas de Atuação
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Onde Posso{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contribuir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Experiência sólida em desenvolvimento full-stack, desde a criação de interfaces até APIs
            robustas e infraestrutura cloud. Pronto para agregar valor ao seu time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card-light border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-primary w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {service.highlight}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card-light border-border/50 inline-block">
            <CardContent className="p-8 max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Buscando um desenvolvedor assim?</h3>
              <p className="text-muted-foreground mb-6">
                Estou aberto a novas oportunidades e adoraria fazer parte de um time que valoriza
                qualidade técnica e trabalho colaborativo. Vamos conversar?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all duration-300"
              >
                Agendar uma Conversa
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
