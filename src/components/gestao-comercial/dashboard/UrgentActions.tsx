import { motion } from 'framer-motion';
import { AlertCircle, Clock, Phone, FileText, Car } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tarefa, mockLeads } from '@/data/gestaoComercialMockData';

interface UrgentActionsProps {
  tarefas: Tarefa[];
  onTaskClick?: (tarefa: Tarefa) => void;
}

export function UrgentActions({ tarefas, onTaskClick }: UrgentActionsProps) {
  const getTaskIcon = (tipo: string) => {
    const icons: Record<string, React.ElementType> = {
      'follow-up': Phone,
      proposta: FileText,
      'test-drive': Car,
      entrega: Car,
    };
    return icons[tipo] || Clock;
  };

  const getClienteName = (leadId: string) => {
    const lead = mockLeads.find(l => l.id === leadId);
    return lead?.nome || 'Cliente';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const diffDays = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return `${Math.abs(diffDays)} dia${Math.abs(diffDays) > 1 ? 's' : ''} atrás`;
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Amanhã';
    return `Em ${diffDays} dias`;
  };

  if (tarefas.length === 0) {
    return (
      <div className="rounded-xl border border-border/50 bg-card p-4">
        <h3 className="text-sm font-medium text-foreground mb-4">Ações Urgentes</h3>
        <div className="text-center py-6 text-muted-foreground text-sm">
          Nenhuma ação urgente pendente 🎉
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-medium text-foreground">Ações Urgentes</h3>
        <span className="ml-auto text-xs text-muted-foreground">{tarefas.length} pendentes</span>
      </div>
      
      <div className="space-y-2">
        {tarefas.slice(0, 5).map((tarefa, index) => {
          const Icon = getTaskIcon(tarefa.tipo);
          const isOverdue = tarefa.status === 'atrasada';
          
          return (
            <motion.button
              key={tarefa.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onTaskClick?.(tarefa)}
              className={cn(
                'w-full flex items-center gap-3 rounded-lg p-3 text-left transition-all',
                'hover:bg-accent/50 active:scale-[0.99]',
                isOverdue ? 'bg-red-500/10 border border-red-500/20' : 'bg-muted/30'
              )}
            >
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                isOverdue ? 'bg-red-500/20' : 'bg-primary/10'
              )}>
                <Icon className={cn(
                  'w-4 h-4',
                  isOverdue ? 'text-red-400' : 'text-primary'
                )} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={cn(
                  'text-sm font-medium truncate',
                  isOverdue ? 'text-red-400' : 'text-foreground'
                )}>
                  {getClienteName(tarefa.leadId)}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {tarefa.descricao}
                </p>
              </div>
              
              <span className={cn(
                'text-[10px] font-medium shrink-0',
                isOverdue ? 'text-red-400' : 'text-muted-foreground'
              )}>
                {formatDate(tarefa.data)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
