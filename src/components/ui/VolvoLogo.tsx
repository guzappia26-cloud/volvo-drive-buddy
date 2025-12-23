import { motion } from 'framer-motion';

interface VolvoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function VolvoLogo({ className = '', size = 'md' }: VolvoLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
        {/* Volvo Iron Mark - Circle with Arrow */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
        <path
          d="M50 5 L50 25 M40 15 L50 5 L60 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
