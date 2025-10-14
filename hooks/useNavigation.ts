import { useState, useCallback } from 'react';
import { useScrollToSection } from './useScrollToSection';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavigation = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId);
      setIsMenuOpen(false);
    },
    [scrollToSection]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return {
    isMenuOpen,
    handleNavigation,
    toggleMenu,
    closeMenu,
  };
};
