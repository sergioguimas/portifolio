# Portfólio — Sérgio Guimarães

Portfólio profissional voltado a cases reais de desenvolvimento web, SaaS, automação e integrações. O projeto apresenta não apenas as tecnologias utilizadas, mas o problema, a atuação, as regras de negócio e os aprendizados de cada trabalho.

## Proposta

> Desenvolvimento web, automação e produtos digitais para resolver problemas reais de negócio.

A home organiza o perfil, os tipos de problema atendidos, a stack e os projetos em destaque. Cada case possui uma página dedicada e reaproveita a mesma fonte tipada usada pelos cards e pela API pública do portfólio.

## Cases em destaque

- **Eliza:** SaaS multi-tenant para clínicas, com agenda, PWA e automações via WhatsApp.
- **Fidelidade:** sistema comercial com compras, pontuação, descontos e consistência financeira.
- **Autoatendimento e-Útil:** formulário multi-etapas integrado a backend em Go e ambiente WordPress.
- **Pandora:** hub multiagente de IA com conversas, memória e base de conhecimento.

O portfólio também apresenta SolaBridge, Sola Software, O Cravo e a Rosa e um conjunto de automações internas. Projetos privados são identificados de forma transparente e têm informações sensíveis omitidas.

## Arquitetura de conteúdo

Os dados ficam centralizados para evitar divergência entre interface, API e páginas:

```text
src/data/projects.ts   # conteúdo e tipos dos cases
src/data/stacks.ts     # perfil e tecnologias por contexto de uso
```

Esses arquivos alimentam:

- cards da home;
- páginas em `/projetos/[slug]`;
- `GET /api/projects`;
- `GET /api/projects/[slug]`;
- `GET /api/stacks`;
- metadata das páginas de projeto.

## Stack do portfólio

- Next.js 16 e React 19;
- TypeScript;
- Tailwind CSS;
- Framer Motion;
- Lucide React;
- next-themes.

## Executando localmente

Requisitos: Node.js compatível com Next.js 16 e npm.

```bash
npm install
npm run dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Validação

```bash
npm run lint
npm run build
```

## Estrutura principal

```text
src/
├── app/
│   ├── api/                 # endpoints de projetos e stack
│   ├── projetos/            # páginas dedicadas dos cases
│   ├── layout.tsx           # metadata global
│   └── page.tsx             # composição da home
├── components/portfolio/    # seções, cards e template de case
├── data/                    # fontes centrais de conteúdo
└── hook/                    # interações da navegação e do hero
```

## Privacidade

O repositório do portfólio não expõe dados de clientes, métricas não verificadas ou links privados. Quando um trabalho não pode ser aberto, o conteúdo usa termos como “case privado”, “projeto interno” e “informações sensíveis omitidas”.
