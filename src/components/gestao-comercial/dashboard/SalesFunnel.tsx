import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FunnelStage {
  etapa: string;
  label: string;
  count: number;
  valor: number;
}

interface SalesFunnelProps {
  data: FunnelStage[];
  onStageClick?: (etapa: string) => void;
}

export function SalesFunnel({ data, onStageClick }: SalesFunnelProps) {
  const maxCount = Math.max(...data.map(d => d.count), 1);

  const getStageColor = (etapa: string) => {
    const colors: Record<string, { bg: string; bar: string; text: string }> = {
      lead: { bg: 'bg-slate-500/10', bar: 'bg-slate-500', text: 'text-slate-400' },
      contato: { bg: 'bg-blue-500/10', bar: 'bg-blue-500', text: 'text-blue-400' },
      'test-drive': { bg: 'bg-purple-500/10', bar: 'bg-purple-500', text: 'text-purple-400' },
      proposta: { bg: 'bg-amber-500/10', bar: 'bg-amber-500', text: 'text-amber-400' },
      negociacao: { bg: 'bg-orange-500/10', bar: 'bg-orange-500', text: 'text-orange-400' },
      fechado: { bg: 'bg-emerald-500/10', bar: 'bg-emerald-500', text: 'text-emerald-400' },
    };
    return colors[etapa] || { bg: 'bg-muted', bar: 'bg-muted-foreground', text: 'text-muted-foreground' };
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="rounded-xl border border-border/50 bg-card p-4">
      <h3 className="text-sm font-medium text-foreground mb-4">Funil de Vendas</h3>
      
      <div className="space-y-2">
        {data.map((stage, index) => {
          const colors = getStageColor(stage.etapa);
          const percentage = (stage.count / maxCount) * 100;
          
          return (
            <motion.button
              key={stage.etapa}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onStageClick?.(stage.etapa)}
              className={cn(
                'w-full rounded-lg p-3 text-left transition-all',
                'hover:bg-accent/50 active:scale-[0.99]',
                colors.bg
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn('text-xs font-medium', colors.text)}>
                  {stage.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {formatCurrency(stage.valor)}
                  </span>
                  <span className={cn('text-sm font-bold', colors.text)}>
                    {stage.count}
                  </span>
                </div>
              </div>
              
              <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                  className={cn('h-full rounded-full', colors.bar)}
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
