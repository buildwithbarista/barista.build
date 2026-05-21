import Link from "next/link";
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
          A fully Maven-compatible build tool for the JVM. Drop-in for
          existing Maven projects, with a content-addressed cache, a resolver
          built for correctness, and a daemon that stays out of your way.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          On our walkthrough corpus — Spring Boot starter-web, ~170 transitive
          deps — early measurements show <strong className="text-foreground">5.9× faster
          compile</strong> against warm caches versus <code>mvn 3.9.x</code>, and{" "}
          <strong className="text-foreground">14.8% fewer HTTP requests</strong> /{" "}
          <strong className="text-foreground">46.7% fewer bytes</strong> downloaded
          from Maven Central on a cold dependency resolve. Warm-cache builds make
          zero upstream calls — the lockfile fast-path keeps everything local.
          See <a className="underline decoration-dotted hover:text-foreground" href="https://bench.barista.build">bench.barista.build</a>{" "}
          for the per-iteration data and the developer-fixture caveats.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Documentation is live and growing — start with{" "}
          <Link
            className="underline decoration-dotted hover:text-foreground"
            href="/docs/getting-started"
          >
            getting started
          </Link>
          . Reference-hardware benchmarks are published at{" "}
          <a
            className="underline decoration-dotted hover:text-foreground"
            href="https://bench.barista.build"
          >
            bench.barista.build
          </a>
          . Source is open and developed in the open.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/getting-started"
            className={buttonVariants({ size: "lg" })}
          >
            Read the docs
          </Link>
          <a
            href="https://github.com/buildwithbarista/barista"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
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
