# Pages

Next.js routes and root layout. Each `.tsx` file in this directory maps to a URL path.

## Routes
| File | Route | Purpose |
|------|-------|---------|
| `_app.tsx` | All pages | Root layout: Sidebar (left) + Navbar (top) + AnimatePresence route transitions |
| `_document.tsx` | HTML shell | Custom Next.js document (font imports, etc.) |
| `index.tsx` | `/` | Home page: bio text + services grid with staggered animations |
| `projects.tsx` | `/projects` | Projects listing with category filter nav |
| `resume.tsx` | `/resume` | Resume/CV display |

## Layout Structure (`_app.tsx`)
```
ThemeProvider (class-based dark mode)
├── 12-col grid layout
│   ├── Sidebar (col-span-3, left panel)
│   └── Main content (col-span-9)
│       ├── Navbar (top bar)
│       └── AnimatePresence(<Component key={router.route} />)
```

## Conventions
- **Route transitions**: All page changes wrapped in `AnimatePresence` with `exitBeforeEnter`. Route animation defined in `animations.ts`.
- **No data fetching**: All content is static from `data.ts`. SSR/SSG methods are commented out.
- **Type safety**: Page components typed as default exports. Router props passed through `_app.tsx`.

## Anti-Patterns
- Do NOT add inline API calls or async data loading — use static data from `data.ts`.
- Do NOT modify the grid layout in `_app.tsx` without considering responsive breakpoints (sm/md/lg).
- Do NOT remove the `key={router.route}` prop on `<Component>` — required for AnimatePresence exit animations.
