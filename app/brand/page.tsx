/* eslint-disable @next/next/no-img-element -- brand-kit page shows fixed-size
   raster/vector brand assets from /public/brand; next/image adds no value here. */
import type { Metadata } from "next";
import Link from "next/link";

const GITHUB = "https://github.com/buildwithbarista/barista";
const BENCH = "https://bench.barista.build";

export const metadata: Metadata = {
  title: "Brand — Barista",
  description:
    "Barista brand kit — the bean mark, wordmark lockup, color tokens, and downloadable avatar assets for GitHub, Twitter, Slack, and more.",
};

type Download = { label: string; href: string };

const PALETTE = [
  {
    name: "Espresso",
    chip: { background: "#1f1611", color: "#f5ede1" },
    hex: "#1F1611",
    rgb: "31 22 17",
    oklch: "0.16 0.012 60",
    use: "background, primary text on light",
  },
  {
    name: "Crema",
    chip: { background: "#E0A063", color: "#1f1611" },
    hex: "#E0A063",
    rgb: "224 160 99",
    oklch: "0.78 0.13 60",
    use: "accent, the bean fill, CTAs",
  },
  {
    name: "Cream",
    chip: { background: "#f5ede1", color: "#1f1611" },
    hex: "#F5EDE1",
    rgb: "245 237 225",
    oklch: "0.94 0.020 75",
    use: "light-mode bg, primary text on dark",
  },
];

const MARKS: {
  modifier: string;
  previewClass: string;
  img: string;
  alt: string;
  name: string;
  desc: string;
  downloads: Download[];
}[] = [
  {
    modifier: "dark-preview",
    previewClass: "preview",
    img: "/brand/bean-avatar-256.png",
    alt: "Bean avatar",
    name: "Bean · primary avatar",
    desc: "Filled espresso square with the crema bean. The default for GitHub, Twitter, Reddit, and most other social.",
    downloads: [
      { label: "svg", href: "/brand/bean-avatar.svg" },
      { label: "512", href: "/brand/bean-avatar-512.png" },
      { label: "1024", href: "/brand/bean-avatar-1024.png" },
      { label: "256", href: "/brand/bean-avatar-256.png" },
      { label: "128", href: "/brand/bean-avatar-128.png" },
      { label: "64", href: "/brand/bean-avatar-64.png" },
    ],
  },
  {
    modifier: "dark-preview",
    previewClass: "preview",
    img: "/brand/bean-avatar-rounded-256.png",
    alt: "Bean rounded avatar",
    name: "Bean · rounded",
    desc: "iOS-style rounded square. Use where the platform doesn't impose its own circular crop — Slack icon, Discord app, app-store entries.",
    downloads: [
      { label: "svg", href: "/brand/bean-avatar-rounded.svg" },
      { label: "512", href: "/brand/bean-avatar-rounded-512.png" },
      { label: "1024", href: "/brand/bean-avatar-rounded-1024.png" },
      { label: "256", href: "/brand/bean-avatar-rounded-256.png" },
      { label: "128", href: "/brand/bean-avatar-rounded-128.png" },
      { label: "apple-touch 180", href: "/brand/apple-touch-icon.png" },
    ],
  },
  {
    modifier: "",
    previewClass: "preview cream-bg",
    img: "/brand/bean-avatar-light-256.png",
    alt: "Bean light avatar",
    name: "Bean · light mode",
    desc: "Espresso bean on a cream square. For light-themed banners, business cards, light-mode-only contexts.",
    downloads: [
      { label: "svg", href: "/brand/bean-avatar-light.svg" },
      { label: "512", href: "/brand/bean-avatar-light-512.png" },
      { label: "1024", href: "/brand/bean-avatar-light-1024.png" },
      { label: "256", href: "/brand/bean-avatar-light-256.png" },
      { label: "128", href: "/brand/bean-avatar-light-128.png" },
    ],
  },
  {
    modifier: "dark-preview",
    previewClass: "preview",
    img: "/brand/bean-bot-256.png",
    alt: "Bean bot avatar",
    name: "Bean · bot variant",
    desc: "The primary avatar plus a small green status indicator. Use for GitHub Actions bots, Slack apps, Discord webhooks — anywhere a human shouldn't think a human is replying.",
    downloads: [
      { label: "svg", href: "/brand/bean-bot.svg" },
      { label: "svg-r", href: "/brand/bean-bot-rounded.svg" },
      { label: "512", href: "/brand/bean-bot-512.png" },
      { label: "512-r", href: "/brand/bean-bot-rounded-512.png" },
      { label: "256", href: "/brand/bean-bot-256.png" },
      { label: "128", href: "/brand/bean-bot-128.png" },
    ],
  },
];

