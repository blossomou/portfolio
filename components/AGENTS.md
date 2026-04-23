# Components

Reusable UI components for the portfolio. All are functional React components using Tailwind CSS and Framer Motion.

## Files
| File | Purpose | Key Dependencies |
|------|---------|-----------------|
| `Navbar.tsx` | Top navigation bar with links to pages | framer-motion (AnimatePresence) |
| `Sidebar.tsx` | Left sidebar profile card | react-icons, ThemeToggle |
| `Bar.tsx` | Skill progress bar component | — |
| `ProjectCard.tsx` | Project display card (image + info) | IProject type |
| `ServiceCard.tsx` | Service tile on home page | IService type |
| `ProjectsNavbar.tsx` | Category filter nav for projects page | Category type |
| `ThemeToggle.tsx` | Dark/light mode toggle button | next-themes |

## Conventions
- **Props**: All data received via props (no internal state for content). Types from `models/type.ts`.
- **Animations**: Use Framer Motion `motion.*` wrappers with variants from `animations.ts` when animating.
- **Dark mode**: All components use Tailwind `dark:` prefix for theme-aware styling.
- **No context/store**: Components are pure and prop-driven. State lives in `_app.tsx` or parent page.

## Anti-Patterns
- Do NOT add API calls inside components — data is static from `data.ts`.
- Do NOT define new animation variants here — put them in `animations.ts`.
- Do NOT use class components.
