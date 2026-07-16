# Aditya Lingwal — Portfolio v2

Production scaffold for the redesigned portfolio: a single "cream world" theme,
self-hosted type, and a capsule nav that stretches to the active route.

The approved design source lives at
`port_folio/scratchpad/redesign/portfolio_home.template.html` (a sibling repo,
not part of this one) — all copy, CSS values, and behaviors here are ported
from that mockup.

## Stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/) + TypeScript (strict mode)
- [Tailwind CSS](https://tailwindcss.com/) v3 for tokens/utilities, plain CSS for the
  hand-tuned layout/animation rules ported from the mockup (`src/index.css`)
- [React Router](https://reactrouter.com/) v6 — 5 routes
- [GSAP](https://gsap.com/) for micro-interactions only (magnetic CTA hover)
- ESLint (typescript-eslint + react-hooks) + Prettier
- Absolute imports via the `@/` alias (`@/components/...`, `@/pages/...`, `@/data/...`)

## Dev commands

```bash
npm install       # install dependencies
npm run dev        # start the dev server
npm run build      # type-check (tsc -b) + production build
npm run preview     # preview the production build
npm run lint       # eslint, zero warnings allowed
npm run format      # prettier --write
```

## Structure

```
src/
  main.tsx              — app entry, router + StrictMode
  App.tsx               — route table + persistent header/grain overlay
  index.css             — fonts, tokens, and the ported mockup CSS
  pages/
    AboutMe.tsx          → '/'            full implementation
    WorkExperience.tsx   → '/experience'  placeholder ("{ coming soon }")
    Projects.tsx         → '/projects'    placeholder
    Blogs.tsx            → '/blogs'       placeholder
    Contact.tsx          → '/contact'     placeholder
  components/
    NavPills.tsx         — capsule nav; active route stretches via CSS + router state
    Cta.tsx              — pill CTA button (fill/ghost) with GSAP magnetic hover
    Grain.tsx            — fixed film-grain overlay
  data/
    about.ts             — About Me page copy, typed
    nav.ts               — nav labels/routes, typed
  assets/fonts/           — self-hosted General Sans + Space Mono, .woff2
```

## Design tokens

Single theme — no dark mode. Defined in `tailwind.config.ts`.

| Token    | Value       | Use                          |
| -------- | ----------- | ----------------------------- |
| `cream`  | `#FFFCE4`   | page background                |
| `ink`    | `#0E100F`   | text, borders                  |
| `muted`  | `#767D73`   | secondary text                 |
| `orange` | `#FF8709`   | CTA hover fill                 |
| `pink`   | `#FEC5FB`   | accent (reserved)              |
| `blue`   | `#2B6BFF`   | focus ring                     |
| `sans`   | General Sans (400/500/600/700) | body copy, self-hosted   |
| `mono`   | Space Mono (400/700)            | labels, arrows, self-hosted |

`wide: 861px` is a desktop-first custom screen (matches the pattern from the
previous portfolio repo); the About Me layout itself collapses to a single
column below `860px` via a plain CSS media query in `index.css`, to match the
mockup exactly.

## Notes

- No dark mode, no load animations on About Me by design — see the mockup.
- `prefers-reduced-motion: reduce` disables nav-pill/CTA transitions and skips
  the GSAP magnetic hover entirely.
- Placeholder pages (`Work Experience`, `Projects`, `Blogs`, `Contact`) are
  intentionally minimal — their designs aren't approved yet.
# my-portfolio
