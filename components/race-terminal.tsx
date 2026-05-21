"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; cls?: string };

const MVN_TITLE = "mvn 3.9.6 — cold resolve";
const BAR_TITLE = "barista pull — cold resolve";

const MVN_LINES: Line[] = [
  { text: "[INFO] Scanning for projects..." },
  { text: "[INFO] Downloading from central: spring-boot-starter-web-3.2.0.pom" },
  { text: "[INFO] Downloaded (4.2 kB at 18 kB/s)" },
  { text: "[INFO] Downloading from central: spring-boot-starter-3.2.0.pom" },
  { text: "[INFO] Downloaded (3.1 kB at 9 kB/s)" },
  { text: "[INFO] Downloading from central: spring-boot-3.2.0.pom" },
  { text: "[INFO] Downloading 215 more POMs sequentially..." },
  { text: "[INFO] BUILD SUCCESS", cls: "ok" },
  { text: "[INFO] Total time: 23.4 s", cls: "ok" },
];

const BAR_LINES: Line[] = [
  { text: "$ barista pull", cls: "prompt" },
  { text: "  resolving 218 dependencies", cls: "dim" },
  { text: "  ⬇ 218 POMs · HTTP/2 multiplexed · 6 conns", cls: "key" },
  { text: "  ✓ graph complete in 1.2s", cls: "ok" },
  { text: "  ⬇ 218 jars · 38.2 MB · content-addressed", cls: "key" },
  { text: "  ✓ hardlinked into ~/.m2/repository", cls: "ok" },
  { text: "  ✎ barista.lock (sha256 verified)", cls: "dim" },
  { text: "✓ pull in 4.4s · 0 redundant requests", cls: "ok" },
];

const BARS = [
  { who: "mvn 3.9.x", w: 100, t: "23.4s", lead: false },
  { who: "mvnd 2.x", w: 55, t: "12.8s", lead: false },
  { who: "barista", w: 19, t: "4.4s", lead: true },
];

const MVN_MS = 6500;
const BAR_MS = 1300;
const MVN_FINAL = 23.4;
const BAR_FINAL = 4.4;

export function RaceTerminal() {
  const [mvnShown, setMvnShown] = useState<Line[]>([]);
  const [barShown, setBarShown] = useState<Line[]>([]);
  const [mvnTimer, setMvnTimer] = useState("00.0s");
  const [barTimer, setBarTimer] = useState("00.0s");
  const [mvnDone, setMvnDone] = useState(false);
  const [barDone, setBarDone] = useState(false);
  const [barsFilled, setBarsFilled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];
    let started = false;

    const run = () => {
      if (started) return;
      started = true;

      MVN_LINES.forEach((line, i) => {
        const t = (i + 1) * (MVN_MS / (MVN_LINES.length + 1));
        timers.push(setTimeout(() => setMvnShown((s) => [...s, line]), t));
      });
      BAR_LINES.forEach((line, i) => {
        const t = (i + 1) * (BAR_MS / (BAR_LINES.length + 1));
        timers.push(setTimeout(() => setBarShown((s) => [...s, line]), t));
      });

      const mvnStart = performance.now();
      const mi = setInterval(() => {
        const e = performance.now() - mvnStart;
        if (e >= MVN_MS) {
          setMvnTimer("23.4s");
          setMvnDone(true);
          clearInterval(mi);
        } else {
          setMvnTimer(((e / MVN_MS) * MVN_FINAL).toFixed(1) + "s");
        }
      }, 40);
      intervals.push(mi);

      const barStart = performance.now();
      const bi = setInterval(() => {
        const e = performance.now() - barStart;
        if (e >= BAR_MS) {
          setBarTimer("4.4s");
          setBarDone(true);
          clearInterval(bi);
        } else {
          setBarTimer(((e / BAR_MS) * BAR_FINAL).toFixed(2) + "s");
        }
      }, 25);
      intervals.push(bi);

      timers.push(setTimeout(() => setBarsFilled(true), 250));
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <div className="race">
        <div className="term">
          <div className="term-head">
            <div className="term-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="term-title">{MVN_TITLE}</div>
            <div className={mvnDone ? "term-timer done" : "term-timer"}>{mvnTimer}</div>
          </div>
          <div className="term-body">
            {mvnShown.map((l, i) => (
              <div className="term-line" key={i}>
                <span className={l.cls}>{l.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="term">
          <div className="term-head">
            <div className="term-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="term-title">{BAR_TITLE}</div>
            <div className={barDone ? "term-timer done" : "term-timer"}>{barTimer}</div>
          </div>
          <div className="term-body">
            {barShown.map((l, i) => (
              <div className="term-line" key={i}>
                <span className={l.cls}>{l.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {BARS.map((b) => (
          <div className="bar-row" key={b.who}>
            <div className={b.lead ? "who bar" : "who"}>{b.who}</div>
            <div className="bar-track">
              <div
                className={b.lead ? "bar-fill bar" : "bar-fill"}
                style={{ width: barsFilled ? `${b.w}%` : "0%" }}
              />
            </div>
            <div className={b.lead ? "bar-time bar" : "bar-time"}>{b.t}</div>
          </div>
        ))}
      </div>

      <div className="race-foot">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11.5px",
            color: "var(--fg-4)",
            letterSpacing: "0.04em",
          }}
        >
          Illustrative of the cold-resolve path · Spring Boot starter corpus ·{" "}
          <a
            href="https://bench.barista.build"
            style={{
              color: "var(--fg-3)",
              textDecoration: "underline",
              textDecorationColor: "var(--line)",
              textUnderlineOffset: "3px",
            }}
          >
            measured data &rarr;
          </a>
        </span>
      </div>
    </div>
  );
}
