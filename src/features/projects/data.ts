import { z } from "zod";
import { featuredProjectSchema, projectSchema, type Project } from "./schema";

export const featuredProject = featuredProjectSchema.parse({
  name: "ProMei",
  tagline: "SaaS multi-tenant de gestão comercial para MEIs",
  description:
    "Plataforma completa para microempreendedores controlarem estoque, itens, vendas, comprovantes em PDF, papéis e permissões, planos e assinaturas. Composta por uma API REST em NestJS (monolito modular) e um painel web em Next.js, com decisões de arquitetura registradas em ADRs.",
  language: "TypeScript",
  repositoryUrl: "https://github.com/GMBuzatto/ProMei",
  stack: [
    "NestJS 11",
    "Fastify",
    "Prisma 7",
    "PostgreSQL 16",
    "Next.js 15",
    "React 19",
    "Tailwind 4",
    "TanStack Query",
    "Docker",
  ],
  highlights: [
    {
      title: "Multi-tenancy em camadas",
      description:
        "Isolamento entre empresas com defesa em profundidade: Client Extension do Prisma, guard de rota e Row-Level Security no PostgreSQL, validados por teste cross-tenant em todo PR.",
    },
    {
      title: "Autorização fechada por padrão",
      description:
        "JWT curto com refresh token rotacionado e permissões recurso:ação validadas no banco, permitindo papéis customizados e revogação quase imediata.",
    },
    {
      title: "Consistência transacional",
      description:
        "Vendas como agregados transacionais com locks pessimistas em ordem fixa: estoque nunca negativo sob concorrência e numeração sequencial sem falhas.",
    },
    {
      title: "Auditoria e observabilidade",
      description:
        "Trilha de auditoria append-only garantida pelo banco, logs JSON estruturados, Sentry e correlation id ponta a ponta do front ao log.",
    },
    {
      title: "Camada de dados no front",
      description:
        "Client HTTP único com refresh single-flight, erros tipados por código de negócio, retry consciente e cache isolado por request entre tenants.",
    },
    {
      title: "Qualidade e entrega",
      description:
        "TypeScript strict, CI com lint, testes (Vitest, Supertest e Postgres real via Testcontainers), audit e build, além de deploy, rollback e backup automatizados.",
    },
  ],
});

export const projects = z.array(projectSchema).parse([
  {
    name: "CutOut",
    description:
      "Utilitário que processa fotos, recorta o fundo e retorna imagens sem fundo, facilitando a automação de tarefas como edição, criação de avatares ou integração em pipelines de mídia.",
    language: "TypeScript",
    repositoryUrl: "https://github.com/GMBuzatto/CutOut",
  },
  {
    name: "Formaty",
    description:
      "Aplicação web para conversão rápida e eficiente de imagens entre diferentes formatos. Faça upload, escolha o formato desejado e baixe sua imagem processada em segundos.",
    language: "TypeScript",
    repositoryUrl: "https://github.com/GMBuzatto/Formaty",
  },
  {
    name: "YouTranslate",
    description:
      "Tradutor automático de vídeos: adiciona legendas em português a falas em inglês, sem esforço.",
    language: "TypeScript",
    repositoryUrl: "https://github.com/GMBuzatto/YouTranslate",
  },
]);

export const allProjects: Project[] = [featuredProject, ...projects];
