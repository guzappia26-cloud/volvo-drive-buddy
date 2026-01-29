import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageCircle, MapPin, Mail, Calendar, TrendingUp } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { StatusBadge } from '@/components/gestao-comercial/shared/StatusBadge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockLeads, mockInteracoes, mockOrcamentos, mockTestDrives } from '@/data/gestaoComercialMockData';
import { cn } from '@/lib/utils';

export default function ClienteDetalhePage() {
  const { id } = useParams();
  const cliente = mockLeads.find(l => l.id === id);
  
  if (!cliente) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader title="Cliente não encontrado" />
        <div className="container px-4 py-8 text-center">
          <p className="text-muted-foreground">Cliente não encontrado</p>
          <Link to="/gestao-comercial" className="text-primary mt-4 inline-block">
            Voltar ao dashboard
          </Link>
        </div>
      </div>
    );
  }

  const interacoes = mockInteracoes.filter(i => i.leadId === id);
  const orcamentos = mockOrcamentos.filter(o => o.leadId === id);
  const testDrives = mockTestDrives.filter(t => t.leadId === id);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Detalhe do Cliente" />
      
      <div className="container px-4 py-6">
        {/* Cliente Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border/50 bg-card p-4 mb-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-foreground">{cliente.nome}</h1>
              <p className="text-sm text-muted-foreground">{cliente.email}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <StatusBadge status={cliente.etapa} variant="etapa" size="md" />
              <StatusBadge status={cliente.status} variant="status" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]">
              <Phone className="w-4 h-4" />
              Ligar
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98]">
              <MapPin className="w-4 h-4" />
              Visita
            </button>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground mb-1">Modelo de Interesse</p>
              <p className="text-sm font-semibold text-foreground">{cliente.modelo}</p>
            </div>
            <div className="rounded-lg bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground mb-1">Valor Estimado</p>
              <p className="text-sm font-semibold text-foreground">{formatCurrency(cliente.valorEstimado)}</p>
            </div>
            <div className="rounded-lg bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground mb-1">Probabilidade</p>
              <div className="flex items-center gap-2">
                <TrendingUp className={cn(
                  'w-4 h-4',
                  cliente.probabilidade >= 70 ? 'text-emerald-400' :
                  cliente.probabilidade >= 40 ? 'text-amber-400' : 'text-muted-foreground'
                )} />
                <p className="text-sm font-semibold text-foreground">{cliente.probabilidade}%</p>
              </div>
            </div>
            <div className="rounded-lg bg-muted/30 p-3">
              <p className="text-xs text-muted-foreground mb-1">Previsão de Decisão</p>
              <p className="text-sm font-semibold text-foreground">{formatDate(cliente.dataPrevisaoDecisao)}</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="resumo" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-4">
            <TabsTrigger value="resumo" className="text-xs">Resumo</TabsTrigger>
            <TabsTrigger value="interacoes" className="text-xs">Interações</TabsTrigger>
            <TabsTrigger value="orcamentos" className="text-xs">Orçamentos</TabsTrigger>
            <TabsTrigger value="testdrive" className="text-xs">Test-Drive</TabsTrigger>
          </TabsList>

          <TabsContent value="resumo">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="rounded-xl border border-border/50 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Próxima Ação</h3>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{cliente.proximaAcao}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(cliente.dataProximaAcao)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Informações</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{cliente.telefone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{cliente.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Origem: {cliente.origem}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="interacoes">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {interacoes.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Nenhuma interação registrada
                </div>
              ) : (
                interacoes.map((int, index) => (
                  <div key={int.id} className="rounded-xl border border-border/50 bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <StatusBadge status={int.tipo} variant="etapa" />
                      <span className="text-xs text-muted-foreground">{formatDate(int.data)}</span>
                    </div>
                    <p className="text-sm text-foreground">{int.descricao}</p>
                  </div>
                ))
              )}
              
              <button className="w-full py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                + Registrar nova interação
              </button>
            </motion.div>
          </TabsContent>

          <TabsContent value="orcamentos">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {orcamentos.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Nenhum orçamento criado
                </div>
              ) : (
                orcamentos.map((orc) => (
                  <div key={orc.id} className="rounded-xl border border-border/50 bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{orc.modelo} {orc.versao}</span>
                      <StatusBadge status={orc.status} variant="orcamento" />
                    </div>
                    <p className="text-lg font-bold text-foreground mb-1">{formatCurrency(orc.valor)}</p>
                    <p className="text-xs text-muted-foreground">
                      Válido até: {formatDate(orc.validadeAte)}
                    </p>
                  </div>
                ))
              )}
              
              <button className="w-full py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                + Criar novo orçamento
              </button>
            </motion.div>
          </TabsContent>

          <TabsContent value="testdrive">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {testDrives.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Nenhum test-drive registrado
                </div>
              ) : (
                testDrives.map((td) => (
                  <div key={td.id} className="rounded-xl border border-border/50 bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">{td.modelo}</span>
                      <StatusBadge 
                        status={td.status === 'agendado' ? 'proposta' : td.status === 'realizado' ? 'fechado' : 'perdido'} 
                        variant="etapa" 
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Data: {formatDate(td.data)}
                    </p>
                    {td.feedback && (
                      <div className="rounded-lg bg-muted/30 p-3 mt-2">
                        <p className="text-xs text-muted-foreground mb-1">Feedback</p>
                        <p className="text-sm text-foreground">{td.feedback}</p>
                      </div>
                    )}
                    {td.proximoPasso && (
                      <div className="rounded-lg bg-primary/10 p-3 mt-2">
                        <p className="text-xs text-muted-foreground mb-1">Próximo Passo</p>
                        <p className="text-sm text-foreground">{td.proximoPasso}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
              
              <button className="w-full py-3 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                + Agendar test-drive
              </button>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
