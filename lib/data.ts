export interface BusinessCategory {
  id: string;
  nome: string;
  descricao: string;
  demo: boolean;
}

export interface SectorPreview {
  id: string;
  nome: string;
  descricao: string;
}

export interface BarbershopDemo {
  nome: string;
  slogan: string;
  servicos: string[];
  galeria: string[];
  horario: string;
  localizacao: string;
  whatsapp: string;
}

export const businessCategories: BusinessCategory[] = [
  {
    id: 'saloes-barbearias',
    nome: 'Salões e barbearias',
    descricao: 'Agendamento, equipa, serviços e portfólio de cortes.',
    demo: true,
  },
  {
    id: 'restaurantes-cafes',
    nome: 'Restaurantes e cafés',
    descricao: 'Menu, reservas, take-away e horários.',
    demo: false,
  },
  {
    id: 'clinicas-consultorios',
    nome: 'Clínicas e consultórios',
    descricao: 'Marcações, especialidades, equipa e contactos.',
    demo: false,
  },
  {
    id: 'hoteis-alojamentos',
    nome: 'Hotéis e alojamentos',
    descricao: 'Quartos, reservas, comodidades e localização.',
    demo: false,
  },
  {
    id: 'lojas',
    nome: 'Lojas',
    descricao: 'Catálogo, promoções, pedidos via WhatsApp.',
    demo: false,
  },
  {
    id: 'prestadores-servicos',
    nome: 'Prestadores de serviços',
    descricao: 'Serviços, áreas de atuação, contacto direto.',
    demo: false,
  },
];

export const barbershopDemo: BarbershopDemo = {
  nome: 'A definir',
  slogan: 'A definir',
  servicos: ['A definir'],
  galeria: ['A definir'],
  horario: 'A definir',
  localizacao: 'A definir',
  whatsapp: 'A definir',
};

export const sectorPreviews: SectorPreview[] = [
  {
    id: 'restaurantes-cafes',
    nome: 'Restaurantes e cafés',
    descricao: 'Página de apresentação, menu ou catálogo e contacto por WhatsApp.',
  },
  {
    id: 'clinicas-consultorios',
    nome: 'Clínicas e consultórios',
    descricao: 'Página de apresentação, serviços, equipa e contacto por WhatsApp.',
  },
  {
    id: 'hoteis-alojamentos',
    nome: 'Hotéis e alojamentos',
    descricao: 'Página de apresentação, quartos, comodidades e contacto por WhatsApp.',
  },
  {
    id: 'lojas',
    nome: 'Lojas',
    descricao: 'Página de apresentação, catálogo de produtos e contacto por WhatsApp.',
  },
  {
    id: 'prestadores-servicos',
    nome: 'Prestadores de serviços',
    descricao: 'Página de apresentação, serviços, áreas de atuação e contacto por WhatsApp.',
  },
];