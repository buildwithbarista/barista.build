import Link from "next/link";
import { DocsNav } from "@/components/docs-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
      <header className="flex items-center justify-between border-b border-border py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
          Barista
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/docs/getting-started" className="hover:text-foreground">
            Docs
          </Link>
          <a href="https://bench.barista.build" className="hover:text-foreground">
            Benchmarks
          </a>
          <a
            href="https://github.com/buildwithbarista/barista"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-10 py-10 md:flex-row md:gap-14">
        <aside className="md:w-56 md:shrink-0">
          <div className="md:sticky md:top-10">
            <DocsNav />
          </div>
        </aside>
        <main className="min-w-0 flex-1">
          <article className="docs-prose max-w-3xl">{children}</article>
        </main>
      </div>
    </div>
  );
}
