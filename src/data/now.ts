export type NowPhase = "Em produção" | "Em andamento" | "Planejamento" | "Implantação" | "Em uso";

export type NowItem = {
  title: string;
  phase: NowPhase;
  description: string;
  projectSlug?: string;
};

export const nowUpdatedAt = "setembro de 2026";

export const nowItems: NowItem[] = [
  {
    title: "Compliance de ponto",
    phase: "Em produção",
    description:
      "Reuniões periódicas com o cliente e o painel passando a consumir papéis, tratativas e anexos que já existem no backend.",
    projectSlug: "compliance-de-ponto",
  },
  {
    title: "Eliza",
    phase: "Planejamento",
    description:
      "Atendente por WhatsApp como módulo adicional: contratos da API escritos, implementação na sequência.",
    projectSlug: "eliza-saas",
  },
  {
    title: "Fidelidade",
    phase: "Em produção",
    description:
      "Próximas regras de pontuação e de catálogo especificadas em contratos antes de chegar ao código.",
    projectSlug: "fidelidade",
  },
  {
    title: "Base de clientes",
    phase: "Em andamento",
    description:
      "Limpeza de uma base mantida em planilha e migração para PostgreSQL, com segmentação por atividade econômica e relação entre matriz e filiais.",
  },
  {
    title: "Disparo mensal",
    phase: "Implantação",
    description:
      "Rotina pronta e testada entrando em operação de forma gradual, para proteger o número de atendimento.",
    projectSlug: "disparo-mensal-whatsapp",
  },
  {
    title: "RedmiLab",
    phase: "Em uso",
    description:
      "Assistente financeiro em uso diário; próximos passos são backup dos dados e alerta quando um serviço cai.",
    projectSlug: "redmilab",
  },
];
