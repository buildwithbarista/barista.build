import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Install — Barista",
  description:
    "How to install the Barista CLI: signed, per-platform binaries from the v0.1.0-alpha.1 release, or build from source. Homebrew arriving with the stable v0.1.",
};

export default function InstallPage() {
  return (
    <>
      <h1>Install</h1>
      <p className="lede">
        Barista <strong>v0.1.0-alpha.1</strong> is published with signed,
        per-platform binaries. Download a release archive below, or build from
        source. This is an early alpha — expect rough edges, and not yet
        recommended for production.
      </p>

      <h2>Signed release archives (available now)</h2>
      <p>
        Per-platform archives are published to GitHub Releases. They are
        byte-reproducible (Linux), signed keylessly with Sigstore cosign, carry
        SLSA build provenance, and ship CycloneDX SBOMs. See the{" "}
        <Link href="/releases">releases page</Link> for downloads, checksums,
        SBOMs, and verification commands. Supported targets:
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
            <td>macOS Apple Silicon</td>
            <td>
              <code>barista-&lt;version&gt;-aarch64-apple-darwin.tar.gz</code>
            </td>
          </tr>
          <tr>
            <td>macOS x86_64</td>
            <td>
              <code>barista-&lt;version&gt;-x86_64-apple-darwin.tar.gz</code>
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
        Each archive bundles the pinned Apache Maven 4 distribution and the{" "}
        <code>barback</code> daemon alongside the binary, so a single download is
        self-contained. macOS binaries are signed with a Developer ID and
        notarized by Apple.
      </p>

      <h2>Build from source</h2>
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

      <h2>Homebrew (coming with stable v0.1)</h2>
      <p>
        The Homebrew tap is wired and will go live with the stable v0.1 release:
      </p>
      <pre>
        <code>{`brew install buildwithbarista/tap/barista`}</code>
      </pre>

      <h2>roastery (optional remote cache)</h2>
      <p>
        <code>roastery</code> is Barista&rsquo;s optional team-shared artifact
        cache server. Its multi-arch container image is published to GHCR:
      </p>
      <pre>
        <code>{`docker pull ghcr.io/buildwithbarista/roastery:edge`}</code>
      </pre>
      <p>
        Register it as a tap once it&rsquo;s running. Note that in this alpha{" "}
        <code>barista tap</code> covers registration and health probing only —
        routing build actions to a tap is not implemented yet. See the{" "}
        <a href="/docs/faq">FAQ</a> for what the cache does.
      </p>
    </>
  );
}
