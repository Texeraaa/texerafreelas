'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import HeaderSimple from './HeaderSimple';

export default function DynamicHeader() {
  const pathname = usePathname();

  // Se estiver na página profissional, mostra o header técnico
  if (pathname === '/professional') {
    return <Header />;
  }

  // Para todas as outras páginas (incluindo home), mostra o header simplificado
  return <HeaderSimple />;
}
