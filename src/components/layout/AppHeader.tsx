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

  return (
    <motion.header
      className="sticky top-0 z-50 glass border-b border-border/30"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {showBack && !isHome && (
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
          )}
          {isHome && (
            <span className="text-lg font-semibold text-foreground">Dealer App</span>
          )}
        </div>
        
        {title && (
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-foreground">
            {title}
          </h1>
        )}
        
        <div className="w-20" /> {/* Spacer for centering */}
      </div>
    </motion.header>
  );
}
