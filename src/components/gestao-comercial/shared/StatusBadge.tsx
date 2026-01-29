import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
  variant?: 'etapa' | 'status' | 'prioridade' | 'orcamento';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, variant = 'status', size = 'sm' }: StatusBadgeProps) {
  const getStyles = () => {
    if (variant === 'etapa') {
      const etapaStyles: Record<string, string> = {
        lead: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
        contato: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        'test-drive': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        proposta: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        negociacao: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
        fechado: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        perdido: 'bg-red-500/20 text-red-400 border-red-500/30',
      };
      return etapaStyles[status] || 'bg-muted text-muted-foreground';
    }

    if (variant === 'status') {
      const statusStyles: Record<string, string> = {
        ativo: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        frio: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        fechado: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        perdido: 'bg-red-500/20 text-red-400 border-red-500/30',
      };
      return statusStyles[status] || 'bg-muted text-muted-foreground';
    }

    if (variant === 'prioridade') {
      const prioridadeStyles: Record<string, string> = {
        alta: 'bg-red-500/20 text-red-400 border-red-500/30',
        media: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        baixa: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
      };
      return prioridadeStyles[status] || 'bg-muted text-muted-foreground';
    }

    if (variant === 'orcamento') {
      const orcamentoStyles: Record<string, string> = {
        enviado: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        revisado: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
        aprovado: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        perdido: 'bg-red-500/20 text-red-400 border-red-500/30',
      };
      return orcamentoStyles[status] || 'bg-muted text-muted-foreground';
    }

    return 'bg-muted text-muted-foreground';
  };

  const getLabel = () => {
    const labels: Record<string, string> = {
      'test-drive': 'Test-Drive',
      ativo: 'Ativo',
      frio: 'Frio',
      fechado: 'Fechado',
      perdido: 'Perdido',
      alta: 'Alta',
      media: 'Média',
      baixa: 'Baixa',
      enviado: 'Enviado',
      revisado: 'Revisado',
      aprovado: 'Aprovado',
    };
    return labels[status] || status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs',
        getStyles()
      )}
    >
      {getLabel()}
    </span>
  );
}
