# barista.build — site sources

This repository hosts the source for the Barista project's marketing and
documentation site at <https://barista.build/>, and the benchmark
dashboard at <https://bench.barista.build/>.

## Status

Pre-release scaffolding. The site framework has not yet been chosen
(candidates: Astro, 11ty, Hugo). The current `index.html` is a
single-file placeholder that exists so the domain points somewhere
real.

## Layout

- `index.html` — current landing page (static, no build step).
- `content/` — future home for written content (markdown, MDX, etc.).
- `static/` — future home for static assets (images, fonts, JS bundles).

## Building

No build step yet. Open `index.html` in a browser, or serve the
directory with any static file server.

## License

The site content is dual-licensed under MIT OR Apache-2.0, matching the
main Barista repository.
