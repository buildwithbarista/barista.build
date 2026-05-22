import type { Metadata } from "next";
import data from "./releases.json";

export const metadata: Metadata = {
  title: "Releases — Barista",
  description:
    "Signed, reproducible, provenance-backed Barista releases. Every published release carries Sigstore cosign signatures, SLSA build provenance, and CycloneDX SBOMs.",
};

const REPO = data.repo;

function dl(tag: string, file: string): string {
  return `https://github.com/${REPO}/releases/download/${tag}/${file}`;
}

function fmtSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}

const VERIFY_LABELS: { key: string; label: string }[] = [
  { key: "cosign", label: "cosign signed" },
  { key: "slsa", label: "SLSA L3 provenance" },
  { key: "sbom", label: "CycloneDX SBOMs" },
  { key: "reproducibleLinux", label: "reproducible (Linux)" },
  { key: "macosNotarized", label: "notarized (macOS)" },
];

export default function ReleasesPage() {
  const { releases } = data;

  return (
    <>
      <h1>Releases</h1>
      <p className="lede">
        Every Barista release ships signed, reproducible, and provenance-backed.
        Each artifact carries a keyless Sigstore (cosign) signature, SLSA build
        provenance, and CycloneDX SBOMs. A release appears here only after those
        artifacts verify.
      </p>
      <p>
        Barista is an early <strong>alpha</strong>: it has been exercised on a
        limited set of projects and is not yet recommended for production. See
        the{" "}
        <a href={`https://github.com/${REPO}/releases`}>full release list on GitHub</a>.
      </p>

      {releases.map((r) => (
        <section className="rel doc-section" key={r.tag} id={r.tag}>
          <div className="rel-head">
            <h2 style={{ margin: 0 }}>
              {r.tag}
              {r.prerelease ? <span className="pill">{r.channel}</span> : null}
            </h2>
            <span className="rel-date">
              {r.date} ·{" "}
              <a href={`https://github.com/${REPO}/releases/tag/${r.tag}`}>release notes</a>
            </span>
          </div>

          <div className="vbadges" aria-label="Supply-chain verification">
            {VERIFY_LABELS.filter(
              (v) => (r.verified as Record<string, boolean>)[v.key],
            ).map((v) => (
              <span className="vbadge" key={v.key}>
                <span aria-hidden="true">✓</span> {v.label}
              </span>
            ))}
          </div>

          <p className="rel-bundled">
            Bundles Apache Maven <code>{r.bundled.maven}</code> · built with{" "}
            <code>rustc {r.bundled.rustc}</code> · commit{" "}
            <code>{r.commit.slice(0, 12)}</code>
          </p>

          <h3>Downloads</h3>
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Archive</th>
                <th>Size</th>
                <th>SHA-256</th>
              </tr>
            </thead>
            <tbody>
              {r.artifacts.map((a) => (
                <tr key={a.target}>
                  <td>
                    {a.platform} · {a.arch}
                  </td>
                  <td>
                    <a href={dl(r.tag, a.file)}>{a.file}</a>
                    <br />
                    <a className="sub-dl" href={dl(r.tag, `${a.file}.cosign.bundle`)}>
                      cosign bundle
                    </a>
                  </td>
                  <td className="nowrap">{fmtSize(a.size)}</td>
                  <td>
                    <code className="sha">{a.sha256}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>SBOMs</h3>
          <p>
            Software bills of materials in <strong>CycloneDX</strong> JSON — a
            combined product SBOM plus per-ecosystem breakdowns. Each is cosign
            signed (download the matching <code>.cosign.bundle</code>).
          </p>
          <table>
            <thead>
              <tr>
                <th>SBOM</th>
                <th>Format</th>
                <th>Size</th>
                <th>Signature</th>
              </tr>
            </thead>
            <tbody>
              {r.sboms.map((s) => (
                <tr key={s.file}>
                  <td>
                    <a href={dl(r.tag, s.file)}>{s.label}</a>
                  </td>
                  <td className="nowrap">{s.format}</td>
                  <td className="nowrap">{fmtSize(s.size)}</td>
                  <td>
                    <a className="sub-dl" href={dl(r.tag, `${s.file}.cosign.bundle`)}>
                      cosign bundle
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Provenance</h3>
          <p>
            SLSA L3 build provenance for every artifact:{" "}
            <a href={dl(r.tag, r.provenance)}>
              <code>{r.provenance}</code>
            </a>
            . Aggregate build manifest (hashes + bundled versions):{" "}
            <a href={dl(r.tag, r.manifest)}>
              <code>{r.manifest}</code>
            </a>
            .
          </p>

          <h3>Verify</h3>
          <p>
            Confirm the signature and provenance of any artifact (example: the
            Linux x86-64 archive):
          </p>
          <pre>
            <code>{`# Sigstore cosign — keyless signature
cosign verify-blob \\
  --bundle barista-${r.version}-x86_64-unknown-linux-gnu.tar.gz.cosign.bundle \\
  --certificate-identity-regexp '^https://github.com/${REPO}' \\
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \\
  barista-${r.version}-x86_64-unknown-linux-gnu.tar.gz

# SLSA build provenance
slsa-verifier verify-artifact \\
  barista-${r.version}-x86_64-unknown-linux-gnu.tar.gz \\
  --provenance-path ${r.provenance} \\
  --source-uri github.com/${REPO}`}</code>
          </pre>
        </section>
      ))}
    </>
  );
}
