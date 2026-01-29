import { motion } from 'framer-motion';
import { Users, FileText, Car, Trophy, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPI {
  label: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
  suffix?: string;
  onClick?: () => void;
}

interface KPICardsProps {
  leadsAtivos: number;
  orcamentosAbertos: number;
  testDrivesPendentes: number;
  vendasFechadas: number;
  progressoMeta: number;
  onKPIClick?: (kpi: string) => void;
}

export function KPICards({
  leadsAtivos,
  orcamentosAbertos,
  testDrivesPendentes,
  vendasFechadas,
  progressoMeta,
  onKPIClick
}: KPICardsProps) {
  const kpis: KPI[] = [
    {
      label: 'Leads Ativos',
      value: leadsAtivos,
      icon: Users,
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
      onClick: () => onKPIClick?.('leads')
    },
    {
      label: 'Orçamentos',
      value: orcamentosAbertos,
      icon: FileText,
      color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
      onClick: () => onKPIClick?.('orcamentos')
    },
    {
      label: 'Test-Drives',
      value: testDrivesPendentes,
      icon: Car,
      color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
      onClick: () => onKPIClick?.('test-drives')
    },
    {
      label: 'Vendas',
      value: vendasFechadas,
      icon: Trophy,
      color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
      onClick: () => onKPIClick?.('vendas')
    },
    {
      label: 'Meta',
      value: progressoMeta,
      suffix: '%',
      icon: Target,
      color: progressoMeta >= 80 
        ? 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30'
        : progressoMeta >= 50
        ? 'from-amber-500/20 to-amber-600/10 border-amber-500/30'
        : 'from-red-500/20 to-red-600/10 border-red-500/30',
      onClick: () => onKPIClick?.('meta')
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {kpis.map((kpi, index) => (
        <motion.button
          key={kpi.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={kpi.onClick}
          className={cn(
            'relative overflow-hidden rounded-xl border p-4 text-left transition-all',
            'bg-gradient-to-br hover:scale-[1.02] active:scale-[0.98]',
            kpi.color
          )}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
              <p className="text-2xl font-bold text-foreground">
                {kpi.value}{kpi.suffix}
              </p>
            </div>
            <kpi.icon className="w-5 h-5 text-muted-foreground" />
          </div>
        </motion.button>
      ))}
    </div>
  );
}
