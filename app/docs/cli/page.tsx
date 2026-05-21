import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLI reference — Barista",
  description:
    "Every Barista command and the global flags, including the Maven lifecycle that builds on macOS and Linux.",
};

export default function CliReferencePage() {
  return (
    <>
      <h1>CLI reference</h1>
      <p className="lede">
        Barista has its own &ldquo;signature&rdquo; verbs for resolution and
        caching, plus drop-in synonyms for the Maven lifecycle phases. This page
        marks which commands execute in this pre-release and which are still
        being wired up.
      </p>

      <h2>Signature commands</h2>
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>What it does</th>
            <th>Key flags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>barista pull</code>
            </td>
            <td>
              Resolve the dependency graph, fetch artifacts into the
              content-addressed cache, hardlink them into{" "}
              <code>~/.m2/repository</code>, and write <code>barista.lock</code>.
            </td>
            <td>
              <code>--update</code>, <code>--scope</code>,{" "}
              <code>--no-fetch</code>, <code>--explain</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>barista grind tree</code>
            </td>
            <td>Print the resolved dependency graph.</td>
            <td>
              <code>--format text|json</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>barista pour</code>
            </td>
            <td>
              Materialize locked artifacts into a target directory (default{" "}
              <code>~/.m2/repository</code>) without re-resolving.
            </td>
            <td>
              <code>--target</code>, <code>--scope</code>,{" "}
              <code>--dry-run</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>barista dial-in</code>
            </td>
            <td>
              Interactive configuration wizard (writes{" "}
              <code>~/.barista/config.toml</code>).
            </td>
            <td>
              <code>--non-interactive</code>, <code>--output-path</code>,{" "}
              <code>--force</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>barista wrapper</code>
            </td>
            <td>
              Generate <code>baristaw</code> wrapper scripts in the project root.
            </td>
            <td>
              <code>--version</code>, <code>--distribution-url</code>,{" "}
              <code>--checksum</code>, <code>--force</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>barista shot &lt;phase&gt;</code>
            </td>
            <td>
              Run a one-off command on the warm path, skipping resolve+pour when
              the lockfile, daemon, and <code>pom.xml</code> are unchanged.{" "}
              <em>Unix only</em> in v0.1.
            </td>
            <td>—</td>
          </tr>
          <tr>
            <td>
              <code>barista tap</code>
            </td>
            <td>
              Register and inspect taps (remote cache / worker endpoints):{" "}
              <code>add</code>, <code>list</code>, <code>remove</code>,{" "}
              <code>status</code>. Registration and health-probing only —
              routing build actions to a tap is not implemented in v0.1.
            </td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      <p>
        <code>grind</code> also defines <code>diff</code>, <code>audit</code>,
        and <code>why</code> subcommands; these are placeholders that report
        &ldquo;not yet implemented&rdquo; in this build.
      </p>

      <h2>Maven lifecycle commands</h2>
      <p>
        <code>clean</code>, <code>compile</code>, <code>test</code>,{" "}
        <code>package</code>, <code>verify</code>, <code>install</code>,{" "}
        <code>deploy</code>, and <code>site</code> are drop-in synonyms for{" "}
        <code>mvn &lt;phase&gt;</code>. On <strong>macOS and Linux</strong> they
        execute through the warm-JVM <code>barback</code> daemon (embedded
        Maven 4), building byte-identically to Maven — single-module proven,
        multi-module reactor maturing; the daemon needs a JDK. On{" "}
        <strong>Windows</strong>, lifecycle execution isn&rsquo;t wired yet:
        they print a &ldquo;not yet executable&rdquo; notice — pass{" "}
        <code>--no-daemon</code> to fork to your installed <code>mvn</code>.
      </p>

      <h2>Global flags</h2>
      <p>These apply to every subcommand:</p>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--output human|json|ndjson</code>
            </td>
            <td>Output format. Default <code>human</code>.</td>
          </tr>
          <tr>
            <td>
              <code>--ci</code>
            </td>
            <td>
              Macro expanding to <code>--frozen --output json --quiet</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>--frozen</code>
            </td>
            <td>
              Treat <code>barista.lock</code> as authoritative; error if
              resolution would change it.
            </td>
          </tr>
          <tr>
            <td>
              <code>--strict</code>
            </td>
            <td>Strict resolution — error on unresolvable version conflicts.</td>
          </tr>
          <tr>
            <td>
              <code>--maven-compat auto|3.9|4.0</code>
            </td>
            <td>Maven compatibility mode. Default <code>auto</code>.</td>
          </tr>
          <tr>
            <td>
              <code>--no-daemon</code>
            </td>
            <td>
              Fork to upstream <code>mvn</code> instead of routing through{" "}
              <code>barback</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>--root PATH</code> / <code>-f, --file PATH</code>
            </td>
            <td>Override project-root discovery.</td>
          </tr>
          <tr>
            <td>
              <code>--config PATH</code>
            </td>
            <td>
              Override the <code>barista.toml</code> path.
            </td>
          </tr>
          <tr>
            <td>
              <code>--quiet</code> / <code>-v, --verbose</code> /{" "}
              <code>--no-color</code>
            </td>
            <td>Output verbosity and color control.</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
