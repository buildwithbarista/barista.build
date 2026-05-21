import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Barista",
  description:
    "What Barista is, how it differs from mvnd, its license, and its privacy stance.",
};

export default function FaqPage() {
  return (
    <>
      <h1>FAQ</h1>

      <h2>What is Barista?</h2>
      <p>
        A fully Maven-compatible build tool for the JVM — a drop-in for{" "}
        <code>mvn</code> with the same lifecycle phases, the same{" "}
        <code>pom.xml</code> and <code>settings.xml</code>, and the same
        repositories and plugins. What differs is underneath: a parallel,
        lock-aware dependency resolver, a content-addressed artifact cache, and
        a warm-JVM daemon so plugin execution doesn&rsquo;t pay startup cost on
        every invocation. It is deliberately frugal with shared
        infrastructure — Maven Central, mirrors, and corporate repository
        managers — fetching artifacts once and reusing them.
      </p>

      <h2>How is it different from mvnd?</h2>
      <p>
        <code>mvnd</code> keeps a JVM warm to avoid Maven&rsquo;s startup cost.
        Barista does that too (via <code>barback</code>), but it also moves the
        slow non-JVM work — dependency resolution, the artifact cache, and the
        network — out into the Rust CLI, outside the JVM entirely. The two are
        independent and can coexist. See{" "}
        <a href="/docs/compat">Maven compatibility</a> for the details.
      </p>

      <h2>Does it work with Gradle?</h2>
      <p>No. Barista is Maven-specific.</p>

      <h2>Does Barista phone home?</h2>
      <p>
        No. Telemetry is off and unconfigured by default — the transport path
        is unreachable out of the box. Three independent guards must{" "}
        <em>all</em> be true before anything is sent: you opt in
        (<code>enabled = true</code>), a post-privacy-review transport lever is
        flipped on (it ships <code>false</code> in v0.1), and an endpoint is
        configured (there is no compiled-in default). Even then, only five
        fixed event types are emitted, every textual field is a compile-time
        literal, and there are no paths, arguments, error messages, or
        dependency coordinates in the payload.
      </p>

      <h2>How does the cache work?</h2>
      <p>
        Fetched artifacts are stored in a content-addressed cache under{" "}
        <code>~/.barista/cache</code>, keyed by SHA-256 and verified on
        ingest (which defends against cache poisoning). They are hardlinked
        into <code>~/.m2/repository</code> for Maven compatibility.{" "}
        <code>roastery</code> is an optional team-shared cache server that
        mirrors upstream once and serves the whole team — useful across
        machines and CI.
      </p>

      <h2>Are builds reproducible?</h2>
      <p>
        <code>barista.lock</code> pins the resolved graph and the checksum
        verification results; it is readable, reviewable, and committable.{" "}
        <code>--frozen</code> (and the <code>--ci</code> macro) treats the
        lockfile as authoritative and errors if resolution would change it. The
        Barista release binaries themselves are byte-reproducible across
        independent builders.
      </p>

      <h2>What license is it under?</h2>
      <p>
        Dual-licensed: Apache License 2.0 <strong>or</strong> the MIT license,
        at your option. Contributions are accepted under the same dual license.
      </p>

      <h2>Is it ready for production?</h2>
      <p>
        Not yet. v0.1 is in active development; command surfaces and on-disk
        formats may change until the first tagged release. The
        dependency-resolution and caching path is the part that is ready to
        try today — see <a href="/docs/getting-started">Getting started</a>.
      </p>
    </>
  );
}
