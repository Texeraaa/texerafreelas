'use client';

import { usePathname } from 'next/navigation';
import HeaderProfessional from './HeaderProfessional';
import HeaderSimple from './HeaderSimple';

export default function DynamicHeader() {
  const pathname = usePathname();

  // Se estiver na página profissional, mostra o header corporativo
  if (pathname === '/professional') {
    return <HeaderProfessional />;
  }

  // Para todas as outras páginas (incluindo home), mostra o header simplificado
  return <HeaderSimple />;
}
