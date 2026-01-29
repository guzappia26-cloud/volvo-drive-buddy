import { motion } from 'framer-motion';
import { Lead } from '@/data/gestaoComercialMockData';
import { KanbanColumn } from './KanbanColumn';

interface KanbanBoardProps {
  leads: Lead[];
}

const ETAPAS = [
  { id: 'lead', label: 'Lead', color: 'bg-slate-500/20 border-slate-500/30' },
  { id: 'contato', label: 'Contato', color: 'bg-blue-500/20 border-blue-500/30' },
  { id: 'test-drive', label: 'Test-Drive', color: 'bg-purple-500/20 border-purple-500/30' },
  { id: 'proposta', label: 'Proposta', color: 'bg-amber-500/20 border-amber-500/30' },
  { id: 'negociacao', label: 'Negociação', color: 'bg-orange-500/20 border-orange-500/30' },
  { id: 'fechado', label: 'Fechado', color: 'bg-emerald-500/20 border-emerald-500/30' },
];

export function KanbanBoard({ leads }: KanbanBoardProps) {
  const getLeadsByEtapa = (etapa: string) => {
    return leads.filter(lead => lead.etapa === etapa);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-auto pb-4"
    >
      <div className="flex gap-4 min-w-max">
        {ETAPAS.map((etapa, index) => (
          <motion.div
            key={etapa.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <KanbanColumn
              etapa={etapa.id}
              label={etapa.label}
              leads={getLeadsByEtapa(etapa.id)}
              color={etapa.color}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
