import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, List, ArrowRight } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { KPICards } from '@/components/gestao-comercial/dashboard/KPICards';
import { SalesFunnel } from '@/components/gestao-comercial/dashboard/SalesFunnel';
import { UrgentActions } from '@/components/gestao-comercial/dashboard/UrgentActions';
import { KanbanBoard } from '@/components/gestao-comercial/pipeline/KanbanBoard';
import { mockLeads, getKPIs, getFunnelData, getAcoesUrgentes } from '@/data/gestaoComercialMockData';
import { cn } from '@/lib/utils';

type ViewMode = 'dashboard' | 'pipeline';

export default function GestaoComercialPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const kpis = getKPIs();
  const funnelData = getFunnelData();
  const acoesUrgentes = getAcoesUrgentes();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Gestão Comercial" />
      
      <div className="container px-4 py-6">
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">
            {viewMode === 'dashboard' ? 'Dashboard' : 'Pipeline de Vendas'}
          </h2>
          
          <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/50">
            <button
              onClick={() => setViewMode('dashboard')}
              className={cn(
                'p-2 rounded-md transition-all',
                viewMode === 'dashboard' 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('pipeline')}
              className={cn(
                'p-2 rounded-md transition-all',
                viewMode === 'pipeline' 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {viewMode === 'dashboard' ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            {/* KPIs */}
            <KPICards
              leadsAtivos={kpis.leadsAtivos}
              orcamentosAbertos={kpis.orcamentosAbertos}
              testDrivesPendentes={kpis.testDrivesPendentes}
              vendasFechadas={kpis.vendasFechadas}
              progressoMeta={kpis.progressoMeta}
            />

            {/* Funnel & Urgent Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <SalesFunnel 
                data={funnelData} 
                onStageClick={() => setViewMode('pipeline')} 
              />
              <UrgentActions tarefas={acoesUrgentes} />
            </div>

            {/* Quick Access to Pipeline */}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setViewMode('pipeline');
              }}
              className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">Ver Pipeline Completo</h3>
                <p className="text-xs text-muted-foreground">Visualize todos os leads organizados por etapa</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="pipeline"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <KanbanBoard leads={mockLeads.filter(l => l.etapa !== 'perdido')} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
