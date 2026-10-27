import { z } from "zod";
import { experienceSchema } from "./schema";

export const experiences = z.array(experienceSchema).parse([
  {
    company: "Ba Express – LogixSphere (UK)",
    role: "Desenvolvedor Pleno",
    period: "Nov 2025 – Atual",
    current: true,
    highlights: [
      "Liderança técnica no desenvolvimento e evolução de sistemas distribuídos, garantindo qualidade, segurança, escalabilidade e alta disponibilidade.",
      "Revisões de código, definição de padrões de desenvolvimento e mentoria de desenvolvedores júnior.",
      "Soluções com IA usando LLMs, arquiteturas RAG, Agents e ferramentas externas para automação e processamento inteligente de informações.",
      "Arquiteturas assíncronas e orientadas a eventos para processamento de tarefas e integração entre serviços.",
      "Qualidade de software com testes automatizados (Jest), análise de código (SonarQube) e validação de schemas (Zod).",
    ],
    stack: ["LLMs", "RAG", "AI Agents", "Sistemas distribuídos", "Jest", "SonarQube", "Zod"],
  },
  {
    company: "ArcH",
    role: "Desenvolvedor Pleno",
    period: "Set 2023 – Fev 2026",
    highlights: [
      "Pipelines CI/CD e automações em AWS, reduzindo falhas em deploy em mais de 30%.",
      "Arquitetura orientada a eventos com RabbitMQ e cache distribuído com Redis, com alta disponibilidade e escalabilidade.",
      "Soluções web com React, Next.js, Node.js e .NET; microsserviços e APIs RESTful.",
      "Integração com Keycloak / Red Hat SSO para autenticação e segurança corporativa.",
    ],
    stack: ["React", "Next.js", "Node.js", ".NET", "RabbitMQ", "Redis", "Keycloak", "AWS"],
  },
  {
    company: "Registro Ponto",
    role: "Desenvolvedor Júnior",
    period: "Ago 2022 – Set 2023",
    highlights: [
      "Automação de processos administrativos com Google Apps Script, reduzindo tarefas manuais em até 50%.",
      "Aplicações internas com C#, .NET, Angular e PostgreSQL.",
      "Integração de sistemas de controle de ponto, com foco em confiabilidade e escalabilidade.",
      "Clean Code e SOLID aplicados para melhorar a manutenibilidade do software.",
    ],
    stack: ["C#", ".NET", "Angular", "PostgreSQL", "Google Apps Script"],
  },
]);
