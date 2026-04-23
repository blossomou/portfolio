# Portfolio — Next.js Project

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Deployed on Internet Computer (ICP).

## Stack
Next.js 12 · React 17 · TypeScript · Tailwind CSS 3 · Framer Motion · next-themes · react-icons

## Structure
```
portfolio/
├── pages/          # Next.js routes + layout
│   ├── _app.tsx    # Root layout (Sidebar + Navbar + ThemeProvider)
│   ├── index.tsx   # Home: bio + services grid
│   ├── projects.tsx
│   └── resume.tsx
├── components/     # Reusable UI (7 TSX files)
├── models/         # TypeScript interfaces & enums
├── styles/         # globals.css (Tailwind directives)
├── public/         # Static assets (images/)
├── data.ts         # All static content: services, languages, tools, projects
└── animations.ts   # Framer Motion animation definitions
```

## Where to Look
| Task | Location | Notes |
|------|----------|-------|
| Add/edit page | `pages/` | New file = new route. Layout in `_app.tsx`. |
| Add component | `components/` | Functional components, use framer-motion for animations. |
| Change content (bio, services, projects) | `data.ts` | Single source of truth — no API calls needed. |
| Define types | `models/type.ts` | IService, ISkill, IProject, Category. |
| Add animation | `animations.ts` | fadeInUp, stagger, routeAnimation patterns. |
| Theme colors / dark mode | `tailwind.config.js` | Custom palette (primarycolor, textbgcolor, dark.*) + custom shadows. |
| Global styles | `styles/globals.css` | Tailwind @apply directives only. |

## Conventions
- **TypeScript**: `strict: false`, `jsx: preserve`, `target: es5`. No strict null checks — use defensively.
- **Dark mode**: Class-based via `next-themes` + Tailwind `dark:` prefix. Root `<ThemeProvider attribute="class">` in `_app.tsx`.
- **Animations**: Framer Motion `variants` pattern (initial → animate → exit). Route transitions use `AnimatePresence` with `exitBeforeEnter`.
- **Data flow**: All content is static in `data.ts`. No SSR/SSG — commented-out data fetching methods remain as reference.
- **Icons**: react-icons only (`IconType`). No custom SVG icons.
- **Styling**: Tailwind utility classes exclusively. No CSS modules or styled-components.

## Anti-Patterns
- Do NOT add inline styles (except the one-off `marginLeft`/`marginRight` hack in index.tsx).
- Do NOT use `getServerSideProps` / `getStaticProps` — data is static, fetching code is commented out.
- Do NOT introduce new state management — everything is prop-driven or static.
- Do NOT modify `_document.tsx` unless changing HTML shell (fonts, meta tags).

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Build + export (static site)
npm start        # Serve production build
npm run lint     # ESLint check
```

## Notes
- `out/` and `.next/` are build artifacts — never edit. Clean with `rm -rf .next out`.
- Deployment target is ICP (Internet Computer). See `dfx.json`, `canister_ids.json`, `Notes.md`.
- Project originated from a YouTube tutorial; some commented-out code references the original author's projects.