const SIZES: { src: string; box: number; label: string }[] = [
  { src: "/brand/bean-avatar-16.png", box: 16, label: "16" },
  { src: "/brand/bean-avatar-32.png", box: 32, label: "32" },
  { src: "/brand/bean-avatar-48.png", box: 48, label: "48" },
  { src: "/brand/bean-avatar-64.png", box: 64, label: "64" },
  { src: "/brand/bean-avatar-96.png", box: 96, label: "96" },
  { src: "/brand/bean-avatar-128.png", box: 128, label: "128" },
  { src: "/brand/bean-avatar-192.png", box: 160, label: "192" },
];

const LOCKUPS: {
  variant: "dark" | "light";
  img: string;
  alt: string;
  name: string;
  desc: string;
  downloads: Download[];
}[] = [
  {
    variant: "dark",
    img: "/brand/lockup-dark-1200.png",
    alt: "Dark lockup",
    name: "Dark · primary",
    desc: "The default lockup. Crema bean, cream wordmark, espresso background. README headers, repo social previews, slide title pages.",
    downloads: [
      { label: "svg", href: "/brand/lockup-dark.svg" },
      { label: "2400", href: "/brand/lockup-dark-2400.png" },
      { label: "1200", href: "/brand/lockup-dark-1200.png" },
      { label: "transparent svg", href: "/brand/lockup-transparent-dark.svg" },
    ],
  },
  {
    variant: "light",
    img: "/brand/lockup-light-1200.png",
    alt: "Light lockup",
    name: "Light · inverse",
    desc: "Espresso bean and wordmark on cream. For print, light-theme docs, paper handouts.",
    downloads: [
      { label: "svg", href: "/brand/lockup-light.svg" },
      { label: "2400", href: "/brand/lockup-light-2400.png" },
      { label: "1200", href: "/brand/lockup-light-1200.png" },
      { label: "transparent svg", href: "/brand/lockup-transparent-light.svg" },
    ],
  },
];

const TYPEFACES = [
  {
    cardClass: "type-card",
    sample: "Aa",
    label: "UI · body · headlines",
    name: "Inter Tight",
    desc: (
      <>
        The workhorse. 400, 500, 600. Used at every weight from caption to display.{" "}
        <code>letter-spacing</code> tightens with size.
      </>
    ),
  },
  {
    cardClass: "type-card serif",
    sample: "Bb",
    label: "swash · wordmark · accent",
    name: "Instrument Serif",
    desc: (
      <>
        Italic only. The brand voice. Use sparingly: one or two words inside a headline, the
        wordmark, big benchmark numbers.
      </>
    ),
  },
  {
    cardClass: "type-card mono",
    sample: "$_",
    label: "code · numbers · ui labels",
    name: "JetBrains Mono",
    desc: (
      <>
        Anything technical. Commands, error codes, metrics, axis labels, version strings,
        anything that should look engineered.
      </>
    ),
  },
];

