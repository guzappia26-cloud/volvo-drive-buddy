import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { VolvoLogo } from '@/components/ui/VolvoLogo';

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
}

export function AppHeader({ title, showBack = false }: AppHeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Header simplificado para a home
  if (isHome) {
    return null; // Não renderiza header na home, pois o hero já tem o branding
  }

  // Header para páginas internas
  return (
    <motion.header
      className="sticky top-0 z-50 glass border-b border-border/30"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-center px-4 relative">
        {showBack && (
          <Link
            to="/"
            className="absolute left-4 flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
        )}
        
        <div className="flex flex-col items-center">
          <VolvoLogo size="sm" />
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase mt-1">
            {title || 'Dealer App'}
          </span>
        </div>
      </div>
    </motion.header>
  );
}
