export interface Service {
  icon: string;
  title: string;
  titleSimple?: string;
  description: string;
  descriptionSimple?: string;
  features: string[];
  featuresSimple?: string[];
}

export const services: Service[] = [
  {
    icon: 'MonitorSmartphone',
    title: 'Sites e Landing Pages',
    titleSimple: 'Site Profissional',
    description:
      'Criação de sites institucionais e landing pages modernas, otimizadas para dispositivos móveis.',
    descriptionSimple:
      'Seu cartão de visitas digital! Site bonito, rápido e que funciona perfeitamente no celular.',
    features: [
      'Design responsivo',
      'Performance e SEO básico',
      'Formulários de contato',
      'Hospedagem com domínio e SSL',
    ],
    featuresSimple: [
      'Design moderno e atrativo',
      'Funciona em qualquer dispositivo',
      'Formulário de contato',
      'Seu site no ar com domínio próprio',
    ],
  },
  {
    icon: 'DatabaseZap',
    title: 'Sistemas Web Personalizados',
    titleSimple: 'Loja Virtual',
    description:
      'Desenvolvimento completo de aplicações web sob medida para negócios e projetos digitais.',
    descriptionSimple:
      'Venda online! Sistema completo para você gerenciar produtos, clientes e vendas.',
    features: [
      'Frontend com Next.js + Tailwind',
      'Backend com NestJS ou Node.js',
      'Banco de dados relacional ou NoSQL',
      'Autenticação, CRUDs e integrações básicas',
    ],
    featuresSimple: [
      'Catálogo de produtos organizado',
      'Sistema de pagamentos',
      'Painel para gerenciar vendas',
      'Integração com WhatsApp',
    ],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Painéis e Dashboards',
    titleSimple: 'Site que Vende',
    description: 'Interfaces administrativas para gestão de dados, clientes, serviços e conteúdos.',
    descriptionSimple:
      'Páginas criadas especialmente para converter visitantes em clientes e aumentar suas vendas.',
    features: [
      'Visual moderno e intuitivo',
      'Filtros, gráficos e tabelas',
      'Integração com bancos de dados',
      'Permissões por tipo de usuário',
    ],
    featuresSimple: [
      'Foco total em conversão',
      'Texto persuasivo e atrativo',
      'Botões que chamam ação',
      'Otimizado para aparecer no Google',
    ],
  },
  {
    icon: 'Rocket',
    title: 'Protótipos e MVPs para Startups',
    titleSimple: 'Transformação Digital',
    description:
      'Desenvolvimento ágil de protótipos e produtos mínimos viáveis para validar ideias e captar investimento.',
    descriptionSimple:
      'Tire sua ideia do papel! Crio protótipos funcionais para você testar e validar seu projeto.',
    features: [
      'Criação rápida de interfaces funcionais',
      'Backend com autenticação e banco de dados',
      'Deploy completo com domínio e versão pública',
      'Preparado para evoluir conforme o crescimento',
    ],
    featuresSimple: [
      'Do conceito ao site funcionando',
      'Versão para testar com clientes',
      'Tudo online e acessível',
      'Preparado para crescer junto com você',
    ],
  },
  {
    icon: 'Wrench',
    title: 'Aprimoramento e Refatoração de Códigos',
    titleSimple: 'Melhorias no Seu Site',
    description:
      'Melhorias em sistemas existentes com foco em organização, performance e escalabilidade.',
    descriptionSimple:
      'Já tem um site? Vou deixá-lo mais bonito, rápido e funcional para atrair mais clientes.',
    features: [
      'Refatoração de componentes',
      'Melhoria de estrutura e layout',
      'Correção de bugs',
      'Atualização para boas práticas modernas',
    ],
    featuresSimple: [
      'Visual mais moderno',
      'Carregamento mais rápido',
      'Correção de problemas',
      'Funcionalidades novas',
    ],
  },
  {
    icon: 'UploadCloud',
    title: 'Publicação e Deploy de Projetos',
    titleSimple: 'Colocamos no Ar',
    description: 'Coloco seu projeto no ar com domínio personalizado e performance otimizada.',
    descriptionSimple:
      'Cuido de todos os detalhes técnicos para seu site ficar online com domínio profissional.',
    features: [
      'Deploy em Vercel, Render ou outros',
      'Configuração de domínio e HTTPS',
      'Builds otimizadas',
      'Atualizações e manutenção básica',
    ],
    featuresSimple: [
      'Seu site online em poucos dias',
      'Domínio personalizado (suaempresa.com.br)',
      'Certificado de segurança',
      'Suporte sempre que precisar',
    ],
  },
];
