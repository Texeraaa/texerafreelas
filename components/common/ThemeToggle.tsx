import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import ClientOnly from './ClientOnly';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ClientOnly
      fallback={
        <Button variant="outline" size="sm" className="glass-card border-white/20" disabled>
          <Sun className="h-4 w-4" />
        </Button>
      }
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="glass-card border-white/20"
      >
        {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
    </ClientOnly>
  );
};

export default ThemeToggle;
