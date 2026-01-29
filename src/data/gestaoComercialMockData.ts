// Mock data for Gestão Comercial module

export interface Lead {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  modelo: string;
  valorEstimado: number;
  etapa: 'lead' | 'contato' | 'test-drive' | 'proposta' | 'negociacao' | 'fechado' | 'perdido';
  status: 'ativo' | 'frio' | 'fechado' | 'perdido';
  probabilidade: number;
  dataPrevisaoDecisao: string;
  ultimaInteracao: string;
  proximaAcao: string;
  dataProximaAcao: string;
  origem: string;
}

export interface Interacao {
  id: string;
  leadId: string;
  tipo: 'ligacao' | 'whatsapp' | 'visita' | 'email' | 'test-drive';
  data: string;
  descricao: string;
}

export interface Orcamento {
  id: string;
  leadId: string;
  modelo: string;
  versao: string;
  valor: number;
  status: 'enviado' | 'revisado' | 'aprovado' | 'perdido';
  data: string;
  validadeAte: string;
}

export interface TestDrive {
  id: string;
  leadId: string;
  modelo: string;
  status: 'agendado' | 'realizado' | 'cancelado';
  data: string;
  feedback?: string;
  proximoPasso?: string;
}

export interface Tarefa {
  id: string;
  leadId: string;
  tipo: 'follow-up' | 'proposta' | 'test-drive' | 'entrega';
  descricao: string;
  data: string;
  prioridade: 'alta' | 'media' | 'baixa';
  status: 'pendente' | 'concluida' | 'atrasada';
}

// Mock Leads
export const mockLeads: Lead[] = [
  {
    id: '1',
    nome: 'Carlos Mendes',
    telefone: '(11) 99876-5432',
    email: 'carlos.mendes@email.com',
    modelo: 'EX30 Ultra',
    valorEstimado: 289900,
    etapa: 'negociacao',
    status: 'ativo',
    probabilidade: 80,
    dataPrevisaoDecisao: '2026-02-05',
    ultimaInteracao: '2026-01-28',
    proximaAcao: 'Enviar proposta final',
    dataProximaAcao: '2026-01-30',
    origem: 'Site Volvo'
  },
  {
    id: '2',
    nome: 'Ana Paula Santos',
    telefone: '(11) 98765-4321',
    email: 'ana.santos@email.com',
    modelo: 'XC60 Plus',
    valorEstimado: 389900,
    etapa: 'proposta',
    status: 'ativo',
    probabilidade: 60,
    dataPrevisaoDecisao: '2026-02-10',
    ultimaInteracao: '2026-01-27',
    proximaAcao: 'Aguardar retorno',
    dataProximaAcao: '2026-01-31',
    origem: 'Indicação'
  },
  {
    id: '3',
    nome: 'Roberto Silva',
    telefone: '(11) 97654-3210',
    email: 'roberto.silva@email.com',
    modelo: 'EX30 Core',
    valorEstimado: 229900,
    etapa: 'test-drive',
    status: 'ativo',
    probabilidade: 40,
    dataPrevisaoDecisao: '2026-02-15',
    ultimaInteracao: '2026-01-26',
    proximaAcao: 'Test-drive agendado',
    dataProximaAcao: '2026-01-30',
    origem: 'Walk-in'
  },
  {
    id: '4',
    nome: 'Fernanda Costa',
    telefone: '(11) 96543-2109',
    email: 'fernanda.costa@email.com',
    modelo: 'XC40 Recharge',
    valorEstimado: 349900,
    etapa: 'contato',
    status: 'ativo',
    probabilidade: 30,
    dataPrevisaoDecisao: '2026-02-20',
    ultimaInteracao: '2026-01-25',
    proximaAcao: 'Primeiro contato',
    dataProximaAcao: '2026-01-29',
    origem: 'Site Volvo'
  },
  {
    id: '5',
    nome: 'Marcos Oliveira',
    telefone: '(11) 95432-1098',
    email: 'marcos.oliveira@email.com',
    modelo: 'EX90',
    valorEstimado: 649900,
    etapa: 'lead',
    status: 'ativo',
    probabilidade: 20,
    dataPrevisaoDecisao: '2026-03-01',
    ultimaInteracao: '2026-01-29',
    proximaAcao: 'Qualificar lead',
    dataProximaAcao: '2026-01-30',
    origem: 'Evento'
  },
  {
    id: '6',
    nome: 'Juliana Almeida',
    telefone: '(11) 94321-0987',
    email: 'juliana.almeida@email.com',
    modelo: 'EX30 Plus',
    valorEstimado: 259900,
    etapa: 'fechado',
    status: 'fechado',
    probabilidade: 100,
    dataPrevisaoDecisao: '2026-01-20',
    ultimaInteracao: '2026-01-20',
    proximaAcao: 'Entrega agendada',
    dataProximaAcao: '2026-02-05',
    origem: 'Indicação'
  },
  {
    id: '7',
    nome: 'Pedro Henrique',
    telefone: '(11) 93210-9876',
    email: 'pedro.h@email.com',
    modelo: 'XC60 Ultimate',
    valorEstimado: 449900,
    etapa: 'negociacao',
    status: 'frio',
    probabilidade: 35,
    dataPrevisaoDecisao: '2026-02-28',
    ultimaInteracao: '2026-01-20',
    proximaAcao: 'Reativar contato',
    dataProximaAcao: '2026-01-29',
    origem: 'Site Volvo'
  },
  {
    id: '8',
    nome: 'Camila Rodrigues',
    telefone: '(11) 92109-8765',
    email: 'camila.r@email.com',
    modelo: 'EX30 Ultra',
    valorEstimado: 289900,
    etapa: 'proposta',
    status: 'ativo',
    probabilidade: 70,
    dataPrevisaoDecisao: '2026-02-08',
    ultimaInteracao: '2026-01-28',
    proximaAcao: 'Follow-up proposta',
    dataProximaAcao: '2026-01-30',
    origem: 'Walk-in'
  }
];

