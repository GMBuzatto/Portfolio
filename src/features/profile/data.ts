import { profileSchema } from "./schema";

export const profile = profileSchema.parse({
  name: "Gabriel Martin Buzatto",
  role: "Desenvolvedor",
  headline:
    "Full-Stack com foco em backend: APIs, sistemas distribuídos, arquiteturas orientadas a eventos e soluções com IA.",
  about: [
    "Sou desenvolvedor Full-Stack com mais de 4 anos de experiência construindo aplicações e serviços, com foco em backend usando JavaScript/TypeScript, Node.js, C#/.NET, Python e SQL.",
    "Trabalho com APIs, middlewares, integrações entre sistemas e sistemas distribuídos, em arquiteturas assíncronas e orientadas a eventos com RabbitMQ, Redis, PostgreSQL, MongoDB e Cassandra.",
    "Também atuo com infraestrutura e DevOps (AWS, DigitalOcean, Docker, CI/CD, Linux, Nginx e Keycloak) e com soluções de Inteligência Artificial usando LLMs, RAG, AI Agents e integração com ferramentas externas. No front-end, React e Next.js.",
  ],
  focusAreas: [
    {
      title: "Backend & APIs",
      description: "Node.js, .NET, APIs REST, microsserviços e integrações corporativas.",
    },
    {
      title: "Sistemas distribuídos",
      description: "Mensageria com RabbitMQ, cache com Redis e processamento assíncrono.",
    },
    {
      title: "IA aplicada",
      description: "LLMs, RAG, AI Agents, tool calling e classificação de informações.",
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Linux, Nginx e Keycloak em produção.",
    },
  ],
  email: "gabrielmartinbuzatto1999@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/gabriel-martin-buzatto-4a8307226/",
  githubUrl: "https://github.com/GMBuzatto",
  avatarUrl: "https://avatars.githubusercontent.com/u/94044131?v=4",
  resumePath: "/curriculo-gabriel-martin-buzatto.pdf",
});
