"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: "light", label: "Ativar tema claro", Icon: Sun },
  { value: "dark", label: "Ativar tema escuro", Icon: Moon },
] as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Tema"
      className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-1"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = mounted && resolvedTheme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={active}
            className={cn(
              "flex size-7 items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-focus-ring motion-reduce:transition-none",
              active
                ? "bg-surface-hover text-text-brand"
                : "text-text-tertiary hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
