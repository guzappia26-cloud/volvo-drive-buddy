import { cn } from '@/lib/utils';
import { Lead } from '@/data/gestaoComercialMockData';
import { LeadCard } from './LeadCard';

interface KanbanColumnProps {
  etapa: string;
  label: string;
  leads: Lead[];
  color: string;
}

export function KanbanColumn({ etapa, label, leads, color }: KanbanColumnProps) {
  const totalValue = leads.reduce((acc, lead) => acc + lead.valorEstimado, 0);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="flex flex-col min-w-[280px] max-w-[320px]">
      {/* Column Header */}
      <div className={cn(
        'rounded-t-xl p-3 border border-b-0',
        color
      )}>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            {label}
          </h3>
          <span className={cn(
            'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
            'bg-background/50 text-foreground'
          )}>
            {leads.length}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {formatCurrency(totalValue)}
        </p>
      </div>

      {/* Column Content */}
      <div className={cn(
        'flex-1 p-2 space-y-2 rounded-b-xl border border-t-0 min-h-[200px]',
        'bg-muted/20 border-border/50'
      )}>
        {leads.length === 0 ? (
          <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
            Nenhum lead
          </div>
        ) : (
          leads.map((lead, index) => (
            <LeadCard key={lead.id} lead={lead} index={index} />
          ))
        )}
      </div>
    </div>
  );
}
