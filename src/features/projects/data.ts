import { z } from "zod";
import { projectSchema } from "./schema";

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
