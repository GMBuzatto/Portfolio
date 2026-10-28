"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import("mermaid")
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: resolvedTheme === "light" ? "default" : "dark",
        });
        const result = await mermaid.render(id, chart);
        if (!cancelled) setSvg(result.svg);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  if (failed) {
    return (
      <pre className="overflow-x-auto rounded-lg border bg-background-subtle p-4 text-sm">
        {chart}
      </pre>
    );
  }

  if (!svg) {
    return <div aria-busy className="h-48 animate-pulse rounded-lg bg-background-subtle" />;
  }

  return (
    <div
      role="img"
      aria-label="Diagrama de arquitetura"
      className="overflow-x-auto rounded-lg border bg-background-subtle p-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
