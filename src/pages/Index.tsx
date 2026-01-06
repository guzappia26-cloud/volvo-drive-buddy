import { GitCompare, Settings2, FileSpreadsheet, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppHeader } from '@/components/layout/AppHeader';
import { QuadrantCard } from '@/components/home/QuadrantCard';
import { VolvoLogo } from '@/components/ui/VolvoLogo';
import heroBackground from '@/assets/volvo-hero-bg.jpg';
const features = [{
  title: 'Comparativo',
  description: 'Compare modelos Volvo com concorrentes e veja as vantagens',
  icon: GitCompare,
  to: '/comparativo',
  gradient: 'linear-gradient(135deg, hsl(210, 100%, 18%) 0%, hsl(200, 85%, 35%) 100%)'
}, {
  title: 'Dados Técnicos',
  description: 'Fichas técnicas e especificações de todos os modelos',
  icon: FileSpreadsheet,
  to: '/dados-tecnicos',
  gradient: 'linear-gradient(135deg, hsl(152, 60%, 30%) 0%, hsl(170, 50%, 40%) 100%)'
}, {
  title: 'Volvo Home Charge',
  description: 'Calculadora de vantagens do carro elétrico',
  icon: Zap,
  to: '/home-charge',
  gradient: 'linear-gradient(135deg, hsl(38, 80%, 45%) 0%, hsl(45, 70%, 50%) 100%)'
}];
const Index = () => {
  return <div className="min-h-screen bg-background">
      <AppHeader />
      
      {/* Hero Section */}
      <motion.section className="relative overflow-hidden" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroBackground})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        
        <div className="relative container px-4 py-12 md:py-16">
          <motion.div className="flex flex-col items-center text-center" initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2
        }}>
            <VolvoLogo size="lg" className="text-primary-foreground mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Dealer App</h1>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Quadrant Navigation */}
      <section className="container px-4 py-8 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => <QuadrantCard key={feature.title} {...feature} delay={0.1 * (index + 1)} />)}
        </div>
      </section>

      {/* Footer */}
      <footer className="container px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Volvo Car Brasil • Uso interno
        </p>
      </footer>
    </div>;
};
export default Index;