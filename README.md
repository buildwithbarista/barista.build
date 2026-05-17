# barista.build — site sources

Source for the Barista project's marketing and documentation site at
<https://barista.build/>. The companion benchmark dashboard at
<https://bench.barista.build/> is built and deployed from a separate
repository.

## Status

Pre-release scaffolding. A minimal "coming soon" landing route ships from
day one so the domain has a live target; real content lands as the
project matures.

## Stack

- [Next.js 16+](https://nextjs.org/) (App Router)
- [React 19+](https://react.dev/)
- TypeScript (strict mode)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) component primitives
- Deployed to [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edit `app/page.tsx` to change the landing
route; the page auto-reloads.

## Scripts

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the dev server          |
| `npm run build` | Build for production          |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                    |

## Layout

- `app/` — App Router routes, layouts, global styles.
- `components/ui/` — shadcn/ui component primitives.
- `lib/` — shared utilities (`cn`, etc.).
- `public/` — static assets served at the site root.

## License

Dual-licensed under [MIT](./LICENSE-MIT) OR
[Apache-2.0](./LICENSE-APACHE), matching the main Barista repository.
