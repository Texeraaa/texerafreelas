import portfolioCybercode from '@/assets/cybercode.png';
import portfolioHzc from '@/assets/HZC.png';
import { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  description: string;
  descriptionSimple?: string;
  image: StaticImageData;
  technologies: string[];
  technologiesSimple?: string[];
  liveUrl: string;
  githubUrl?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    title: 'CyberCode',
    description:
      'Projeto educacional interativo para ensinar estrutura de dados e programação em C++ a iniciantes, com aulas por tema (structs, arrays, pilhas, filas, listas encadeadas, mapas), demonstrações visuais e um mini-game de batalha de hordas em C++; inclui layout responsivo, navegação e vídeo-aulas próprias.',
    descriptionSimple:
      'Site educativo interativo para ensinar programação de forma visual e divertida. Inclui aulas organizadas por temas, demonstrações práticas e até um mini-game! Perfeito para quem quer aprender programação de forma fácil.',
    image: portfolioCybercode,
    technologies: ['React', 'Tailwind CSS', 'shadcn/ui', 'C++'],
    technologiesSimple: ['Site Moderno', 'Design Responsivo', 'Interativo'],
    liveUrl: 'https://cybercode-sable.vercel.app/',
    githubUrl: 'https://github.com/Texeraaa/cybercode.front',
    category: 'Site Educativo',
  },
  {
    title: 'HZC — Landing Page',
    description:
      'Landing page responsiva para uma loja fictícia de skates, focada em conversão: hero com promoções, vitrine de decks/rodas/shape do mês, CTAs para WhatsApp e "Comprar agora", depoimentos, FAQ, captação de e-mail (newsletter) e feed do Instagram; SEO/OG otimizados, performance A+ e animações suaves.',
    descriptionSimple:
      'Landing page completa para loja de skates com foco em vendas: vitrine atrativa, promoções em destaque, depoimentos de clientes, FAQ e integração com WhatsApp. Design que converte visitantes em clientes!',
    image: portfolioHzc,
    technologies: ['Tailwind CSS', 'Framer Motion', 'Vercel'],
    technologiesSimple: ['Landing Page', 'Foco em Vendas', 'WhatsApp'],
    liveUrl: 'https://hzc-skateboard.vercel.app/index.html',
    githubUrl: '#',
    category: 'E-commerce',
  },
];
