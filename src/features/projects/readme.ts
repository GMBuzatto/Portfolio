import { parseGithubRepository } from "./utils";

const ALERT_LABELS: Record<string, string> = {
  NOTE: "Nota",
  TIP: "Dica",
  IMPORTANT: "Importante",
  WARNING: "Atenção",
  CAUTION: "Cuidado",
};

/** Busca o README.md da branch padrão no build; retorna null se o GitHub não responder. */
export async function fetchReadme(repositoryUrl: string) {
  const { owner, repo } = parseGithubRepository(repositoryUrl);

  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`,
      { cache: "force-cache" },
    );
    if (!response.ok) return null;
    return convertGithubAlerts(await response.text());
  } catch {
    return null;
  }
}

/** Troca a sintaxe de alerta do GitHub (`> [!NOTE]`) por um título em negrito no blockquote. */
function convertGithubAlerts(markdown: string) {
  return markdown.replace(
    /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/gm,
    (_, type: string) => `> **${ALERT_LABELS[type]}**`,
  );
}

/** Resolve links e imagens relativos do README para o repositório no GitHub. */
export function resolveReadmeUrl(url: string, key: string, repositoryUrl: string) {
  const isAbsolute = /^([a-z][a-z\d+.-]*:|\/\/|#)/i.test(url);
  if (isAbsolute || url === "") return url;

  const { owner, repo } = parseGithubRepository(repositoryUrl);
  const path = url.replace(/^\.?\//, "");

  return key === "src"
    ? `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/${path}`
    : `https://github.com/${owner}/${repo}/blob/HEAD/${path}`;
}
