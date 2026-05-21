import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maven compatibility — Barista",
  description:
    "How Barista reads your pom.xml and settings.xml, shares ~/.m2, and coexists with mvn and mvnd.",
};

export default function CompatPage() {
  return (
    <>
      <h1>Maven compatibility</h1>
      <p className="lede">
        Barista is defined against Maven. It reads the same project and
        configuration files, writes into the same local repository, and is
        benchmarked for parity against <code>mvn</code> on every release. The
        goal is that an existing project works the day you switch — no{" "}
        <code>pom.xml</code> edits, no migration, no lock-in.
      </p>

      <h2>What Barista reads</h2>
      <ul>
        <li>
          <strong>
            <code>pom.xml</code>
          </strong>{" "}
          — full parsing with parent merge, property interpolation, BOM
          imports, profile activation, and <code>dependencyManagement</code>.
        </li>
        <li>
          <strong>
            <code>~/.m2/settings.xml</code>
          </strong>{" "}
          — mirrors, servers, and proxies are honored, the same as Maven.
        </li>
        <li>
          <strong>
            <code>~/.m2/repository</code>
          </strong>{" "}
          — the shared local repository. Barista populates it; Maven and{" "}
          <code>mvnd</code> read from it.
        </li>
      </ul>

      <h2>Bundled Maven, and the versions we target</h2>
      <p>
        Barista bundles a pinned Apache Maven <strong>4.0.0-rc-3</strong>{" "}
        distribution, so resolution and caching work without a separate{" "}
        <code>mvn</code> install. Plain <code>mvn</code> remains the
        ground-truth reference: every release is benchmarked against{" "}
        <code>mvn 3.9.x</code>, <code>mvn 4.0.x</code>, and{" "}
        <code>mvnd 2.x</code>. Choose the behavior explicitly when you need to:
      </p>
      <pre>
        <code>{`barista pull --maven-compat auto   # detect from the project (default)
barista pull --maven-compat 3.9    # Maven 3.9-compatible behavior
barista pull --maven-compat 4.0    # Maven 4.0-compatible behavior`}</code>
      </pre>

      <h2>Coexisting with mvn and mvnd</h2>
      <ul>
        <li>
          <strong>Bidirectional artifact sharing.</strong> Artifacts fetched by{" "}
          <code>mvn</code> / <code>mvnd</code> are ingested into Barista&rsquo;s
          content-addressed cache (checksum-verified) when next touched;
          artifacts Barista resolves are hardlinked back into{" "}
          <code>~/.m2/repository</code> so the other tools see them.
        </li>
        <li>
          <strong>Independent daemons.</strong> Barista&rsquo;s{" "}
          <code>barback</code> and Maven&rsquo;s <code>mvnd</code> are separate
          processes with no shared state — you can run both.
        </li>
        <li>
          <strong>
            <code>barista.lock</code> is Barista-specific.
          </strong>{" "}
          <code>mvn</code> and <code>mvnd</code> ignore it, so it is safe to
          commit alongside a Maven project.
        </li>
      </ul>

      <h2>Dependency scopes</h2>
      <p>
        Resolution is scope-aware, matching Maven&rsquo;s scopes:{" "}
        <code>compile</code>, <code>runtime</code>, <code>test</code>,{" "}
        <code>provided</code>, and <code>system</code>. Narrow a resolve with{" "}
        <code>--scope</code>.
      </p>

      <h2>Not supported in v0.1</h2>
      <p>
        Barista is Maven-specific — there is no Gradle support. Within the
        Maven surface, this pre-release is honest about what is not wired yet:
      </p>
      <ul>
        <li>
          <strong>Lifecycle execution.</strong> The drop-in lifecycle commands
          (<code>compile</code>, <code>test</code>, <code>package</code>, …)
          are not yet executable; they route through the <code>barback</code>{" "}
          daemon in a later milestone. Resolve and cache with{" "}
          <code>barista pull</code>, then build with <code>mvn</code>.
        </li>
        <li>
          <strong>Tap routing.</strong> Remote caches / workers can be
          registered with <code>barista tap</code>, but build actions are not
          routed to them yet.
        </li>
      </ul>
      <p>
        See <a href="/docs/cli">the CLI reference</a> for the exact
        command-by-command status.
      </p>
    </>
  );
}
