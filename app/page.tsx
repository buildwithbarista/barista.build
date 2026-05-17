import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="flex max-w-2xl flex-col items-start gap-8">
        <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Pre-release · v0.1 in active development
        </span>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Barista
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          A fast, fully Maven-compatible build tool for the JVM. Drop-in for
          existing Maven projects, with a content-addressed cache, a resolver
          built for correctness, and a daemon that stays out of your way.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Documentation, install instructions, and benchmarks land here as the
          project matures. Source is open and developed in the open.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/buildwithbarista/barista"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            View on GitHub
          </a>
          <a
            href="https://bench.barista.build"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Benchmarks
          </a>
        </div>
      </div>
    </main>
  );
}
