import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { StatusBadge } from '../shared/StatusBadge';
import { Lead } from '@/data/gestaoComercialMockData';

interface LeadCardProps {
  lead: Lead;
  index?: number;
}

export function LeadCard({ lead, index = 0 }: LeadCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Link
        to={`/gestao-comercial/cliente/${lead.id}`}
        className={cn(
          'block rounded-xl border border-border/50 bg-card p-4 transition-all',
          'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
          'active:scale-[0.98]'
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-foreground truncate">
              {lead.nome}
            </h4>
            <p className="text-xs text-muted-foreground truncate">
              {lead.modelo}
            </p>
          </div>
          <StatusBadge status={lead.status} variant="status" />
        </div>

        {/* Value */}
        <div className="mb-3">
          <span className="text-lg font-bold text-foreground">
            {formatCurrency(lead.valorEstimado)}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Última: {formatDate(lead.ultimaInteracao)}</span>
          <span className="text-primary font-medium truncate max-w-[50%]">
            {lead.proximaAcao}
          </span>
        </div>

        {/* Probability indicator */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-muted-foreground">Probabilidade</span>
            <span className={cn(
              'font-medium',
              lead.probabilidade >= 70 ? 'text-emerald-400' :
              lead.probabilidade >= 40 ? 'text-amber-400' : 'text-muted-foreground'
            )}>
              {lead.probabilidade}%
            </span>
          </div>
          <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all',
                lead.probabilidade >= 70 ? 'bg-emerald-500' :
                lead.probabilidade >= 40 ? 'bg-amber-500' : 'bg-muted-foreground'
              )}
              style={{ width: `${lead.probabilidade}%` }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
