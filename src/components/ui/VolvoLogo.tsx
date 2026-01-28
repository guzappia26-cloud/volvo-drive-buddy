import { motion } from 'framer-motion';
import volvoWordmark from '@/assets/volvo-wordmark.svg';

interface VolvoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  inverted?: boolean;
}

export function VolvoLogo({
  className = '',
  size = 'md',
  inverted = false
}: VolvoLogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
  };

  return (
    <motion.img
      src={volvoWordmark}
      alt="Volvo Cars"
      className={`${sizeClasses[size]} ${inverted ? 'invert' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