// Mock Interações
export const mockInteracoes: Interacao[] = [
  { id: '1', leadId: '1', tipo: 'visita', data: '2026-01-28', descricao: 'Cliente visitou showroom, interessado no EX30 Ultra azul' },
  { id: '2', leadId: '1', tipo: 'whatsapp', data: '2026-01-27', descricao: 'Enviado vídeo do interior do veículo' },
  { id: '3', leadId: '1', tipo: 'ligacao', data: '2026-01-25', descricao: 'Primeiro contato, agendou visita' },
  { id: '4', leadId: '2', tipo: 'email', data: '2026-01-27', descricao: 'Proposta enviada por email' },
  { id: '5', leadId: '2', tipo: 'test-drive', data: '2026-01-24', descricao: 'Realizou test-drive, gostou muito' },
];

// Mock Orçamentos
export const mockOrcamentos: Orcamento[] = [
  { id: '1', leadId: '1', modelo: 'EX30', versao: 'Ultra Single Motor Extended Range', valor: 289900, status: 'enviado', data: '2026-01-28', validadeAte: '2026-02-05' },
  { id: '2', leadId: '2', modelo: 'XC60', versao: 'Plus T8 Recharge', valor: 389900, status: 'enviado', data: '2026-01-27', validadeAte: '2026-02-03' },
  { id: '3', leadId: '6', modelo: 'EX30', versao: 'Plus Single Motor', valor: 259900, status: 'aprovado', data: '2026-01-18', validadeAte: '2026-01-25' },
  { id: '4', leadId: '8', modelo: 'EX30', versao: 'Ultra Twin Motor', valor: 299900, status: 'revisado', data: '2026-01-26', validadeAte: '2026-02-02' },
];

// Mock Test-Drives
export const mockTestDrives: TestDrive[] = [
  { id: '1', leadId: '3', modelo: 'EX30 Core', status: 'agendado', data: '2026-01-30' },
  { id: '2', leadId: '2', modelo: 'XC60 Plus', status: 'realizado', data: '2026-01-24', feedback: 'Adorou a dirigibilidade e o silêncio', proximoPasso: 'Enviar proposta' },
  { id: '3', leadId: '1', modelo: 'EX30 Ultra', status: 'realizado', data: '2026-01-22', feedback: 'Impressionado com a tecnologia', proximoPasso: 'Negociar condições' },
];

// Mock Tarefas
export const mockTarefas: Tarefa[] = [
  { id: '1', leadId: '7', tipo: 'follow-up', descricao: 'Follow-up atrasado - Pedro Henrique', data: '2026-01-25', prioridade: 'alta', status: 'atrasada' },
  { id: '2', leadId: '4', tipo: 'follow-up', descricao: 'Primeiro contato - Fernanda Costa', data: '2026-01-29', prioridade: 'alta', status: 'pendente' },
  { id: '3', leadId: '3', tipo: 'test-drive', descricao: 'Test-drive agendado - Roberto Silva', data: '2026-01-30', prioridade: 'alta', status: 'pendente' },
  { id: '4', leadId: '1', tipo: 'proposta', descricao: 'Enviar proposta final - Carlos Mendes', data: '2026-01-30', prioridade: 'alta', status: 'pendente' },
  { id: '5', leadId: '8', tipo: 'follow-up', descricao: 'Follow-up proposta - Camila Rodrigues', data: '2026-01-30', prioridade: 'media', status: 'pendente' },
  { id: '6', leadId: '6', tipo: 'entrega', descricao: 'Entrega veículo - Juliana Almeida', data: '2026-02-05', prioridade: 'media', status: 'pendente' },
];

// KPIs calculados
export const getKPIs = () => {
  const leadsAtivos = mockLeads.filter(l => l.status === 'ativo').length;
  const orcamentosAbertos = mockOrcamentos.filter(o => o.status === 'enviado' || o.status === 'revisado').length;
  const testDrivesPendentes = mockTestDrives.filter(t => t.status === 'agendado').length;
  const vendasFechadas = mockLeads.filter(l => l.etapa === 'fechado').length;
  const metaMensal = 8;
  const progressoMeta = Math.round((vendasFechadas / metaMensal) * 100);

  return {
    leadsAtivos,
    orcamentosAbertos,
    testDrivesPendentes,
    vendasFechadas,
    metaMensal,
    progressoMeta
  };
};

// Contagem por etapa do funil
export const getFunnelData = () => {
  const etapas = ['lead', 'contato', 'test-drive', 'proposta', 'negociacao', 'fechado'] as const;
  return etapas.map(etapa => ({
    etapa,
    label: etapa === 'test-drive' ? 'Test-Drive' : etapa.charAt(0).toUpperCase() + etapa.slice(1),
    count: mockLeads.filter(l => l.etapa === etapa).length,
    valor: mockLeads.filter(l => l.etapa === etapa).reduce((acc, l) => acc + l.valorEstimado, 0)
  }));
};

// Ações urgentes
export const getAcoesUrgentes = () => {
  return mockTarefas
    .filter(t => t.status === 'atrasada' || (t.status === 'pendente' && t.prioridade === 'alta'))
    .sort((a, b) => {
      if (a.status === 'atrasada' && b.status !== 'atrasada') return -1;
      if (a.status !== 'atrasada' && b.status === 'atrasada') return 1;
      return new Date(a.data).getTime() - new Date(b.data).getTime();
    });
};