const RULES: { kind: "do" | "dont"; body: React.ReactNode }[] = [
  {
    kind: "do",
    body: (
      <>
        Use the <strong>primary avatar</strong> at 256+ for any platform that displays the
        avatar as a real-sized image. GitHub, Twitter, Reddit, Mastodon.
      </>
    ),
  },
  {
    kind: "dont",
    body: (
      <>
        Add a drop shadow, glow, gradient, or border. The mark is flat. The avatar is flat. The
        bot variant&apos;s status indicator is the only decoration we ship.
      </>
    ),
  },
  {
    kind: "do",
    body: (
      <>
        Use the <strong>rounded</strong> variant where the platform doesn&apos;t apply its own
        crop. iOS app icons, Slack, Discord app entries.
      </>
    ),
  },
  {
    kind: "dont",
    body: (
      <>
        Recolor the bean. Crema fill, espresso crease. The light-mode inverse is the only other
        ratio that&apos;s on-system.
      </>
    ),
  },
  {
    kind: "do",
    body: (
      <>
        Use the <strong>bot</strong> variant on every account that automates replies —
        release-bots, CI bots, Slack apps. Humans should never wonder if barista&apos;s CI
        account is a person.
      </>
    ),
  },
  {
    kind: "dont",
    body: (
      <>
        Rotate or skew the bean. The −18° tilt is baked into the master. Compose other graphics
        around the mark; don&apos;t compose the mark itself.
      </>
    ),
  },
  {
    kind: "do",
    body: (
      <>
        Use the <strong>lockup</strong> when you have horizontal room — repo OG image,
        conference slide, presentation title. The wordmark is part of the system.
      </>
    ),
  },
  {
    kind: "dont",
    body: (
      <>
        Pair the mark with type other than Instrument Serif italic. The wordmark is locked. Free
        Google substitutes will look almost-right and that&apos;s worse than nothing.
      </>
    ),
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

export default function BrandPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>barista</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="hide-sm">
              Home
            </Link>
            <Link href="/docs/getting-started" className="hide-sm">
              Docs
            </Link>
            <Link href="/releases" className="hide-sm">
              Releases
            </Link>
            <a href={BENCH} className="hide-sm">
              Benchmarks
            </a>
            <Link href="/brand" className="active hide-sm">
              Brand
            </Link>
            <a className="nav-cta" href={GITHUB}>
              <GithubIcon />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <section className="brand-hero wrap">
        <span className="eyebrow">
          <span className="dot" /> brand kit · v0.1
        </span>
        <h1>
          The <em>bean</em>.
        </h1>
        <p>
          One mark across everything: GitHub, Twitter, Reddit, Slack, Discord, the favicon, the
          bot avatar, the README header. Crema on espresso. Italic serif wordmark. Every file
          you&apos;ll ever need is one click below.
        </p>

        <div className="stage">
          <img src="/brand/bean-avatar-rounded-512.png" alt="The barista bean mark" />
        </div>
      </section>

      <main>
        {/* ── COLOR TOKENS ── */}
        <section className="section">
          <div className="wrap">
            <header className="section-head">
              <div className="section-tag">
                <span className="idx">01</span> Palette
              </div>
              <div>
                <h2 className="section-title">
                  Three colors.
                  <br />
                  <em>That&apos;s all there is.</em>
                </h2>
                <p className="section-lede">
                  Espresso is the canvas. Crema is the brand. Cream is the breathing room.
                  Anything else is just contrast or accident.
                </p>
              </div>
            </header>

            <div className="palette">
              {PALETTE.map((c) => (
                <div className="swatch" key={c.name}>
                  <div className="chip" style={c.chip}>
                    {c.name}
                  </div>
                  <div className="meta">
                    <div className="row">
                      <span className="key">hex</span>
                      <span className="val">{c.hex}</span>
                    </div>
                    <div className="row">
                      <span className="key">rgb</span>
                      <span className="val">{c.rgb}</span>
                    </div>
                    <div className="row">
                      <span className="key">oklch</span>
                      <span className="val">{c.oklch}</span>
                    </div>
                    <div className="row">
                      <span className="key">use</span>
                      <span className="val">{c.use}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE MARK ── */}
        <section className="section">
          <div className="wrap">
            <header className="section-head">
              <div className="section-tag">
                <span className="idx">02</span> The mark
              </div>
              <div>
                <h2 className="section-title">
                  Four <em>variants</em>.
                  <br />
                  Eleven sizes each.
                </h2>
                <p className="section-lede">
                  Avatar (filled square), rounded (iOS-style), light-mode, and the bot variant
                  with status indicator. Every avatar comes pre-rendered at 16, 32, 48, 64, 96,
                  128, 192, 256, 400, 512, and 1024px PNG.
                </p>
              </div>
            </header>

            <div className="assets">
              {MARKS.map((m) => (
                <div className={`asset ${m.modifier}`.trim()} key={m.name}>
                  <div className={m.previewClass}>
                    <img src={m.img} alt={m.alt} />
                  </div>
                  <div className="info">
                    <div className="name">{m.name}</div>
                    <div className="desc">{m.desc}</div>
                    <div className="downloads">
                      {m.downloads.map((d) => (
                        <a href={d.href} download key={d.href}>
                          {d.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="brand-sublabel">Renders at every size</h3>
            <div className="size-strip">
              {SIZES.map((s) => (
                <div className="slot" key={s.label}>
                  <img src={s.src} width={s.box} height={s.box} alt="" />
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCKUP ── */}
        <section className="section">
          <div className="wrap">
            <header className="section-head">
              <div className="section-tag">
                <span className="idx">03</span> Lockup
              </div>
              <div>
                <h2 className="section-title">
                  Bean + <em>wordmark</em>.
                  <br />
                  For wider contexts.
                </h2>
                <p className="section-lede">
                  When you have room — README headers, conference banners, presentation title
                  slides — pair the bean with the italic wordmark. Don&apos;t compose your own.
                </p>
              </div>
            </header>

            <div className="lockup-row">
              {LOCKUPS.map((l) => (
                <div className={`lockup-card ${l.variant}`} key={l.name}>
                  <div className="pv">
                    <img src={l.img} alt={l.alt} />
                  </div>
                  <div className="info">
                    <div className="name">{l.name}</div>
                    <div className="desc">{l.desc}</div>
                    <div className="downloads">
                      {l.downloads.map((d) => (
                        <a href={d.href} download key={d.href}>
                          {d.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section className="section">
          <div className="wrap">
            <header className="section-head">
              <div className="section-tag">
                <span className="idx">04</span> Typography
              </div>
              <div>
                <h2 className="section-title">
                  Three typefaces.
                  <br />
                  One <em>voice</em>.
                </h2>
                <p className="section-lede">
                  Inter Tight for everything you read. Instrument Serif italic for the swash —
                  headlines, the wordmark, the accent moments. JetBrains Mono for code, numbers,
                  and the kind of small text that lives next to a metric.
                </p>
              </div>
            </header>

            <div className="type-spec">
              {TYPEFACES.map((t) => (
                <div className={t.cardClass} key={t.name}>
                  <div className="sample">{t.sample}</div>
                  <div>
                    <div className="label">{t.label}</div>
                    <div className="name">{t.name}</div>
                  </div>
                  <div className="desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DO / DON'T ── */}
        <section className="section">
          <div className="wrap">
            <header className="section-head">
              <div className="section-tag">
                <span className="idx">05</span> Rules
              </div>
              <div>
                <h2 className="section-title">
                  Don&apos;t redraw it.
                  <br />
                  Don&apos;t <em>recolor</em> it.
                </h2>
                <p className="section-lede">
                  The mark is a system. The variants below already cover every context
                  you&apos;ll encounter. If you&apos;re tempted to make a new one — first, ask.
                  We&apos;ll probably add the variant for you.
                </p>
              </div>
            </header>

            <div className="rules">
              {RULES.map((r, i) => (
                <div className={`rule ${r.kind}`} key={i}>
                  <span className="badge">{r.kind === "do" ? "do" : "don't"}</span>
                  <div className="body">{r.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD KIT CTA ── */}
        <section className="section">
          <div className="wrap">
            <div className="kit-cta">
              <div className="copy">
                <h3>
                  Grab the <em>whole kit</em>.
                </h3>
                <p>All SVGs, all PNGs, lockups, both color modes. One zip, ready to drop in.</p>
              </div>
              <a className="btn" href="/brand/barista-brand-kit.zip" download>
                Download brand kit
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 1.5v9M4 7l4 4 4-4M2 13.5h12" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer className="wrap">
          <div>
            <span className="brand" style={{ fontSize: "16px" }}>
              <span className="brand-mark" style={{ width: "18px", height: "18px" }} />{" "}
              barista.build
            </span>
            <span style={{ marginLeft: "14px" }}>© Bluminal Labs LLC · v0.1 preview</span>
          </div>
          <div className="links">
            <a href={GITHUB}>GitHub</a>
            <Link href="/docs/getting-started">Docs</Link>
            <a href={BENCH}>Benchmarks</a>
            <Link href="/brand">Brand</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
