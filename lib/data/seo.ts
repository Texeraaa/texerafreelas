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
        url: 'https://pedroteixeira.vercel.app/',
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
        url: 'https://pedroteixeira.vercel.app/',
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
    title: 'Pedro Teixeira - Desenvolvedor Full-Stack | Disponível para Contratação',
    description:
      'Desenvolvedor Full-Stack com 2+ anos de experiência em React, Node.js e TypeScript. Buscando novas oportunidades CLT/PJ. Disponível para trabalho remoto, híbrido ou presencial em São Paulo.',
    keywords: [
      'desenvolvedor full-stack vaga',
      'react developer contratação',
      'nodejs developer disponível',
      'typescript developer',
      'desenvolvedor front-end',
      'desenvolvedor back-end',
      'vaga desenvolvedor',
      'contratação desenvolvedor',
      'developer jobs',
      'trabalho remoto desenvolvedor',
      'desenvolvedor são paulo',
    ],
    openGraph: {
      title: 'Pedro Teixeira - Desenvolvedor Full-Stack Disponível',
      description:
        'Desenvolvedor com 2+ anos de experiência. React, Node.js, TypeScript. Disponível para CLT/PJ.',
      image: '/og-image-portfolio.jpg',
      url: 'https://pedroteixeira.vercel.app/professional',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pedro Teixeira - Desenvolvedor Full-Stack',
      description:
        '2+ anos de experiência | React, Node.js, TypeScript | Disponível para contratação',
      image: '/og-image-portfolio.jpg',
    },
    canonical: 'https://pedroteixeira.vercel.app/professional',
  },
};

// Schema.org structured data
export const schemaData = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pedro Henrique Teixeira',
    jobTitle: 'Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor especializado em React, Node.js e tecnologias web modernas. Disponível para contratação CLT/PJ.',
    url: 'https://pedroteixeira.vercel.app',
    image: 'https://pedroteixeira.vercel.app/profile-image.jpg',
    sameAs: [
      'https://github.com/Texeraaa',
      'https://x.com/texeradev',
      'https://www.linkedin.com/in/pedrohteixeira17/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Disponível para Contratação',
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
      'Desenvolvimento Full-Stack',
      'Frontend Development',
      'Backend Development',
    ],
    seeks: {
      '@type': 'JobPosting',
      title: 'Desenvolvedor Full-Stack',
      description: 'Buscando oportunidades como desenvolvedor full-stack em empresas inovadoras',
      employmentType: ['FULL_TIME', 'CONTRACTOR'],
      jobLocationType: ['TELECOMMUTE', 'HYBRID'],
    },
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pedro Teixeira - Desenvolvedor Web',
    url: 'https://pedroteixeira.vercel.app/',
    description: 'Portfolio e serviços de desenvolvimento web profissional',
    author: {
      '@type': 'Person',
      name: 'Pedro Henrique Teixeira',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pedroteixeira.vercel.app/search?q={search_term_string}',
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
