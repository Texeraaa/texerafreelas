'use client';

import { Download, Menu, X, Mail, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import ThemeToggle from '../common/ThemeToggle';
import { useNavigation } from '@/hooks/useNavigation';
import { navigation, personalInfo } from '@/lib/data/constants';
import Link from 'next/link';

export default function HeaderProfessional() {
  const { isMenuOpen, handleNavigation, toggleMenu } = useNavigation();

  return (
    <header className="fixed top-0 w-full glass-header z-40 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleNavigation('home')}
              className="text-base md:text-lg lg:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Pedro H. Teixeira
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 mx-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href={personalInfo.cvPath} download className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden xl:inline">Currículo</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="shadow-sm whitespace-nowrap"
              onClick={() => handleNavigation('contact')}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contato
            </Button>
          </div>

          {/* Tablet Actions (simplified) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href={personalInfo.cvPath} download>
                <FileText className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" className="shadow-sm" onClick={() => handleNavigation('contact')}>
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 animate-fade-in-up">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Versão Simplificada
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={personalInfo.cvPath} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Currículo
                  </a>
                </Button>
                <Button size="sm" className="w-full" onClick={() => handleNavigation('contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Solicitar Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
