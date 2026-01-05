import { motion } from 'framer-motion';
interface VolvoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function VolvoLogo({
  className = '',
  size = 'md'
}: VolvoLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  return <motion.div className={`${sizeClasses[size]} ${className}`} initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.3
  }}>
      
    </motion.div>;
}