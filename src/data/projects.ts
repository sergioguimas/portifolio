export type ProjectIconKey =
  | "health"
  | "commerce"
  | "form"
  | "ai"
  | "accounting"
  | "studio"
  | "catalog"
  | "automation";

export type Project = {
  slug: string;
  title: string;
  cardTitle: string;
  category: string;
  status: string;
  shortDescription: string;
  overview: string;
  problem: string;
  role: string[];
  stack: string[];
  features: string[];
  challenges: string[];
  outcome: string;
  highlights: string[];
  nextSteps?: string[];
  images?: string[];
  isPrivate?: boolean;
  featured?: boolean;
  icon: ProjectIconKey;
};

export const projects: Project[] = [
  {
    slug: "eliza-saas",
    title: "Eliza",
    cardTitle: "Eliza — SaaS multi-tenant para clínicas",
    category: "SaaS / HealthTech",
    status: "Em desenvolvimento",
    shortDescription:
      "Sistema de gestão para clínicas com agenda, pacientes, profissionais, configurações por organização e automações via WhatsApp.",
    overview:
      "O Eliza centraliza a rotina de clínicas e profissionais de saúde em uma aplicação web multi-tenant. O produto reúne agenda, pacientes, serviços, profissionais e configurações próprias de cada organização, além de oferecer um fluxo público de agendamento.",
    problem:
      "Clínicas pequenas costumam depender de agendas manuais e conversas dispersas no WhatsApp para marcar, confirmar e cancelar atendimentos. Esse cenário aumenta o retrabalho, dificulta o acompanhamento da operação e deixa informações importantes espalhadas.",
    role: [
      "Desenvolvimento frontend e full stack dos fluxos principais.",
      "Modelagem de entidades e organização do isolamento multi-tenant no Supabase.",
      "Construção da agenda interna e da página pública de agendamento por organização.",
      "Integração com WhatsApp por meio da Evolution API.",
      "Ajustes de fuso horário, PWA e experiência mobile.",
      "Participação nas decisões de produto, regras de negócio e roadmap.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Evolution API",
      "WhatsApp",
      "PWA",
      "Docker / VPS",
    ],
    features: [
      "Autenticação e organizações multi-tenant",
      "Agenda por profissional",
      "Cadastro de pacientes, serviços e profissionais",
      "Página pública de agendamento",
      "Confirmação e cancelamento via WhatsApp",
      "Lembretes automáticos",
      "Configurações por organização",
      "Experiência PWA para uso mobile",
    ],
    challenges: [
      "Isolar dados e configurações entre organizações com RLS.",
      "Tratar datas e horários de forma consistente entre agenda, lembretes e fuso local.",
      "Conciliar as regras dos agendamentos internos e públicos.",
      "Orquestrar confirmações, cancelamentos e lembretes por instâncias externas de WhatsApp.",
    ],
    outcome:
      "O projeto consolidou experiência prática com arquitetura SaaS multi-tenant, Supabase, RLS, automações por WhatsApp e evolução de um produto com regras e roadmap reais.",
    highlights: ["Multi-tenant", "Supabase / RLS", "WhatsApp", "PWA"],
    images: [
      "/images/projects/Eliza(1).webp",
      "/images/projects/Eliza(2).webp",
      "/images/projects/Eliza(3).webp",
      "/images/projects/Eliza(4).webp",
    ],
    isPrivate: true,
    featured: true,
    icon: "health",
  },
  {
    slug: "fidelidade",
    title: "Fidelidade",
    cardTitle: "Fidelidade — regras comerciais e consistência financeira",
    category: "Sistema comercial",
    status: "Projeto real · em evolução",
    shortDescription:
      "Sistema para lojistas controlarem clientes, compras, pontuação, descontos e indicadores comerciais.",
    overview:
      "O Fidelidade organiza clientes, compras, itens e pontuação em uma aplicação comercial. O sistema também oferece dashboard, filtros por período e recursos de consulta para apoiar a rotina de acompanhamento das vendas.",
    problem:
      "Controles manuais e planilhas tornam difícil conferir valores, acompanhar clientes recorrentes e aplicar corretamente regras de desconto e pontuação. Pequenas inconsistências de arredondamento ou data podem comprometer relatórios inteiros.",
    role: [
      "Desenvolvimento de funcionalidades de clientes, compras e itens de compra.",
      "Implementação das regras de desconto por produto e desconto total na nota.",
      "Rateio proporcional de descontos entre itens, com controle de arredondamento.",
      "Ajustes no dashboard, filtros por período e paginação de vendas.",
      "Normalização de datas considerando o fuso America/Sao_Paulo.",
      "Análise de divergências entre relatórios externos e dados persistidos.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "API Routes",
    ],
    features: [
      "Cadastro e consulta de clientes",
      "Registro de compras e itens",
      "Desconto por produto",
      "Desconto total com rateio proporcional",
      "Geração de pontos",
      "Dashboard com indicadores",
      "Filtros por período",
      "Paginação e normalização de datas",
    ],
    challenges: [
      "Preservar precisão e consistência em cálculos monetários.",
      "Distribuir descontos sem ultrapassar o subtotal dos itens.",
      "Manter compra, itens e pontuação coerentes após cada operação.",
      "Diferenciar data de lançamento, data real da venda e apresentação no fuso correto.",
    ],
    outcome:
      "O case aprofundou o trabalho com regras financeiras, consistência de dados, relatórios e investigação de divergências — áreas em que pequenos detalhes técnicos têm impacto direto na confiança do sistema.",
    highlights: ["Regras financeiras", "Dashboard", "PostgreSQL", "Fuso horário"],
    images: [
      "/images/projects/fidelidade/fidelidade-dashboard.png",
      "/images/projects/fidelidade/fidelidade-nova-venda.png",
      "/images/projects/fidelidade/fidelidade-novo-cliente.png",
    ],
    isPrivate: true,
    featured: true,
    icon: "commerce",
  },
  {
    slug: "autoatendimento-e-util",
    title: "Autoatendimento e-Útil",
    cardTitle: "Autoatendimento e-Útil — formulário complexo, experiência simples",
    category: "Frontend / UX / API",
    status: "Projeto real · integração em andamento",
    shortDescription:
      "Fluxo de agendamento para certificados digitais com múltiplas etapas, validações condicionais e integração com backend em Go.",
    overview:
      "O projeto é uma interface de solicitação e agendamento de certificados digitais pensada para funcionar dentro de um site WordPress existente. O formulário divide um processo extenso em etapas claras e reúne somente os dados necessários para cada modalidade.",
    problem:
      "A solicitação de certificados digitais combina dados pessoais ou empresariais, modalidades, tipos de certificado e regras específicas. Colocar tudo em um único formulário aumentaria a carga cognitiva, os erros de preenchimento e o risco de abandono.",
    role: [
      "Desenvolvimento frontend e estruturação do fluxo multi-etapas.",
      "Organização visual e de UX para um público não técnico.",
      "Implementação de campos condicionais e validações de CPF, CNPJ e CEP.",
      "Definição e discussão dos payloads com o backend em Go.",
      "Separação entre o envio inicial por POST e a atualização posterior por PATCH.",
      "Adaptação da aplicação React para incorporação no site WordPress.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "API REST",
      "Go",
      "WordPress",
    ],
    features: [
      "Formulário dividido em etapas",
      "Campos para pessoa física e jurídica",
      "Validação de CPF e CNPJ",
      "Consulta de CEP, cidade e CNPJ",
      "Escolha de modalidade e certificado",
      "Seleção de dias e período de atendimento",
      "Resumo antes da confirmação",
      "Oferta SafeID após a solicitação principal",
    ],
    challenges: [
      "Simplificar um processo com muitas combinações e regras condicionais.",
      "Exibir cada campo no momento certo sem quebrar a continuidade do fluxo.",
      "Integrar o frontend React com uma API em Go usando operações em momentos diferentes.",
      "Incorporar a experiência ao WordPress sem retirar o usuário do site.",
    ],
    outcome:
      "O trabalho reforçou experiência com UX aplicada a formulários extensos, validação de dados, integração frontend/backend e comunicação técnica entre partes com stacks diferentes.",
    highlights: ["UX", "Multi-etapas", "API REST", "Validações"],
    nextSteps: [
      "Concluir e validar o ciclo completo de integração com o backend em Go.",
      "Acompanhar o comportamento do fluxo incorporado ao ambiente WordPress.",
    ],
    images: [
      "/images/projects/autoatendimento/autoatendimento-inicio.png",
      "/images/projects/autoatendimento/autoatendimento-validacoes.png",
      "/images/projects/autoatendimento/autoatendimento-dados-pessoais.png",
    ],
    isPrivate: true,
    featured: true,
    icon: "form",
  },
  {
    slug: "pandora",
    title: "Pandora",
    cardTitle: "Pandora — hub multiagente de IA",
    category: "IA / Agentes",
    status: "Produto interno · em desenvolvimento",
    shortDescription:
      "Hub para criar, configurar e conversar com agentes de IA personalizados, com histórico, memória e base de conhecimento.",
    overview:
      "O Pandora explora IA como produto, e não apenas como uma sequência de prompts. A aplicação organiza agentes, personalidade, conversas, mensagens e conhecimento para permitir experiências persistentes e reutilizáveis.",
    problem:
      "Conversas isoladas e prompts soltos dificultam a continuidade e a especialização de agentes. Sem uma estrutura própria, contexto, histórico e conhecimento ficam fragmentados e difíceis de reaproveitar.",
    role: [
      "Planejamento da arquitetura e das entidades principais.",
      "Desenvolvimento do chat e dos fluxos multiagente.",
      "Persistência de agentes, conversas e mensagens no Supabase.",
      "Integração com modelos Gemini.",
      "Organização de personalidade, memória e base de conhecimento.",
      "Planejamento do canal futuro de WhatsApp.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini",
      "LLMs",
    ],
    features: [
      "Cadastro e configuração de agentes",
      "Personalidade por agente",
      "Chat com histórico persistido",
      "Conversas e mensagens organizadas",
      "Base de conhecimento",
      "Integração com LLM",
      "Fluxo de retry de mensagens",
      "Slug de acesso por agente",
    ],
    challenges: [
      "Separar corretamente usuários, agentes, conversas e mensagens.",
      "Montar contexto por agente sem misturar históricos.",
      "Persistir e reaproveitar conhecimento entre conversas.",
      "Preparar a arquitetura para um canal externo como WhatsApp.",
    ],
    outcome:
      "O projeto amplia a experiência com IA aplicada, persistência de contexto e modelagem de um produto no qual agentes, memória e conhecimento fazem parte da arquitetura.",
    highlights: ["Agentes de IA", "Gemini", "Memória", "Supabase"],
    nextSteps: [
      "Evoluir a base de conhecimento e os mecanismos de memória.",
      "Planejar a integração com WhatsApp por meio da Evolution API.",
    ],
    images: [
      "/images/projects/pandora/pandora-gestao-agentes.png",
      "/images/projects/pandora/pandora-identidade-agente.png",
      "/images/projects/pandora/pandora-nova-conversa.png",
    ],
    isPrivate: true,
    featured: true,
    icon: "ai",
  },
  {
    slug: "solabridge",
    title: "SolaBridge",
    cardTitle: "SolaBridge — gestão contábil e NFS-e",
    category: "Acadêmico / Contabilidade",
    status: "Projeto acadêmico",
    shortDescription:
      "Sistema acadêmico de gestão contábil e emissão de NFS-e com frontend React e backend Laravel/PostgreSQL.",
    overview:
      "O SolaBridge foi desenvolvido em grupo para a disciplina de Introdução à Contabilidade do curso de ADS. A proposta conecta requisitos contábeis, uma interface web e a integração com uma API pública de NFS-e.",
    problem:
      "O desafio acadêmico era transformar conceitos contábeis e fiscais em fluxos compreensíveis, separando responsabilidades entre frontend e backend e preparando a comunicação com um serviço externo de notas fiscais.",
    role: [
      "Participação na definição da stack e da divisão de responsabilidades.",
      "Atuação no frontend, componentes e páginas.",
      "Apoio ao colega Lucas no desenvolvimento frontend.",
      "Planejamento da integração entre React e Laravel.",
      "Tradução de requisitos acadêmicos em telas e fluxos.",
    ],
    stack: ["React", "TypeScript", "Laravel", "PHP", "PostgreSQL", "API pública de NFS-e"],
    features: [
      "Gestão de dados contábeis",
      "Emissão de NFS-e",
      "Dashboard operacional",
      "Cadastro de clientes ou empresas",
      "Integração com API pública",
    ],
    challenges: [
      "Integrar um frontend React com backend Laravel.",
      "Trabalhar com conceitos contábeis ainda em contexto de aprendizagem.",
      "Organizar responsabilidades e entregas entre os membros do grupo.",
    ],
    outcome:
      "O projeto conectou desenvolvimento web, fundamentos de contabilidade, integração fiscal e colaboração em equipe dentro de um contexto acadêmico.",
    highlights: ["React", "Laravel", "PostgreSQL", "NFS-e"],
    images: [
      "/images/projects/solabridge/solabridge-dashboard.jpg",
      "/images/projects/solabridge/solabridge-emissao-nfse.jpg",
      "/images/projects/solabridge/solabridge-clientes.jpg",
    ],
    icon: "accounting",
  },
  {
    slug: "sola-software",
    title: "Sola Software",
    cardTitle: "Sola Software — produtos e sistemas sob medida",
    category: "Marca / Startup",
    status: "Em construção",
    shortDescription:
      "Iniciativa criada por três sócios para desenvolver produtos próprios e soluções digitais para negócios.",
    overview:
      "A Sola Software é uma iniciativa empreendedora voltada à construção de software, produtos digitais e sistemas sob medida. A marca ainda não possui uma landing page publicada; as ideias visuais e o posicionamento estão em construção junto à definição da forma de trabalho entre os sócios.",
    problem:
      "Transformar uma iniciativa técnica em uma operação coerente exige alinhar proposta de valor, identidade, responsabilidades e capacidade de entrega — além do próprio desenvolvimento dos produtos.",
    role: [
      "Participação na criação e no posicionamento da iniciativa.",
      "Desenvolvimento de produtos e sistemas web.",
      "Colaboração em decisões de identidade, oferta e processo.",
      "Exploração de soluções para pequenos negócios.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Automação"],
    features: [
      "Produtos digitais próprios",
      "Sistemas web sob medida",
      "Automações de processos",
      "Exploração de identidade e presença digital",
    ],
    challenges: [
      "Alinhar produto, marca e viabilidade de execução.",
      "Definir processos de colaboração entre três sócios.",
      "Priorizar oportunidades sem dispersar a capacidade de entrega.",
    ],
    outcome:
      "A iniciativa amplia o contato com decisões de produto e negócio, indo além da implementação técnica isolada.",
    highlights: ["Produto", "Sistemas web", "Negócios", "Colaboração"],
    nextSteps: [
      "Consolidar a identidade e o posicionamento da iniciativa.",
      "Transformar as ideias visuais em uma landing page própria.",
    ],
    icon: "studio",
  },
  {
    slug: "o-cravo-e-a-rosa",
    title: "O Cravo e a Rosa",
    cardTitle: "O Cravo e a Rosa — vitrine digital para perfumaria",
    category: "Landing page / Catálogo",
    status: "Projeto em desenvolvimento",
    shortDescription:
      "Vitrine mobile-first para apresentar categorias, produtos e caminhos de contato direto por WhatsApp e Instagram.",
    overview:
      "O projeto organiza a presença digital de uma perfumaria em uma experiência visual focada em descoberta. A página combina apresentação da marca, categorias, carrossel de produtos e chamadas diretas para atendimento por canais sociais.",
    problem:
      "Uma pequena operação comercial precisa apresentar seus produtos de forma clara e atraente sem depender, desde o início, de uma estrutura completa de e-commerce. A experiência deve funcionar bem no celular e reduzir a distância entre descoberta e contato.",
    role: [
      "Desenvolvimento frontend com Next.js, React e TypeScript.",
      "Construção da narrativa visual e das seções da landing page.",
      "Modelagem local de categorias e produtos.",
      "Implementação do carrossel e das animações de entrada.",
      "Integração de chamadas para WhatsApp e Instagram.",
      "Ajustes de responsividade com foco em navegação mobile-first.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Embla Carousel",
      "WhatsApp",
    ],
    features: [
      "Hero e apresentação da marca",
      "Categorias de produtos",
      "Carrossel de destaques",
      "Chamadas para WhatsApp",
      "Integração com Instagram",
      "Layout responsivo",
    ],
    challenges: [
      "Equilibrar identidade visual e legibilidade em diferentes tamanhos de tela.",
      "Criar uma vitrine atraente sem depender de backend ou checkout próprio.",
      "Manter o carrossel fluido e os contatos acessíveis durante a navegação.",
    ],
    outcome:
      "O projeto reforçou experiência com landing pages orientadas a negócio, catálogos digitais e interfaces em que a conversão acontece por canais de atendimento já usados pela operação.",
    highlights: ["Next.js", "Mobile-first", "Catálogo", "WhatsApp"],
    images: [
      "/images/projects/ocravoearosa/ocravoearosa-home.png",
      "/images/projects/ocravoearosa/ocravoearosa-vitrine.png",
    ],
    isPrivate: true,
    icon: "catalog",
  },
  {
    slug: "automacoes-internas",
    title: "Automações internas",
    cardTitle: "Automações internas — scripts para operação real",
    category: "Scripts / Operação",
    status: "Projetos privados · operacionais",
    shortDescription:
      "Scripts e fluxos para revisar dados, comparar relatórios, executar backups e automatizar rotinas sem API.",
    overview:
      "Este case reúne automações menores, mas diretamente ligadas à operação. Elas surgem de tarefas repetitivas ou sujeitas a erro e usam a ferramenta mais adequada para cada ambiente: scripts, navegador automatizado, workflows ou integrações.",
    problem:
      "Rotinas manuais consomem tempo e podem produzir divergências difíceis de rastrear. Em sistemas legados ou sem API, a automação ainda precisa lidar com interfaces, arquivos e limitações do ambiente existente.",
    role: [
      "Mapeamento das etapas manuais e dos pontos de falha.",
      "Criação de scripts em Python e PowerShell.",
      "Automação de interfaces web com Playwright.",
      "Construção de workflows no n8n.",
      "Comparação de relatórios e revisão automatizada de cadastros.",
      "Rotinas de backup com WinSCP.",
      "Automação fiscal com planilhas, modos seguros de execução e reprocessamento de pendências.",
      "Download e organização mensal de XMLs em fluxo multiempresa.",
    ],
    stack: [
      "Python",
      "Node.js",
      "PowerShell",
      "Playwright",
      "Streamlit",
      "n8n",
      "WinSCP",
      "APIs",
      "CSV / XLSX",
      "XML",
    ],
    features: [
      "Revisão automatizada de produtos",
      "Comparação de relatórios de vendas",
      "Backups operacionais",
      "Fluxos de mensagens e lembretes",
      "Apoio à manutenção de cadastros",
      "Extração de genealogia da ABCZ para planilhas",
      "Conciliação fiscal com sugestões por nível de confiança",
      "Exportação e separação de XMLs por empresa",
    ],
    challenges: [
      "Automatizar sistemas sem API disponível.",
      "Trabalhar com interfaces web legadas e mudanças de estado.",
      "Comparar dados de fontes com formatos diferentes.",
      "Reduzir falsos positivos e tornar os scripts reutilizáveis.",
    ],
    outcome:
      "Essas automações demonstram uma abordagem pragmática: entender o processo, escolher a ferramenta adequada e reduzir trabalho repetitivo sem exigir a reconstrução completa do sistema existente.",
    highlights: ["Python", "PowerShell", "Playwright", "n8n"],
    images: [
      "/images/projects/workflow (1).webp",
      "/images/projects/automacao (1).webp",
      "/images/projects/automacao (2).webp",
      "/images/projects/automacao (3).webp",
    ],
    isPrivate: true,
    icon: "automation",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectHref(project: Pick<Project, "slug">) {
  return `/projetos/${project.slug}`;
}

export function toProjectApiItem(project: Project) {
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    status: project.status,
    description: project.shortDescription,
    stack: project.stack,
    highlights: project.highlights,
    href: getProjectHref(project),
    featured: Boolean(project.featured),
    private: Boolean(project.isPrivate),
  };
}
