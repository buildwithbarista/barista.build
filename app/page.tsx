import Link from "next/link";
import { InstallBox } from "@/components/install-box";
import { RaceTerminal } from "@/components/race-terminal";

const GITHUB = "https://github.com/buildwithbarista/barista";
const BENCH = "https://bench.barista.build";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            <span>barista</span>
          </a>
          <div className="nav-links">
            <a href="#speed" className="hide-sm">
              Speed
            </a>
            <a href="#vocabulary" className="hide-sm">
              Vocabulary
            </a>
            <a href="#architecture" className="hide-sm">
              Architecture
            </a>
            <Link href="/docs/getting-started" className="hide-sm">
              Docs
            </Link>
            <a href={BENCH} className="hide-sm">
              Benchmarks
            </a>
            <a className="nav-cta" href={GITHUB}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero wrap">
          <span className="eyebrow">
            <span className="dot" /> v0.1 developer preview · buildwithbarista
          </span>

          <h1 className="hero-title">
            A faster <span className="swash">pour</span>
            <br />
            for Maven.
          </h1>

          <p className="hero-sub">
            Barista is a Maven-compatible build tool for the JVM, written in Rust. The
            same <code>pom.xml</code>, the same <code>~/.m2</code>, the same artifacts. A
            native dependency resolver and a content-addressed cache make resolution fast
            today; a warm-JVM <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>barback</em> worker pool for plugin execution is
            landing next.
          </p>

          <div className="hero-ctas">
            <InstallBox command="brew install buildwithbarista/tap/barista" />
            <Link className="btn-ghost" href="/docs/install">
              Install guide
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" />
              </svg>
            </Link>
          </div>

          <div className="hero-strip">
            <div>
              <div className="num">5.9×</div>
              <div className="lbl">faster compile against warm caches</div>
              <div className="cmp">vs. mvn 3.9.x · walkthrough corpus</div>
            </div>
            <div>
              <div className="num">14.8%</div>
              <div className="lbl">fewer HTTP requests to Maven&nbsp;Central</div>
              <div className="cmp">cold dependency resolve · measured</div>
            </div>
            <div>
              <div className="num">46.7%</div>
              <div className="lbl">fewer bytes downloaded on a cold resolve</div>
              <div className="cmp">captured under mitmproxy</div>
            </div>
          </div>
        </section>

        <section className="section" id="speed">
          <div className="wrap">
            <header className="section-head fade-in">
              <div className="section-tag">
                <span className="idx">01</span> Speed
              </div>
              <div>
                <h2 className="section-title">
                  Faster, because
                  <br />
                  we left the <em>JVM</em>.
                </h2>
                <p className="section-lede">
                  Resolution moves out of the JVM and into a native resolver with HTTP/2
                  multiplexing and a content-addressed cache. Execution stays on the JVM —
                  inside a warm <em style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>barback</em> worker pool that holds Maven 4 core and
                  plugin classloaders across invocations.
                </p>
              </div>
            </header>

            <RaceTerminal />

            <div className="race-foot">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--fg-4)", letterSpacing: "0.04em" }}>
                <a href={BENCH} style={{ color: "var(--fg-3)", textDecoration: "underline", textDecorationColor: "var(--line)", textUnderlineOffset: "3px" }}>
                  all measurements &rarr;
                </a>
                &nbsp;·&nbsp; per-iteration data + developer-fixture caveats
              </span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <header className="section-head fade-in">
              <div className="section-tag">
                <span className="idx">02</span> Pillars
              </div>
              <div>
                <h2 className="section-title">
                  Three things we
                  <br />
                  care about. <em>That&rsquo;s it.</em>
                </h2>
                <p className="section-lede">
                  Speed gets the headlines. Compatibility is the only reason it can ever
                  ship. Resource efficiency is the reason it&rsquo;s worth shipping at all.
                </p>
              </div>
            </header>

            <div className="pillars fade-in">
              <div className="pillar">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
                </svg>
                <h3>
                  A native <em>resolver</em>, not the JVM.
                </h3>
                <p>
                  Dependency resolution runs in Rust with HTTP/2 multiplexed POM fetching
                  and a real, checksum-verified lockfile. A warm{" "}
                  <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>barback</em> daemon to hold JIT state and plugin
                  classloaders for execution is landing next.
                </p>
                <div className="meta">
                  <span>cold resolve</span>
                  <strong>target ≥5× vs mvn</strong>
                </div>
              </div>

              <div className="pillar">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <h3>
                  Built for <em>compatibility</em>.
                </h3>
                <p>
                  Reads your existing <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.88em", color: "var(--fg)" }}>pom.xml</code> and{" "}
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.88em", color: "var(--fg)" }}>settings.xml</code>, shares{" "}
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.88em", color: "var(--fg)" }}>~/.m2/repository</code>, and bundles Maven 4. The lifecycle
                  drop-ins aim for byte-identical output, modulo declared timestamp
                  normalization.
                </p>
                <div className="meta">
                  <span>tested against</span>
                  <strong>mvn 3.9 · 4.0 · mvnd 2.x</strong>
                </div>
              </div>

              <div className="pillar">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <h3>
                  Built for the <em>commons</em>.
                </h3>
                <p>
                  Maven Central, your corporate Nexus, the mirrors — they&rsquo;re paid for
                  by someone. Every avoidable request and wasted byte is a bug. Efficiency
                  is a first-class, regression-gated feature.
                </p>
                <div className="meta">
                  <span>measured</span>
                  <strong>−14.8% requests · −46.7% bytes</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="vocabulary">
          <div className="wrap">
            <header className="section-head fade-in">
              <div className="section-tag">
                <span className="idx">03</span> Vocabulary
              </div>
              <div>
                <h2 className="section-title">
                  The whole <em>menu</em>.
                  <br />
                  Every verb does one thing.
                </h2>
                <p className="section-lede">
                  Barista keeps Maven&rsquo;s lifecycle verbs and adds a handful of its own
                  for resolution and caching. The signature verbs below work today; the
                  Maven lifecycle drop-ins are landing.
                </p>
              </div>
            </header>

            <div className="vocab fade-in">
              <div className="verb">
                <div className="name">pull</div>
                <div className="blurb">Resolve, fetch, lock. Writes a checksum-verified barista.lock.</div>
                <code>$ barista pull --update</code>
              </div>
              <div className="verb">
                <div className="name">pour</div>
                <div className="blurb">
                  Materialize locked artifacts into a target — defaults to{" "}
                  <code style={{ background: "transparent", border: 0, padding: 0, color: "var(--fg)" }}>~/.m2</code>.
                </div>
                <code>$ barista pour --target ~/.m2</code>
              </div>
              <div className="verb">
                <div className="name">grind</div>
                <div className="blurb">Inspect the resolved graph. (tree today; why / diff / audit landing.)</div>
                <code>$ barista grind tree</code>
              </div>
              <div className="verb">
                <div className="name">shot</div>
                <div className="blurb">Run a one-off command on the warm path, skipping needless re-resolution.</div>
                <code>$ barista shot --help</code>
              </div>
              <div className="verb">
                <div className="name">dial-in</div>
                <div className="blurb">Interactive wizard to tune the local config: cache, toolchains, workers.</div>
                <code>$ barista dial-in</code>
              </div>
            </div>

            <div className="compat" style={{ marginTop: "48px" }}>
              <div className="compat-block fade-in">
                <h4>Drop-in surface</h4>
                <p>
                  The Maven lifecycle phases are mirrored verb-for-verb. Execution routes
                  through the <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.88em", color: "var(--fg)", background: "var(--bg)", border: "1px solid var(--line-soft)", padding: "1px 6px", borderRadius: "4px" }}>barback</code> daemon and is still landing — they print a
                  &ldquo;not yet executable&rdquo; notice for now.
                </p>
                <ul className="compat-list">
                  <li>clean</li>
                  <li>compile</li>
                  <li>test</li>
                  <li>package</li>
                  <li>install</li>
                  <li>verify</li>
                  <li>deploy</li>
                  <li>-P profiles</li>
                  <li>-D properties</li>
                </ul>
              </div>
              <div className="compat-block fade-in">
                <h4>Agent-native</h4>
                <p>
                  Every command supports{" "}
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.88em", color: "var(--fg)", background: "var(--bg)", border: "1px solid var(--line-soft)", padding: "1px 6px", borderRadius: "4px" }}>--output json</code> with a stable, versioned schema.
                  Failures carry structured error codes. No human-shaped output to parse.
                </p>
                <ul className="compat-list">
                  <li>--output json</li>
                  <li>--output ndjson</li>
                  <li>BAR-CACHE-NNN</li>
                  <li>--ci</li>
                  <li>--frozen</li>
                  <li>--explain</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="wrap">
            <header className="section-head fade-in">
              <div className="section-tag">
                <span className="idx">04</span> Architecture
              </div>
              <div>
                <h2 className="section-title">
                  Orchestration in Rust.
                  <br />
                  Execution on the <em>JVM</em>.
                </h2>
                <p className="section-lede">
                  A clean split between the parts that need to be fast and cold-startable
                  (resolver, cache, classpath builder) and the parts that need to be
                  compatible with the JVM plugin ecosystem (mojo execution). The CLI is a
                  single static binary.
                </p>
              </div>
            </header>

            <div className="arch">
              <div className="arch-diagram fade-in">
                <div className="arch-node barista">
                  <span className="badge">cli</span>
                  <span className="nm">
                    <em>barista</em>
                  </span>
                  <span className="desc">Rust · single binary · transient</span>
                </div>
                <div className="arch-conn">
                  <span>uds / named pipe</span>
                </div>
                <div className="arch-node">
                  <span className="badge">daemon</span>
                  <span className="nm">
                    <em>barback</em>
                  </span>
                  <span className="desc">JVM · long-lived · per-toolchain</span>
                </div>
                <div className="arch-conn">
                  <span>worker protocol</span>
                </div>
                <div className="arch-node">
                  <span className="badge">pool</span>
                  <span className="nm">workers</span>
                  <span className="desc">embedded Maven&nbsp;4 · JIT-warm</span>
                </div>
                <div className="arch-conn">
                  <span>http/2 · optional</span>
                </div>
                <div className="arch-node">
                  <span className="badge">cache</span>
                  <span className="nm">
                    <em>roastery</em>
                  </span>
                  <span className="desc">REAPI CAS · shared org-wide</span>
                </div>
                <div className="arch-conn">
                  <span>http/2</span>
                </div>
                <div className="arch-node" style={{ marginBottom: 0 }}>
                  <span className="badge">upstream</span>
                  <span className="nm">Central · Nexus · Artifactory</span>
                  <span className="desc">unchanged</span>
                </div>
              </div>

              <div className="arch-text">
                <h3>
                  The <em>four</em> processes.
                </h3>
                <p>
                  The CLI is transient: it starts, does the work, exits. The daemon stays
                  running across invocations. The cache server is optional and shared.
                  Upstream repositories don&rsquo;t even know we&rsquo;re here.
                </p>
                <ul>
                  <li>
                    <span className="num">01</span>
                    <span>
                      <strong>barista</strong> — parse, resolve, lock, materialize.
                      Sub-second on a warm lockfile.
                    </span>
                  </li>
                  <li>
                    <span className="num">02</span>
                    <span>
                      <strong>barback</strong> — embedded Maven 4 core in a warm worker
                      pool, plugin classloaders cached. Lifecycle execution landing.
                    </span>
                  </li>
                  <li>
                    <span className="num">03</span>
                    <span>
                      <strong>roastery</strong> — speaks Bazel&rsquo;s REAPI CAS gRPC and a
                      barista-native HTTP/2 protocol. Optional org-wide artifact cache.
                    </span>
                  </li>
                  <li>
                    <span className="num">04</span>
                    <span>
                      <strong>upstream</strong> — same Central, same Nexus, same
                      Artifactory. Just much less traffic.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="commons">
          <div className="wrap">
            <header className="section-head fade-in">
              <div className="section-tag">
                <span className="idx">05</span> Commons
              </div>
              <div>
                <h2 className="section-title">
                  Central is a <em>commons</em>.
                  <br />
                  We treat it like one.
                </h2>
                <p className="section-lede">
                  Maven Central serves billions of requests and petabytes of egress every
                  month, paid for by people who are not your problem until they are.
                  Caching is recovery from inefficiency. Barista pursues primary efficiency:
                  don&rsquo;t ask if you don&rsquo;t need to ask; don&rsquo;t transfer what
                  you don&rsquo;t need to transfer.
                </p>
              </div>
            </header>

            <div className="commons fade-in">
              <div className="commons-stat">
                <div className="label">Median request count</div>
                <div className="figure">
                  −14.8<span className="unit">% vs mvn 3.9</span>
                </div>
                <div className="body">
                  HTTP/2 multiplexing, conditional requests, and parent-POM deduplication
                  on a cold resolve. <strong>Regression-gated</strong> — efficiency is a
                  release criterion.
                </div>
              </div>
              <div className="commons-stat">
                <div className="label">Median bytes downloaded</div>
                <div className="figure">
                  −46.7<span className="unit">% vs mvn 3.9</span>
                </div>
                <div className="body">
                  Avoided redundant metadata and POM fetches, captured under mitmproxy on
                  the <strong>walkthrough corpus</strong>. Warm-cache builds make zero
                  upstream calls.
                </div>
              </div>
              <div className="commons-stat">
                <div className="label">Peak concurrent connections</div>
                <div className="figure">
                  ≤6<span className="unit">per host · configurable</span>
                </div>
                <div className="body">
                  We are explicitly <strong>not</strong> trading repository load for our own
                  speed. The ceiling is a default, not a target.
                </div>
              </div>
              <div className="commons-stat">
                <div className="label">Upstream calls on a warm build</div>
                <div className="figure">
                  0<span className="unit">lockfile fast-path</span>
                </div>
                <div className="body">
                  A valid <strong>barista.lock</strong> keeps everything local — no metadata
                  polling, no revalidation round-trips.
                </div>
              </div>
            </div>

            <blockquote className="pull-quote">
              Caching is recovery from inefficiency. Pursue primary efficiency: don&rsquo;t
              ask if you don&rsquo;t need to ask; don&rsquo;t transfer what you don&rsquo;t
              need to transfer.
              <span className="src">Design goal · G9 — resource efficiency</span>
            </blockquote>
          </div>
        </section>

        <section className="cta-band">
          <div className="wrap">
            <h2>
              Pull your first
              <br />
              resolve in <em>under a minute</em>.
            </h2>
            <p className="sub">
              A single static binary — no JVM dependency for the CLI itself. Your existing
              project resolves and caches with one command.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center" }}>
              <InstallBox command="brew install buildwithbarista/tap/barista" />
              <Link className="btn-ghost" href="/docs/getting-started">
                Read the docs
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <footer className="wrap">
          <div>
            <span className="brand" style={{ fontSize: "16px" }}>
              <span className="brand-mark" style={{ width: "18px", height: "18px" }} /> barista.build
            </span>
            <span style={{ marginLeft: "14px" }}>© Bluminal Labs LLC · v0.1 preview</span>
          </div>
          <div className="links">
            <a href={GITHUB}>GitHub</a>
            <Link href="/docs/getting-started">Docs</Link>
            <a href={BENCH}>Benchmarks</a>
            <a href="#commons">Ecosystem impact</a>
          </div>
        </footer>
      </main>
    </>
  );
}
