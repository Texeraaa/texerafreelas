'use client';

import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function HeaderSimple() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];
  return (
    <header className="fixed top-0 w-full glass-header z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Pedro H. Teixeira
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm">
              <Link href="#contact">Quero Meu Site</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-3">
                <div className="flex justify-center pb-2">
                  <ThemeToggle />
                </div>
                <Button size="sm">Quero Meu Site</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
