import Link from "next/link";

export const metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-heading text-sm text-text-highlight">404</p>

      <h1 className="text-2xl font-bold tracking-tight">Página não encontrada</h1>

      <p className="max-w-prose text-sm text-text-secondary">
        O endereço que você abriu não existe ou foi movido.
      </p>

      <Link
        href="/"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
