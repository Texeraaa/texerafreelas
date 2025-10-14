'use client';

import { Download, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import ThemeToggle from '../common/ThemeToggle';
import Link from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';
import { navigation, personalInfo } from '@/lib/data/constants';

export default function Header() {
  const { isMenuOpen, handleNavigation, toggleMenu } = useNavigation();

  return (
    <header className="fixed top-0 w-full glass-header z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href={personalInfo.cvPath} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button size="sm">
              <Link href="#contact">Contratar Agora</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
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
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-3">
                <div className="flex justify-center pb-2">
                  <ThemeToggle />
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.cvPath} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button size="sm">Contratar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
