# Portfolio · Gabriel Martin Buzatto

Site pessoal com apresentação, experiência profissional e projetos públicos. Página única,
pré-renderizada de forma estática e preparada para deploy na Vercel.

## Stack

| Área            | Tecnologias                                                  |
| --------------- | ------------------------------------------------------------ |
| Framework       | Next.js 15 (App Router), React 19                            |
| Linguagem       | TypeScript em modo `strict`                                  |
| Estilo          | Tailwind CSS v4, `tw-animate-css`, `clsx` + `tailwind-merge` |
| Componentes     | shadcn/ui (configurado via `components.json`), lucide-react  |
| Tema            | next-themes (escuro por padrão, com alternância para claro)  |
| Validação       | Zod (variáveis de ambiente e conteúdo do site)               |
| Qualidade       | ESLint 9, Prettier + `prettier-plugin-tailwindcss`, Vitest   |
| Pacotes/runtime | pnpm 11, Node.js 22+                                         |
| CI/CD           | GitHub Actions (gates de PR) e Vercel (preview e produção)   |

## Estrutura

```
src/
├── app/                    # rotas (layout, página inicial, 404)
├── components/
│   ├── layout/             # header, footer, alternância de tema
│   ├── brand-icons.tsx     # ícones SVG de GitHub e LinkedIn
│   ├── section-heading.tsx
│   └── theme-provider.tsx
├── features/               # um diretório por domínio
│   ├── profile/            # dados pessoais, Hero e Sobre
│   ├── experience/         # linha do tempo profissional
│   └── projects/           # projetos públicos do GitHub
│       ├── components/
│       ├── data.ts         # conteúdo
│       └── schema.ts       # schema Zod do conteúdo
├── lib/
│   ├── env.ts              # variáveis de ambiente validadas
│   └── utils.ts            # cn()
└── styles/
    └── globals.css         # tokens de tema
public/                     # currículo em PDF
```

Páginas em `app/` são finas e só compõem seções. Cada domínio em `features/` concentra seus
componentes, seus dados e o schema que valida esses dados.

## Boas práticas adotadas

### Conteúdo como dado tipado

Textos, experiências e projetos não ficam escritos dentro dos componentes. Eles vivem em
`features/<domínio>/data.ts` e passam por um schema Zod no momento do import. Um dado
inválido (URL malformada, campo vazio) quebra o build, em vez de chegar quebrado na página.
Para atualizar o site, normalmente basta editar um `data.ts`.

### Tokens de design em vez de cores soltas

Cores, raios e fontes são definidos uma única vez como CSS variables em `globals.css` e
expostos ao Tailwind via `@theme inline`. Componentes usam apenas tokens semânticos
(`bg-surface`, `text-text-brand`, `border-border`), nunca hex nem classes cruas como
`bg-blue-600`. Trocar a paleta ou ajustar um tema não exige mexer em componentes.

Os dois temas (claro e escuro) foram conferidos contra o contraste mínimo WCAG AA para texto.

### Configuração validada

`src/lib/env.ts` valida as variáveis de ambiente com Zod uma única vez. O restante do código
lê de `env`, nunca de `process.env` diretamente. Se uma variável obrigatória faltar, o build
falha com uma mensagem clara. O catálogo de variáveis fica em `.env.example`.

### Acessibilidade

- HTML semântico: `header`, `main`, `section` com `aria-labelledby`, `nav`, listas reais;
- links externos com `rel="noopener noreferrer"` e texto para leitores de tela
  (`sr-only`) quando o link é só um ícone;
- ícones decorativos com `aria-hidden`;
- foco visível em controles interativos;
- animações respeitam `prefers-reduced-motion`;
- alternância de tema com `aria-pressed` e sem marcar opção antes da hidratação, evitando
  troca visível na tela.

### Performance e SEO

- página inteira pré-renderizada como estática (SSG);
- fontes carregadas com `next/font` (sem requisição extra ao Google Fonts em tempo de uso);
- imagem otimizada com `next/image`;
- metadata e Open Graph definidos no layout, com `metadataBase` vindo da configuração.

### Código consistente

- TypeScript `strict` e alias `@/` para imports a partir de `src/`;
- ESLint com `next/core-web-vitals` e `next/typescript`;
- Prettier com ordenação automática das classes Tailwind, usando os tokens do projeto;
- `.gitattributes` forçando finais de linha LF em qualquer sistema operacional;
- versões de dependências fixadas e `packageManager` declarado no `package.json`.

## Gates de qualidade

Os mesmos checks rodam localmente e no CI:

| Gate      | Comando             | O que verifica                             |
| --------- | ------------------- | ------------------------------------------ |
| Formato   | `pnpm format:check` | Formatação Prettier                        |
| Lint      | `pnpm lint`         | Regras ESLint                              |
| Tipos     | `pnpm typecheck`    | `tsc --noEmit`                             |
| Testes    | `pnpm test`         | Vitest                                     |
| Auditoria | `pnpm audit`        | Vulnerabilidades críticas nas dependências |
| Build     | `pnpm build`        | Build de produção do Next.js               |

**Hook de pre-push** (`.githooks/pre-push`): bloqueia push direto para a `main` e roda format,
lint, typecheck e test antes de enviar. É instalado automaticamente pelo `pnpm install`
(script `prepare`). Em emergência: `PUSH_SEM_GATE=1 git push`.

**CI** (`.github/workflows/ci.yml`): em todo pull request para a `main`, quatro jobs rodam em
paralelo (lint, test, audit e build). Execuções antigas do mesmo PR são canceladas e o
workflow tem permissão apenas de leitura.

## Fluxo de trabalho

- `main` é a branch de produção e recebe mudanças apenas por pull request com CI verde;
- trabalho do dia a dia em branches `feat/*`, `fix/*` ou `chore/*`;
- mensagens de commit no padrão [Conventional Commits](https://www.conventionalcommits.org/).

## Rodando localmente

Pré-requisitos: Node.js 22+ e pnpm 11.

```bash
pnpm install
cp .env.example .env.local
pnpm dev        # http://localhost:3000
```

### Scripts

| Script                         | Descrição                        |
| ------------------------------ | -------------------------------- |
| `pnpm dev`                     | Servidor de desenvolvimento      |
| `pnpm build`                   | Build de produção                |
| `pnpm start`                   | Serve o build de produção        |
| `pnpm lint` / `lint:fix`       | ESLint (com correção automática) |
| `pnpm format` / `format:check` | Prettier (escreve / só verifica) |
| `pnpm typecheck`               | Checagem de tipos                |
| `pnpm test` / `test:watch`     | Testes com Vitest                |

### Variáveis de ambiente

| Variável               | Obrigatória | Descrição                                          |
| ---------------------- | ----------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Sim         | URL pública do site, base da metadata e Open Graph |

## Deploy

O projeto é detectado automaticamente pela Vercel como Next.js, sem `vercel.json`.

1. Importar o repositório na Vercel;
2. definir `NEXT_PUBLIC_SITE_URL` nos ambientes Production e Preview;
3. cada pull request gera um preview, e cada merge na `main` publica em produção.
