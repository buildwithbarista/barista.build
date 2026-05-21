import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting started — Barista",
  description:
    "Resolve and cache an existing Maven project with Barista. No pom.xml edits, no migration step.",
};

export default function GettingStartedPage() {
  return (
    <>
      <h1>Getting started</h1>
      <p className="lede">
        Barista is a Maven-compatible build tool for the JVM. Point it at an
        existing Maven project and it resolves dependencies with a parallel,
        lock-aware resolver and caches every artifact in a content-addressed
        store. No <code>pom.xml</code> edits, no migration step.
      </p>

      <blockquote>
        Pre-release. v0.1 is in active development — command surfaces and
        on-disk formats may change before the first tagged release. The
        Maven lifecycle commands (<code>compile</code>, <code>test</code>,{" "}
        <code>package</code>, …) build your project on macOS and Linux via the{" "}
        <code>barback</code> daemon; Windows lifecycle execution is still
        landing — see <a href="#today">what works today</a> below.
      </blockquote>

      <h2>Prerequisites</h2>
      <ul>
        <li>A JDK on your <code>PATH</code> (the same one your project builds with).</li>
        <li>An existing Maven project — a directory with a <code>pom.xml</code>.</li>
      </ul>
      <p>
        Barista bundles its own pinned Apache Maven distribution, so you do
        not need a separate <code>mvn</code> install for it to resolve and
        cache. See <a href="/docs/install">Install</a> to get the binary, and{" "}
        <a href="/docs/compat">Maven compatibility</a> for how it sits next to
        an existing <code>mvn</code> / <code>mvnd</code>.
      </p>

      <h2 id="today">What works today</h2>
      <p>
        The dependency-resolution and caching path — the part that is fast and
        ready — is driven by <code>barista pull</code>:
      </p>
      <pre>
        <code>{`cd path/to/your-maven-project

# Resolve the dependency graph, fetch artifacts into the
# content-addressed cache, hardlink them into ~/.m2/repository,
# and write barista.lock.
barista pull

# Inspect what was resolved.
barista grind tree`}</code>
      </pre>
      <p>
        <code>barista pull</code> reads your <code>pom.xml</code> (with parent
        merge, BOM imports, profiles, and <code>dependencyManagement</code>),
        resolves the graph, and writes a reviewable <code>barista.lock</code>.
        Artifacts are verified by SHA-256 on the way into the cache and
        hardlinked into <code>~/.m2/repository</code>, so any tool that reads
        the local Maven repository — including <code>mvn</code> — sees them
        immediately.
      </p>
      <p>
        For CI that separates fetch from execution, resolve without fetching
        and materialize later:
      </p>
      <pre>
        <code>{`barista pull --no-fetch     # resolve + write the lockfile only
barista pour                # materialize locked artifacts into ~/.m2`}</code>
      </pre>

      <h2>Running your build</h2>
      <p>
        On <strong>macOS and Linux</strong>, the Maven lifecycle commands —{" "}
        <code>barista clean</code>, <code>compile</code>, <code>test</code>,{" "}
        <code>package</code>, <code>verify</code>, <code>install</code>,{" "}
        <code>deploy</code> — execute through the warm-JVM <code>barback</code>{" "}
        daemon (embedded Maven 4), building byte-identically to{" "}
        <code>mvn &lt;phase&gt;</code>. Single-module builds are proven;
        multi-module reactor support is maturing. The daemon needs a JDK.
      </p>
      <pre>
        <code>{`cd path/to/your-maven-project
barista pull       # resolve + cache + write barista.lock
barista verify     # build through the warm barback daemon`}</code>
      </pre>
      <p>
        On <strong>Windows</strong>, lifecycle execution isn&rsquo;t wired yet:
        pass <code>--no-daemon</code> to fork to your installed <code>mvn</code>,
        or run <code>mvn</code> after <code>barista pull</code> has warmed{" "}
        <code>~/.m2/repository</code>.
      </p>

      <h2>Project setup helpers</h2>
      <pre>
        <code>{`# Generate a baristaw wrapper (like mvnw) so collaborators run a
# pinned Barista version without installing it globally.
barista wrapper

# Interactive first-run configuration wizard, writing ~/.barista/config.toml.
barista dial-in`}</code>
      </pre>

      <h2>Next steps</h2>
      <ul>
        <li>
          <a href="/docs/cli">CLI reference</a> — every command and the global
          flags (<code>--output</code>, <code>--ci</code>, <code>--frozen</code>
          , …).
        </li>
        <li>
          <a href="/docs/compat">Maven compatibility</a> — how Barista shares{" "}
          <code>~/.m2</code> and coexists with <code>mvn</code> and{" "}
          <code>mvnd</code>.
        </li>
        <li>
          <a href="/docs/faq">FAQ</a> — telemetry, licensing, the cache, and{" "}
          how Barista differs from <code>mvnd</code>.
        </li>
      </ul>
    </>
  );
}
