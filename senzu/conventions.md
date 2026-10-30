# Convenciones del proyecto (adoptadas con /adoptar)
<!-- senzu:inmutable -->
Definidas por entrevista el 2026-10-30 (proyecto nuevo, sin código previo). Estas convenciones GANAN a las preferencias de Senzu.

> Cuando el proyecto tenga código real, re-ejecutar `/adoptar` en modo evidencia para contrastar lo pactado con lo construido.

## Idioma
- Identificadores (clases, funciones, variables, archivos): **inglés** — ej. `Hero.astro`, `activateNeighbors()`, `cortexNodes`.
- Términos de dominio (lenguaje ubicuo): **inglés** — el dominio es técnico y ya está en inglés: `Cortex`, `hook`, `node`, `fact`, `two-hop activation`.
- Comentarios: **castellano**.
- Devlog y memoria: **castellano**.
- Mensajes de commit: **castellano**, Conventional ≤72 sin co-autores.
- Textos de cara al usuario (UI, páginas, errores visibles): **inglés** (producto global, D-007).

## Naming
- Componentes (`.astro`, `.tsx`): **PascalCase** — ej. `Hero.astro`, `Cortex.tsx`, `ThemeToggle.tsx`.
- Páginas y rutas (`src/pages/`): **kebab-case** / minúsculas — ej. `index.astro`, `benchmarks.astro`, `docs.astro`.
- Utilidades y funciones (`src/lib/`): **camelCase** — ej. `copyToClipboard.ts`, `formatPercent()`.
- Datos (`src/data/`): **kebab-case** — ej. `benchmarks.ts`, `cortex-graph.ts`.
- Constantes de módulo: `UPPER_SNAKE_CASE`.

## Estructura (src/)
```
src/
├── components/
│   ├── landing/     # secciones del landing (Hero, DemoCortex, HowItWorks, BenchmarksSummary, QuickStart, OpenSource)
│   ├── cortex/      # la island React del grafo y sus piezas
│   └── docs/        # piezas de la página de instalación (InstallTabs)
├── layouts/         # BaseLayout.astro y marcos comunes
├── lib/             # utilidades puras (clipboard, formato, helpers del grafo)
├── data/            # datos estáticos (benchmarks, nodos/aristas del Cortex, hosts de instalación)
├── styles/          # tokens.css (del design system) + global.css
└── pages/           # index.astro, benchmarks.astro, docs.astro
```
- Las **islands React** (`client:*`) existen solo para lo interactivo (Cortex, toggle de tema, tabs). Todo lo demás es `.astro` estático (D-004, Islands architecture).

## Front
- **Tailwind 4** vía `@tailwindcss/vite` (NO `@astrojs/tailwind`, que es v3).
- Estilo por **tokens del design system** (`senzu/design-system/hemispheric/MASTER.md` → `src/styles/tokens.css`). Semánticos dark en `:root`, light en `html.light` (D-006).
- **Sin colores crudos** (hex, rgb) en componentes: todo valor visual pasa por un token/utilidad Tailwind. Excepción documentada: la propia hoja de tokens y, si hace falta, atributos de SVG dinámicos del Cortex (preferir `currentColor`/`var(--...)`).
- **Sin estilos inline** en componentes `.astro`: usar clases o `<style>` scoped. En `.tsx` se permite `style={{}}` solo para valores dinámicos de animación (transforms del Cortex por `requestAnimationFrame`).
- Hidratación con la directiva más perezosa posible (`client:visible` > `client:idle` > `client:load`).
- Respetar `prefers-reduced-motion` en toda animación.
- a11y: contraste 4.5:1, foco visible, tap targets ≥44px en móvil, labels mono ≥12px.

## Tests / verificación
- Cada tarea se cierra con: `npm run check` (astro check) + `npm run build` + **ui-verify** (375/768/1440, dark/light, consola sin errores).
- **Vitest** para la lógica del Cortex (activación a 2 saltos, selección de nodos, recorrido del grafo). Archivos `*.test.ts` junto al módulo o en `src/**/__tests__/`.
- No se da una tarea por hecha sin salida real pegada en el devlog.

## Git
- No commitear en `main`/`master`/`develop`: rama primero (`feat/…`, `fix/…`).
- Conventional Commits en castellano, ≤72 chars, imperativo. Cuerpo opcional con el "por qué" y `Tarea: <id>`.
- **Sin líneas de co-autor.**
- Cada commit referenciado en el devlog del día (hash + mensaje).

## Zonas intocables
- Generados por Senzu: `CLAUDE.md`, `AGENTS.md`, `.claude/**`, `.agents/**`, `.mcp.json`, `senzu/senzu.json`, este archivo y `senzu/conventions.json`.
- Secretos: `.env*`, `*.pem`, `*.key` (solo documentar variables en `.env.example`).
- Dependencias y artefactos: `node_modules/`, `dist/`, `.astro/`.
- Design system como fuente de verdad: `senzu/design-system/hemispheric/MASTER.md` (los tokens se regeneran, no se parchean a mano en el CSS generado).
