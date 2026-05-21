import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Install — Barista",
  description:
    "How to install the Barista CLI: build from source today, with Homebrew and signed binary releases arriving with v0.1.",
};

export default function InstallPage() {
  return (
    <>
      <h1>Install</h1>
      <p className="lede">
        Binary releases are not published yet. Until v0.1 ships, build the CLI
        from source; the Homebrew tap and signed release archives are wired and
        will go live with the first tag.
      </p>

      <h2>Build from source (available today)</h2>
      <p>
        Barista&rsquo;s CLI is a Rust crate. With a recent Rust toolchain
        installed:
      </p>
      <pre>
        <code>{`git clone https://github.com/buildwithbarista/barista
cd barista
cargo build --release -p barista-cli

# The binary lands at target/release/barista
./target/release/barista --version`}</code>
      </pre>
      <p>
        Add <code>target/release</code> to your <code>PATH</code>, or copy the{" "}
        <code>barista</code> binary somewhere on it.
      </p>

      <h2>Homebrew (coming with v0.1)</h2>
      <p>
        Once v0.1 is tagged, the primary install path will be the Homebrew tap:
      </p>
      <pre>
        <code>{`brew install buildwithbarista/tap/barista`}</code>
      </pre>

      <h2>Signed release archives (coming with v0.1)</h2>
      <p>
        Each tagged release publishes per-platform archives to GitHub Releases.
        They are byte-reproducible, signed keylessly with Sigstore cosign, and
        accompanied by SLSA build provenance. Supported targets:
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Archive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linux x86_64</td>
            <td>
              <code>barista-&lt;version&gt;-x86_64-unknown-linux-gnu.tar.gz</code>
            </td>
          </tr>
          <tr>
            <td>Linux ARM64</td>
            <td>
              <code>barista-&lt;version&gt;-aarch64-unknown-linux-gnu.tar.gz</code>
            </td>
          </tr>
          <tr>
            <td>macOS x86_64</td>
            <td>
              <code>barista-&lt;version&gt;-x86_64-apple-darwin.tar.gz</code>
            </td>
          </tr>
          <tr>
            <td>macOS Apple Silicon</td>
            <td>
              <code>barista-&lt;version&gt;-aarch64-apple-darwin.tar.gz</code>
            </td>
          </tr>
          <tr>
            <td>Windows x86_64</td>
            <td>
              <code>barista-&lt;version&gt;-x86_64-pc-windows-msvc.zip</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Each archive bundles the pinned Apache Maven 4 distribution alongside
        the binary, so a single download is self-contained.
      </p>

      <h2>roastery (optional remote cache)</h2>
      <p>
        <code>roastery</code> is Barista&rsquo;s optional team-shared artifact
        cache server. Its container image is published to GHCR:
      </p>
      <pre>
        <code>{`docker pull ghcr.io/buildwithbarista/roastery:edge`}</code>
      </pre>
      <p>
        Register it as a tap once it&rsquo;s running. Note that in v0.1{" "}
        <code>barista tap</code> covers registration and health probing only —
        routing build actions to a tap is not implemented yet. See the{" "}
        <a href="/docs/faq">FAQ</a> for what the cache does.
      </p>
    </>
  );
}
