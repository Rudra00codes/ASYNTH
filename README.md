# Personal Portfolio

Minimal, fast, and dark-themed personal portfolio built with React, Vite, and Tailwind CSS.

## Features

- Responsive three-column layout (collapsible at smaller breakpoints)
- Reusable Panel component with double-ring outline (inner + outer)
- Sections: Profile, Tech Stack, Links, Daily Tools, Project Highlight
- Custom typography using Space Grotesk (variable + static fallbacks)
- Subtle glassy panels with blur and shadows
- Lightweight Vite dev server and build pipeline

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Space Grotesk font (bundled locally in `src/assets/fonts/Space_Grotesk`)

## Getting Started

Prerequisites: Node.js 18+

Development

```powershell
npm install
npm run dev
```

Production build

```powershell
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/        # AppShell, Panel
    profile/       # ProfileCard
    tech/          # TechStackPanel
    links/         # LinksPanel
    daily/         # ToolIconRail, DailyToolStack
    project/       # ProjectHighlightCard
  styles/
    global.css     # Tailwind directives, font-face, base resets
  assets/
    fonts/Space_Grotesk/  # Space Grotesk (variable + static)
```

## Customization

- Fonts: `global.css` declares `@font-face` for Space Grotesk and sets `body { font-family: 'Space Grotesk', ... }`.
- Global scale: `:root { font-size: 90% }` in `global.css` to slightly reduce overall size.
- Panels: add `panel-double` to any Panel to show the inner + outer ring.
- Tailwind: extend theme in `tailwind.config.js` (colors, font stacks, radii) as needed.

## Notes

- Icons/graphics are placeholders; swap with your assets or icon set of choice.
- The double-ring effect is implemented via a small runtime-injected style in `Panel.jsx` for simplicity. This can be moved to a CSS file or Tailwind plugin later.

## License

MIT — see [LICENSE](./LICENSE).

