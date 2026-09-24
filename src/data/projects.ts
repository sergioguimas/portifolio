export type ProjectIconKey =
  | "health"
  | "commerce"
  | "form"
  | "ai"
  | "accounting"
  | "studio"
  | "catalog"
  | "automation"
  | "compliance"
  | "lab"
  | "event"
  | "data";

export type ProjectLink = {
  label: string;
  href: string;
};

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
  links?: ProjectLink[];
  isPrivate?: boolean;
  featured?: boolean;
  icon: ProjectIconKey;
};

export const projects: Project[] = [
  {
    slug: "compliance-de-ponto",
    title: "Compliance de ponto",
    cardTitle: "Compliance de ponto — auditoria trabalhista sobre o relógio de ponto",
    category: "SaaS / Trabalhista",
    status: "Em produção · ciclo de melhorias com o cliente",
    shortDescription:
      "Painel multi-tenant que audita as marcações de ponto contra regras da CLT e avisa gestores e RH por WhatsApp antes que a inconsistência vire passivo.",
    overview:
      "O sistema lê as marcações de um software de ponto eletrônico (Secullum) pela API de integração, audita cada dia de cada colaborador contra regras trabalhistas — interjornada, intervalo de almoço, hora extra, marcações esquecidas — e transforma o resultado em ocorrências com severidade, histórico e tratativa. É vendido como um adicional para empresas que já usam o ponto eletrônico. Está em produção, com reuniões periódicas em que o cliente traz ajustes e novas necessidades.",
    problem:
      "Empresas com muitos funcionários só descobrem problemas de jornada no fechamento da folha, quando já não há o que corrigir — ou numa reclamação trabalhista. O sistema de ponto registra as batidas, mas não diz o que está fora da lei, não avisa ninguém a tempo e não distingue o erro do colaborador de uma escala que o gestor esqueceu de atualizar.",
    role: [
      "Frontend completo: indicadores, situação por dia, ocorrências, colaboradores, filiais e equipamentos.",
      "Desde setembro de 2026, responsável também pelo backend em Go e pelo banco — o projeto inteiro.",
      "Tradução do feedback verbal do cliente em backlog rastreável e roadmap por etapas.",
      "Contrato de papéis e permissões: RH, gestor e diretoria, vinculados à empresa e não ao usuário.",
      "Redesenho da severidade em dois eixos: gravidade da regra e se a falha é atribuível ao colaborador.",
      "Especificação de uma nota de conformidade normalizada por dias trabalhados.",
    ],
    stack: [
      "Go",
      "Gin",
      "GORM",
      "PostgreSQL",
      "RabbitMQ",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "JWT",
      "Evolution API",
      "Docker / Traefik",
    ],
    features: [
      "Auditoria automática por colaborador e por dia",
      "Reauditoria ao longo do dia",
      "Ocorrências com severidade, histórico e tratativa",
      "Indicadores com filtro por período",
      "Alertas por WhatsApp",
      "Filiais, equipamentos e lotação",
      "Multiempresa com papéis por empresa",
      "Espelho local de colaboradores e relógios",
    ],
    challenges: [
      "Sem webhook na origem, a única forma de refletir as correções feitas no ponto ao longo do dia é consultar de novo — e o intervalo foi definido pelo limite de requisições da API, não por escolha.",
      "Escalas variáveis montadas à mão pelo gestor geram falsos alertas quando mudam sem atualizar o sistema: a reconciliação precisa separar a falha do colaborador da desatualização da escala.",
      "Identificadores parecidos com papéis diferentes — o ID interno do sistema de ponto e o número de folha — já causaram vínculo errado de filial; a interface passou a nomear cada um explicitamente.",
      "O mesmo usuário pode ter papéis diferentes em empresas diferentes, então a permissão viaja com a empresa selecionada, não no token.",
      "Mudar a severidade exige recalcular a assinatura das ocorrências abertas, ou cada uma reaparece como nova na primeira varredura.",
    ],
    outcome:
      "É o projeto em que a responsabilidade foi mais completa: começou como frente de interface e virou um sistema inteiro em produção, com cliente real, backend em Go, fila de mensagens e um ciclo contínuo de feedback. O maior aprendizado foi que, em auditoria, o difícil não é detectar a regra quebrada — é não acusar quem não errou.",
    highlights: ["Go", "CLT", "Multi-tenant", "WhatsApp"],
    nextSteps: [
      "Levar para o painel os recursos que já existem no backend: papéis, tratativas, anexos e revisão mensal.",
      "Cobrir as regras que exigem janela de período, como jornada semanal e banco de horas.",
    ],
    isPrivate: true,
    featured: true,
    icon: "compliance",
  },
  {
    slug: "eliza-saas",
    title: "Eliza",
    cardTitle: "Eliza — SaaS multi-tenant para clínicas",
    category: "SaaS / HealthTech",
    status: "Em produção · validação com primeiros usuários",
    shortDescription:
      "Sistema de gestão para clínicas e negócios de serviço com agenda, clientes, profissionais, configurações por organização e automações via WhatsApp.",
    overview:
      "O Eliza centraliza a rotina de clínicas e profissionais de serviço em uma aplicação web multi-tenant. O produto reúne agenda, clientes, serviços, prontuários, profissionais e configurações próprias de cada organização, além de um fluxo público de agendamento. Um motor de nichos adapta terminologia e visual por segmento — clínica, psicologia, barbearia, salão, advocacia e tatuagem — sem duplicar código. O sistema está publicado e ganhou uma demonstração guiada: um ambiente isolado e temporário em que o visitante percorre o fluxo completo, do agendamento ao retorno.",
    problem:
      "Clínicas pequenas costumam depender de agendas manuais e conversas dispersas no WhatsApp para marcar, confirmar e cancelar atendimentos. Esse cenário aumenta o retrabalho, dificulta o acompanhamento da operação e deixa informações importantes espalhadas.",
    role: [
      "Desenvolvimento frontend e full stack dos fluxos principais.",
      "Modelagem de entidades e organização do isolamento multi-tenant no Supabase.",
      "Construção da agenda interna e da página pública de agendamento por organização.",
      "Integração com WhatsApp por meio da Evolution API.",
      "Ajustes de fuso horário e experiência mobile.",
      "Tour de demonstração com tenant efêmero, reset automático e captura de lead.",
      "Auditoria de segurança multi-tenant: privilégios por coluna, RLS em todas as tabelas e revisão de funções expostas.",
      "Participação nas decisões de produto, regras de negócio, precificação e roadmap.",
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
      "Docker / VPS",
    ],
    features: [
      "Autenticação e organizações multi-tenant",
      "Agenda por profissional",
      "Cadastro de pacientes, serviços e profissionais",
      "Página pública de agendamento",
      "Confirmação e cancelamento via WhatsApp",
      "Lembretes automáticos",
      "Configurações e terminologia por nicho",
      "Orçamentos, despesas e painel financeiro",
      "Demonstração guiada em ambiente isolado",
    ],
    challenges: [
      "Isolar dados e configurações entre organizações com RLS — e perceber que, para colunas sensíveis, a trava que funciona é o privilégio de coluna, não a policy.",
      "Tratar datas e horários de forma consistente entre agenda, lembretes e fuso local.",
      "Conciliar as regras dos agendamentos internos e públicos.",
      "Montar uma demo que usa o próprio RLS do produto para isolar o visitante, em vez de criar um caminho paralelo que poderia vazar em produção.",
      "Garantir que o envio de WhatsApp de um tenant nunca saia pelo número de outro, mesmo com a configuração incompleta.",
    ],
    outcome:
      "O projeto consolidou experiência prática com arquitetura SaaS multi-tenant, Supabase, RLS e automações por WhatsApp — e com a parte menos visível de um produto em produção: revisar permissões, ordenar migrations e deploy para não derrubar quem já usa, e pensar como um visitante mal-intencionado antes de abrir uma porta pública.",
    highlights: ["Multi-tenant", "Supabase / RLS", "WhatsApp", "Demo guiada"],
    nextSteps: [
      "Atendente por WhatsApp como módulo adicional, com agendamento validado pelas mesmas regras de horário do sistema.",
      "Limites por plano aplicados no código antes do lançamento comercial.",
    ],
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
    status: "Em produção · em evolução",
    shortDescription:
      "Plataforma multi-tenant para lojistas controlarem clientes, compras, pontuação, descontos e indicadores comerciais.",
    overview:
      "O Fidelidade organiza clientes, compras, itens e pontuação em uma plataforma multi-tenant usada por lojistas. O sistema oferece dashboard, filtros por período e recursos de consulta para a rotina de acompanhamento das vendas. As regras de pontuação e validade vivem no próprio PostgreSQL, em funções que garantem o mesmo cálculo independentemente de quem chama.",
    problem:
      "Controles manuais e planilhas tornam difícil conferir valores, acompanhar clientes recorrentes e aplicar corretamente regras de desconto e pontuação. Pequenas inconsistências de arredondamento ou data podem comprometer relatórios inteiros.",
    role: [
      "Desenvolvimento de funcionalidades de clientes, compras e itens de compra.",
      "Implementação das regras de desconto por produto e desconto total na nota.",
      "Rateio proporcional de descontos entre itens, com controle de arredondamento.",
      "Ajustes no dashboard, filtros por período e paginação de vendas.",
      "Normalização de datas considerando o fuso America/Sao_Paulo.",
      "Análise de divergências entre relatórios externos e dados persistidos.",
      "Versionamento do schema como migrations, a partir do banco de produção.",
      "Endurecimento de permissões: funções sem acesso anônimo e isolamento entre lojistas restaurado no RLS.",
      "Especificação das próximas regras em contratos antes da implementação.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "PL/pgSQL",
      "Vercel",
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
      "Descobrir que produção tinha correções que não existiam em arquivo nenhum — e passar a tratar o banco como fonte da verdade até o schema estar versionado.",
    ],
    outcome:
      "O case aprofundou o trabalho com regras financeiras, consistência de dados, relatórios e investigação de divergências — áreas em que pequenos detalhes técnicos têm impacto direto na confiança do sistema. Também mostrou o valor de colocar a regra de negócio perto dos dados: um cálculo no banco não diverge entre telas.",
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
    status: "Pré-lançamento · buscando testadores",
    shortDescription:
      "Hub para criar, configurar e conversar com agentes de IA personalizados, com orquestração multiagente, histórico, memória e base de conhecimento.",
    overview:
      "O Pandora explora IA como produto, e não apenas como uma sequência de prompts. A aplicação organiza agentes, personalidade, conversas, mensagens e conhecimento para permitir experiências persistentes e reutilizáveis. Uma rodada pode envolver vários agentes em sequência, com síntese final transmitida em tempo real, e cada agente consulta a própria base de conhecimento por busca vetorial. Nasceu como ferramenta interna e está sendo preparado para virar produto, com organizações isoladas e cobrança por créditos de uso.",
    problem:
      "Conversas isoladas e prompts soltos dificultam a continuidade e a especialização de agentes. Sem uma estrutura própria, contexto, histórico e conhecimento ficam fragmentados e difíceis de reaproveitar.",
    role: [
      "Planejamento da arquitetura e das entidades principais.",
      "Desenvolvimento do chat e dos fluxos multiagente.",
      "Persistência de agentes, conversas e mensagens no Supabase.",
      "Integração com modelos Gemini para geração e embeddings.",
      "Organização de personalidade, memória e base de conhecimento.",
      "Refatoração do orquestrador em um gerador de eventos testável, com o endpoint de streaming reduzido a um adaptador.",
      "Fechamento das policies abertas do banco e suíte de testes automatizados com CI.",
      "Modelo de precificação por créditos, ponderado pelo custo real de cada rodada multiagente.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini",
      "Vitest",
      "GitHub Actions",
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
      "Isolar organizações sem clonar os agentes tutoriais que todas compartilham — eles vivem numa organização de sistema, só de leitura.",
      "Transformar o custo variável de IA em preço: uma resposta com vários agentes custa bem mais que uma resposta simples, e o crédito precisa refletir isso.",
    ],
    outcome:
      "O projeto amplia a experiência com IA aplicada, persistência de contexto e modelagem de um produto no qual agentes, memória e conhecimento fazem parte da arquitetura — e com o caminho de ferramenta interna para produto: testes, isolamento, segurança e custo por uso.",
    highlights: ["Multiagente", "Gemini", "RAG / pgvector", "Supabase"],
    nextSteps: [
      "Abrir para os primeiros testadores externos.",
      "Implementar outros provedores de modelo além do Gemini.",
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
    cardTitle: "SolaBridge — contabilidade e NFS-e para quem não é contador",
    category: "Produto / Contabilidade",
    status: "De projeto acadêmico a produto · registro no INPI",
    shortDescription:
      "Sistema multi-tenant de contabilidade por partidas dobradas e emissão de NFS-e, com conciliação bancária por Open Finance.",
    overview:
      "O SolaBridge nasceu em grupo na disciplina de Introdução à Contabilidade do curso de ADS e cresceu além do escopo acadêmico. Hoje reúne um motor contábil de partidas dobradas — plano de contas, lançamentos, balanço, DRE, razão e liquidez —, compras e vendas que lançam direto na contabilidade, conciliação bancária via Open Finance e um fluxo de emissão de NFS-e com DANFSe fiel à nota técnica nacional. O software teve pedido de registro no INPI em 2026.",
    problem:
      "A reforma tributária e a transição para a NFS-e Nacional deixaram pequenos prestadores de serviço entre duas opções ruins: o emissor gratuito do governo, instável durante a transição, ou ferramentas que existem para vender contabilidade. O desafio é oferecer emissão confiável com contabilidade de verdade por trás, para quem não é desenvolvedor nem contador.",
    role: [
      "Desenvolvimento do frontend em React 19, com design system próprio.",
      "Wizard de emissão de NFS-e em etapas e pré-visualização do DANFSe campo a campo conforme a nota técnica.",
      "Telas do módulo contábil espelhando os métodos do backend, para facilitar a troca de dados simulados por API.",
      "Integração do frontend com a API Laravel: autenticação, tratamento de erros e validação por campo.",
      "Pesquisa de mercado e definição do posicionamento e dos planos.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Open Finance (Pluggy)",
      "NFS-e Nacional",
    ],
    features: [
      "Contabilidade por partidas dobradas",
      "Balanço, DRE, razão e liquidez",
      "Compras e vendas lançadas na contabilidade",
      "Conciliação bancária via Open Finance",
      "Emissão de NFS-e em etapas",
      "Pré-visualização do DANFSe",
      "Multi-tenant com perfis de acesso",
      "Estoque em construção",
    ],
    challenges: [
      "Garantir que débito e crédito fechem em tempo real na interface, com a mesma regra do backend.",
      "Reproduzir o DANFSe bloco a bloco a partir da nota técnica oficial.",
      "Adiar de propósito a complexidade de IBS/CBS, cujas alíquotas mudam até 2033, sem bloquear o resto do produto.",
      "Separar o que é vendável hoje do que depende de uma API fiscal externa ainda em maturação.",
    ],
    outcome:
      "O projeto mostrou como um trabalho acadêmico pode virar produto quando o problema é real: a mesma base contábil passou a sustentar conciliação bancária, emissão fiscal e uma proposta comercial própria.",
    highlights: ["Partidas dobradas", "NFS-e", "Open Finance", "Laravel"],
    nextSteps: [
      "Substituir os dados simulados restantes por chamadas à API.",
      "Ativar a transmissão de NFS-e quando a API nacional estiver estável.",
    ],
    links: [{ label: "Ver no ar", href: "https://bridge.solasoftware.com.br" }],
    images: [
      "/images/projects/solabridge/solabridge-dashboard.jpg",
      "/images/projects/solabridge/solabridge-emissao-nfse.jpg",
      "/images/projects/solabridge/solabridge-clientes.jpg",
    ],
    featured: true,
    icon: "accounting",
  },
  {
    slug: "axios-calc",
    title: "Axios Calc",
    cardTitle: "Axios Calc — custo e orçamento para impressão 3D",
    category: "Produto / Ferramenta",
    status: "No ar · pré-lançamento",
    shortDescription:
      "Calculadora de custo e orçamento para impressão 3D em resina e filamento, com histórico de orçamentos e contas isoladas por usuário.",
    overview:
      "O Axios Calc nasceu para precificar as impressões de um pequeno negócio de impressão 3D e virou produto. Calcula em tempo real o custo de material, energia, acabamento e frete, para resina e para filamento (PLA, ABS, PETG, TPU e nylon), guarda o histórico de orçamentos e separa os dados por conta, com painel administrativo e período de teste.",
    problem:
      "Quem vende impressão 3D costuma precificar no olho ou em planilha, e esquece custos que só aparecem depois: energia, falhas, acabamento. A concorrência real não é outro software, é a planilha gratuita — então o produto precisa entregar orçamento e histórico, não só uma conta.",
    role: [
      "Desenvolvimento full stack, do cálculo à interface.",
      "Modelagem dos materiais, impressoras e predefinições por conta.",
      "Autenticação, isolamento por usuário e painel administrativo.",
      "Empacotamento em Docker e publicação na VPS.",
      "Pesquisa de concorrentes e definição dos planos.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Docker / Traefik"],
    features: [
      "Cálculo de resina e filamento",
      "Custos de energia, acabamento e frete",
      "Histórico de orçamentos",
      "Materiais e impressoras por conta",
      "Painel administrativo",
      "Período de teste por conta",
    ],
    challenges: [
      "Estender para filamento um cálculo que começou só para resina, sem duplicar a lógica.",
      "Isolar dados por conta em um banco SQLite simples de operar.",
      "Posicionar como ferramenta de gestão de orçamentos, e não como mais uma calculadora gratuita.",
    ],
    outcome:
      "O projeto é um exemplo de ferramenta interna que virou produto: o cálculo já resolvia o problema do negócio original, e a camada de contas, histórico e administração é o que o torna vendável.",
    highlights: ["Next.js", "Prisma", "SQLite", "Produto"],
    links: [{ label: "Ver no ar", href: "https://axios.solasoftware.com.br" }],
    icon: "studio",
  },
  {
    slug: "safeweb-emissoes",
    title: "Relatórios de emissão",
    cardTitle: "Relatórios de emissão — coleta automatizada e análise de renovação",
    category: "Automação / Dados",
    status: "Em operação · modo desatendido em implantação",
    shortDescription:
      "Coleta mensal de relatórios de um portal com login por certificado digital e análise de renovação, funil e grupos econômicos.",
    overview:
      "O projeto tem duas partes. A primeira baixa, mês a mês, os relatórios de emissão de certificados digitais de um portal sem API, com login por certificado. A segunda consolida mais de dois anos de relatórios, enriquece os documentos com dados públicos de CNPJ e gera planilhas e um painel com taxa de renovação, funil de clientes e agrupamento por grupo econômico.",
    problem:
      "Os dados de emissão existiam, mas presos em relatórios mensais baixados à mão. Sem consolidação, não havia como responder perguntas simples: quantos clientes renovaram, quem está para vencer, quais certificados pertencem ao mesmo grupo econômico.",
    role: [
      "Automação do portal com Playwright, compartilhando a lógica de formulário entre o modo manual e o agendado.",
      "Modo desatendido com login mTLS por certificado A1 e envio para um Drive compartilhado.",
      "Pipeline de consolidação e tratamento em pandas.",
      "Enriquecimento de CNPJ com cache, limite de ritmo e retentativa.",
      "Detecção de grupos econômicos com union-find.",
      "Painel em Streamlit com filtros e detalhamento.",
    ],
    stack: ["Node.js", "Playwright", "Python", "pandas", "Streamlit", "Plotly", "BrasilAPI", "Google Drive API"],
    features: [
      "Download mensal automatizado",
      "Login por certificado digital",
      "Consolidação de relatórios mensais",
      "Enriquecimento de CNPJ com cache",
      "Taxa de renovação e funil",
      "Grupos econômicos",
      "Painel com filtros",
    ],
    challenges: [
      "Certificado A3 vive em token com chave não exportável, então não serve para automação desatendida — o modo agendado depende de um A1.",
      "Definir renovação de forma justa: só entra na conta quem já teve o certificado vencido dentro da janela observada.",
      "Automação silenciosa que quebra é pior que o processo manual: a rotina precisa avisar quando falha, inclusive antes do certificado vencer.",
    ],
    outcome:
      "O case mostra os dois lados de uma automação de dados: a coleta confiável num portal sem API e a análise que transforma arquivos acumulados em respostas para o negócio.",
    highlights: ["Playwright", "mTLS", "pandas", "Streamlit"],
    isPrivate: true,
    icon: "data",
  },
  {
    slug: "redmilab",
    title: "RedmiLab",
    cardTitle: "RedmiLab — homelab num celular Android",
    category: "Infraestrutura / Laboratório",
    status: "Laboratório pessoal · em uso diário",
    shortDescription:
      "Um celular antigo com root transformado em servidor pessoal: serviços em Go, gateway de WhatsApp, assistente financeiro com IA e deploy por git push.",
    overview:
      "O RedmiLab é um laboratório de infraestrutura montado num Redmi Note 8 Pro parado. Com root e Termux, o aparelho roda serviços nativos em sessões gerenciadas, acessíveis só pela rede privada. Hoje hospeda um gateway de WhatsApp, um assistente financeiro que entende texto, foto de nota fiscal e áudio, um painel de status e sessões remotas de desenvolvimento. É um projeto pessoal, separado de trabalho e clientes — a liberdade para quebrar é o objetivo.",
    problem:
      "Pagar por serviços para experimentar infraestrutura, e depender de uma VPS para projetos pessoais, não fazia sentido com um aparelho ocioso na gaveta. O desafio era descobrir o que um celular Android realmente aguenta como servidor: sem Docker, sem systemd e com um kernel que não expõe o que ferramentas comuns esperam.",
    role: [
      "Desbloqueio, root sem recovery customizado e limpeza do sistema.",
      "Arquitetura de serviços nativos no Termux, cada um em sua sessão.",
      "Deploy por git push com hook que compila e reinicia só o serviço afetado.",
      "Gateway de WhatsApp em Go e assistente financeiro sobre ele.",
      "Acesso remoto por Tailscale e SSH, sem portas abertas na internet.",
    ],
    stack: ["Go", "SQLite", "Gemini", "WhatsApp", "Termux", "Tailscale", "Git hooks", "Android"],
    features: [
      "Serviços nativos gerenciados",
      "Deploy por git push",
      "Gateway de WhatsApp",
      "Assistente financeiro com texto, foto e áudio",
      "Painel de status",
      "Acesso só pela rede privada",
    ],
    challenges: [
      "Docker não roda — o kernel Android não expõe os cgroups necessários —, então tudo virou serviço nativo.",
      "O aparelho não religa os serviços sozinho após reboot, e nada pode assumir inicialização automática.",
      "Recuperar um serviço remotamente quando se está fora de casa e o único acesso é pelo próprio celular.",
      "Reescrever em Go um assistente que antes era um workflow no n8n, com ferramentas fechadas para a IA em vez de acesso genérico ao banco.",
    ],
    outcome:
      "O laboratório ensinou infraestrutura pelo caminho difícil: cada ferramenta que costuma vir pronta precisou ser substituída por algo que coubesse na plataforma. E virou uso real — o assistente financeiro roda todo dia.",
    highlights: ["Go", "Homelab", "WhatsApp", "IA"],
    icon: "lab",
  },
  {
    slug: "recepcao-eventos",
    title: "Recepção de eventos",
    cardTitle: "Recepção de eventos — cadastro, sorteio e rankings em tempo real",
    category: "Aplicação web / PWA",
    status: "MVP concluído · validação em evento",
    shortDescription:
      "Aplicação mobile-first para a recepção de encontros de motociclistas: cadastro rápido, sorteio, troféus e rankings de clubes e cidades.",
    overview:
      "A aplicação foi pensada para a mesa de recepção de um encontro de motociclistas. Cadastra participantes com grupo, categoria, cargo, placa e cidade, e a partir disso resolve o que o evento precisa: troféu por grupo, um cupom de sorteio por pessoa, contagem de pessoas e motos e rankings. Funciona em tablets, com a marca de cada evento, e foi generalizada depois em um modelo reaproveitável.",
    problem:
      "Na recepção de um evento, tudo acontece ao mesmo tempo e em papel: fila, cadastro, contagem e sorteio. Erros de digitação duplicam participantes e desequilibram rankings e premiações.",
    role: [
      "Levantamento das regras de negócio com o organizador antes do código.",
      "Contratos compartilhados entre frontend e backend com validação por esquema.",
      "Plano de execução em marcos, com implementação e revisão separadas.",
      "Suíte de testes automatizados cobrindo as regras de troféu, sorteio e contagem.",
      "Generalização do projeto em um modelo para outros eventos.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "SQLite", "Zod", "PWA"],
    features: [
      "Cadastro mobile-first",
      "Troféu por grupo",
      "Um cupom de sorteio por pessoa",
      "Contagem de pessoas e motos",
      "Rankings de clubes e cidades",
      "Marca por evento",
    ],
    challenges: [
      "Escrever as regras antes do código — visitante, colete individual, piloto e garupa — para não descobrir exceção no dia do evento.",
      "Manter um único evento ativo por vez sem perder o histórico dos anteriores.",
      "Desenhar para tablet em uso rápido, com pouca digitação e sem ambiguidade.",
    ],
    outcome:
      "O projeto mostrou o valor de planejar com contratos e testes mesmo em algo pequeno: o MVP saiu completo, com 97 testes, e virou base para outros eventos.",
    highlights: ["PWA", "Contratos", "Testes", "Mobile-first"],
    icon: "event",
  },
  {
    slug: "sola-software",
    title: "Sola Software",
    cardTitle: "Sola Software — produtos e sistemas sob medida",
    category: "Marca / Startup",
    status: "Primeiros clientes · produtos no ar",
    shortDescription:
      "Software house criada por três sócios para desenvolver produtos próprios e sistemas sob medida para pequenos negócios.",
    overview:
      "A Sola Software reúne os produtos que nasceram como projetos próprios — Eliza, Axios Calc, SolaBridge e Pandora — e os serviços sob medida para pequenos negócios. A identidade visual está definida e documentada, o site institucional está no ar e os produtos rodam em subdomínios da marca. Em 2026 vieram os primeiros projetos para clientes e o primeiro registro de software no INPI.",
    problem:
      "Transformar uma iniciativa técnica em uma operação coerente exige alinhar proposta de valor, identidade, responsabilidades e capacidade de entrega — além do próprio desenvolvimento dos produtos.",
    role: [
      "Cofundador, responsável por direção técnica, arquitetura e relacionamento com clientes.",
      "Desenvolvimento dos produtos e do site institucional.",
      "Identidade visual, posicionamento e materiais comerciais.",
      "Precificação dos produtos a partir de auditoria de funcionalidades e pesquisa de concorrentes.",
      "Orçamentos e propostas para os primeiros clientes.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Docker / VPS"],
    features: [
      "Produtos digitais próprios",
      "Sistemas web sob medida",
      "Landing pages e sites",
      "Automações de processos",
    ],
    challenges: [
      "Alinhar produto, marca e viabilidade de execução.",
      "Precificar produtos com custos muito diferentes: alguns têm custo fixo, outros pagam IA por mensagem.",
      "Priorizar oportunidades sem dispersar a capacidade de entrega de uma equipe pequena.",
      "Não vender como fato o que ainda é hipótese: público, dores e diferenciais seguem em validação.",
    ],
    outcome:
      "A iniciativa amplia o contato com decisões de produto e negócio — precificação, posicionamento, proposta e atendimento —, indo além da implementação técnica isolada.",
    highlights: ["Produto", "Precificação", "Marca", "Negócios"],
    nextSteps: [
      "Formalizar a empresa e transferir para ela os registros de software.",
      "Validar público e proposta com os primeiros usuários dos produtos.",
    ],
    links: [{ label: "Site da Sola", href: "https://solasoftware.com.br" }],
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
  {
    slug: "disparo-mensal-whatsapp",
    title: "Disparo mensal",
    cardTitle: "Disparo mensal — automação de WhatsApp com idempotência",
    category: "Automação / Integração",
    status: "Concluído · aguardando implantação",
    shortDescription:
      "Rotina agendada que lê uma base de clientes em planilha, seleciona quem deve ser avisado e dispara um lembrete por WhatsApp — sem nunca enviar duas vezes para a mesma pessoa.",
    overview:
      "Uma empresa de sistemas precisava lembrar seus clientes, duas vezes por mês, de transmitir documentos fiscais antes do fechamento. O aviso era manual. O projeto transformou isso em uma rotina agendada que lê a base em Google Sheets, aplica as regras de elegibilidade, normaliza os telefones e envia pela Evolution API. A maior parte do esforço não foi o envio em si: foi garantir que a rotina nunca mande a mesma mensagem duas vezes, mesmo executando em três dias diferentes, caindo no meio ou sendo retomada.",
    problem:
      "Disparo em massa parece simples até encarar o que dá errado. A base é uma planilha editada todos os dias por várias pessoas, então o público muda no meio da execução. Telefones vêm com máscaras, prefixos de discagem e lixo de digitação. Um mesmo número atende a vários contratos, o que faz o cliente receber a mensagem repetida. E o número de envio é o mesmo do atendimento real da empresa: um bloqueio por spam derrubaria o suporte inteiro, não só a automação.",
    role: [
      "Rodada de planejamento antes do código: contrato técnico e specs por módulo.",
      "Análise exploratória da base real para descobrir as regras que ninguém tinha escrito.",
      "Modelagem do controle de estado em SQLite, com idempotência garantida pelo banco.",
      "Normalização de telefones para E.164, com relatório de exceções em vez de descarte silencioso.",
      "Cliente HTTP com retentativa, classificação de erro e ritmo de envio.",
      "Calendário de execução com regra de dias úteis e recuperação de dia perdido.",
      "Suíte de testes automatizados, com rede sempre simulada.",
      "Revisão final de segurança e privacidade antes da publicação do repositório.",
    ],
    stack: [
      "Python",
      "Google Sheets API",
      "gspread",
      "SQLite",
      "Evolution API",
      "WhatsApp",
      "pytest",
      "cron / VPS",
    ],
    features: [
      "Leitura filtrada da base de clientes em planilha",
      "Normalização e deduplicação de telefones",
      "Controle de estado com idempotência por ciclo",
      "Divisão do envio em três dias, com recuperação automática",
      "Modo de simulação como comportamento padrão",
      "Envio de amostra para validação sem consumir o ciclo",
      "Relatório de exceções em CSV para correção na origem",
      "Guarda de regressão contra mudanças na planilha",
    ],
    challenges: [
      "Impedir envio duplicado: a garantia ficou em um índice único no banco, não em uma verificação no código — verificação é coisa que se esquece de repetir em um caminho novo.",
      "Congelar o público no primeiro dia da janela. Como a planilha muda diariamente, recalcular no segundo dia embaralharia a divisão e faria alguém receber duas vezes e outro alguém nenhuma.",
      "Ancorar o calendário em dias úteis, não em datas fixas. O levantamento dos ciclos seguintes mostrou que a maioria caía em fim de semana, o que devolveria todo o volume para um único dia e anularia a divisão.",
      "Detectar dado sujo sem descartar em silêncio: número de telefone fixo disfarçado de celular por causa do prefixo de discagem, e registros de preenchimento que passavam por válidos.",
      "Tratar o risco de bloqueio como restrição de projeto, com ritmo variável, teto diário e implantação gradual — e não como detalhe de implementação.",
    ],
    outcome:
      "A rotina ficou pronta e coberta por testes, com envio real validado antes da implantação. O resultado mais útil, porém, foi o que a análise da base revelou: registros com telefone inválido, contratos apontando para o mesmo contato e uma linha em que a própria empresa constava como cliente — que teria feito o sistema enviar o lembrete para o próprio número de atendimento. Cada um desses casos virou um item de relatório para correção na origem, em vez de um erro silencioso em produção.",
    highlights: ["Python", "Google Sheets", "SQLite", "Evolution API"],
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
