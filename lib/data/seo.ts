export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  canonical?: string;
}

export const seoData = {
  home: {
    simple: {
      title: 'Pedro Teixeira - Criador de Sites e Apps | Desenvolvimento Web',
      description:
        'Crio sites profissionais que fazem seu negócio crescer. Sites modernos, rápidos e que vendem. Transforme sua ideia em realidade digital.',
      keywords: [
        'criação de sites',
        'desenvolvimento web',
        'sites profissionais',
        'landing pages',
        'loja virtual',
        'sites que vendem',
        'desenvolvedor web',
        'sites responsivos',
        'presença digital',
      ],
      openGraph: {
        title: 'Pedro Teixeira - Criador de Sites Profissionais',
        description:
          'Transformo sua ideia em um site moderno e funcional. Sites que vendem, impressionam e fazem você se destacar.',
        image: '/og-image-simple.jpg',
        url: 'https://pedroteixeira.dev',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Pedro Teixeira - Criador de Sites Profissionais',
        description: 'Sites que vendem, impressionam e fazem você se destacar da concorrência.',
        image: '/og-image-simple.jpg',
      },
    },
    technical: {
      title: 'Pedro Teixeira - Desenvolvedor Full-Stack | React, Node.js, TypeScript',
      description:
        'Desenvolvedor Full-Stack especializado em React, Node.js e tecnologias modernas. Desenvolvimento de aplicações web escaláveis e performáticas.',
      keywords: [
        'desenvolvedor full-stack',
        'react developer',
        'nodejs developer',
        'typescript',
        'next.js',
        'desenvolvimento web',
        'aplicações web',
        'frontend',
        'backend',
        'freelancer',
      ],
      openGraph: {
        title: 'Pedro Teixeira - Desenvolvedor Full-Stack',
        description:
          'Especializado em React, Node.js e tecnologias modernas. Soluções completas do frontend ao backend.',
        image: '/og-image-technical.jpg',
        url: 'https://pedroteixeira.dev',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Pedro Teixeira - Desenvolvedor Full-Stack',
        description: 'React, Node.js e tecnologias modernas. Soluções completas para seu projeto.',
        image: '/og-image-technical.jpg',
      },
    },
  },
  professional: {
    title: 'Pedro Teixeira - Portfolio Técnico | Desenvolvedor Full-Stack',
    description:
      'Portfolio técnico completo com projetos em React, Node.js, TypeScript. Experiência em desenvolvimento de aplicações web escaláveis.',
    keywords: [
      'portfolio desenvolvedor',
      'projetos react',
      'desenvolvedor senior',
      'typescript projects',
      'full-stack portfolio',
      'web development',
      'software engineer',
    ],
    openGraph: {
      title: 'Pedro Teixeira - Portfolio Técnico',
      description: 'Portfolio completo com projetos em React, Node.js, TypeScript e mais.',
      image: '/og-image-portfolio.jpg',
      url: 'https://pedroteixeira.dev/professional',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pedro Teixeira - Portfolio Técnico',
      description: 'Projetos em React, Node.js, TypeScript e tecnologias modernas.',
      image: '/og-image-portfolio.jpg',
    },
    canonical: 'https://pedroteixeira.dev/professional',
  },
};

// Schema.org structured data
export const schemaData = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pedro Henrique Teixeira',
    jobTitle: 'Desenvolvedor Full-Stack',
    description: 'Desenvolvedor especializado em React, Node.js e tecnologias web modernas',
    url: 'https://pedroteixeira.dev',
    image: 'https://pedroteixeira.dev/profile-image.jpg',
    sameAs: [
      'https://github.com/Texeraaa',
      'https://linkedin.com/in/pedro-teixeira',
      'https://twitter.com/pedroteixeira',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
    knowsAbout: [
      'React',
      'Node.js',
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
    ],
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pedro Teixeira - Desenvolvedor Web',
    url: 'https://pedroteixeira.dev',
    description: 'Portfolio e serviços de desenvolvimento web profissional',
    author: {
      '@type': 'Person',
      name: 'Pedro Henrique Teixeira',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pedroteixeira.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desenvolvimento de Sites e Aplicações Web',
    description: 'Serviços profissionais de desenvolvimento web, criação de sites e aplicações',
    provider: {
      '@type': 'Person',
      name: 'Pedro Henrique Teixeira',
    },
    areaServed: 'Brasil',
    serviceType: 'Desenvolvimento Web',
    offers: {
      '@type': 'Offer',
      description: 'Desenvolvimento completo de sites e aplicações web',
    },
  },
};
