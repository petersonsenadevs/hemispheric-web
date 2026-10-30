# Plan — Web de Hemispheric (gethemispheric)

- **Objetivo:** Que un dev de Claude Code/Codex aterrice en la web, vea el Cortex en acción y los benchmarks, y pulse "Install" o vaya al repo.
- **Estado:** en curso · **Actualizado:** 2026-10-30
- **Stack / perfil:** Astro + React islands + Tailwind 4 · output static (SSG) · front/landing
- **Brief:** `senzu/plan/brief.md` · **Design system:** `senzu/design-system/hemispheric/MASTER.md` · **Blueprint:** `senzu/design-system/hemispheric/blueprint.md` · **Devlog:** `senzu/devlog/INDEX.md`
- **Definición de hecho global:** `npx astro check` sin errores · `npm run build` ok · responsive 375/768/1440 verificado con ui-verify · dark + light funcionales · reduced-motion · sin secretos · devlog al día · sin push a main sin aprobación

## Alcance

- **IN:**
  - Landing `/`: hero editorial 2 col + Cortex demo interactivo + "How it works" + benchmarks resumidos + quick-start + open source (D-011, D-013)
  - Página `/benchmarks`: tabla LoCoMo completa + metodología + matiz honesto + reproducir (D-012)
  - Página `/docs`: instalación por anfitrión (Claude Code, Codex, Senzu, Obsidian, Standalone) con snippets copiables (D-012)
  - Cortex como island React `client:visible`, client-side puro, sin backend (D-004)
  - Dark default + light toggle, responsive, a11y básica, SEO on-page
- **OUT (explícito):**
  - Backend, API, base de datos, analítica con servidor (la web es SSG pura)
  - Blog, changelog, docs exhaustivas tipo wiki (solo instalación por anfitrión)
  - Internacionalización (la web es solo en inglés — D-007)
  - El motor Node en sí (vive en `D:\dev-standards`, no en este repo)
  - Deploy y dominio (se decide y aprueba aparte, al final)
- **Supuestos:**
  - Output Astro `static`; el Cortex se renderiza solo con JS en el navegador
  - Hasta tener assets reales se usa wordmark "Hemispheric." (como en maquetas), comando `hemispheric install --claude` y licencia MIT como placeholders claramente marcados
- **Riesgos:** ver sección final

## Fases

| Fase | Entregable verificable por el usuario | Estado |
|---|---|---|
| F1 | Walking skeleton: proyecto Astro + tokens + layout base (nav/footer/toggle) que buildea y se ve | done |
| F2 | Hero del landing: editorial 2 col con CTA copiable (Cortex placeholder estático) | done |
| F3 | Cortex island: grafo interactivo React (hover, nodos activos, activación 2 saltos) | done |
| F4 | Resto del landing: How it works + benchmarks resumidos + quick-start + open source | todo |
| F5 | Página `/benchmarks` completa | todo |
| F6 | Página `/docs` completa (instalación por anfitrión) | todo |
| F7 | Pulido: SEO/meta, a11y final y verificación global de las 3 páginas | todo |

---

## F1 — Walking skeleton

### F1-T1 · Inicializar proyecto Astro  [S] [done]
- Para qué: tener el esqueleto que buildea, sobre el que construir todo lo demás
- Skill: code-quality §references/astro.md (solo "setup/estructura") — o sin skill si el scaffolding es directo
- Archivos: `package.json`, `astro.config.mjs` (output static, integración React + Tailwind 4), `tsconfig.json`, `src/pages/index.astro`
- Hecho cuando: `npm create astro` con plantilla mínima, React y Tailwind 4 añadidos, `/` renderiza un "hello" y buildea
- Verificar: `npx astro check` y `npm run build` sin errores
- Depende de: —
- Verificado: `astro check` → 0 errors/0 warnings/0 hints · `npm run build` → 1 page built, Complete
- Cumple: hay un esqueleto Astro que compila y buildea; base lista para F1-T2
- Devlog: `senzu/devlog/2026-10-30/007-scaffold-astro.md` (commit `59e4f97`)

### F1-T2 · Integrar el design system  [S] [done]
- Para qué: que todo lo que se maquete salga ya con la paleta, tipografía y tokens decididos
- Skill: ui-styling §tokens-tailwind (integración Tailwind 4) + design-system (solo si hay que regenerar)
- Archivos: `src/styles/tokens.css` (desde `senzu/design-system/hemispheric/app.css`), `src/styles/global.css`, fuentes (Instrument Serif, Inter, Geist Mono), `astro.config` import
- Hecho cuando: `@theme` con dark en `:root` y light en `html.light`; utilidades `bg-background`/`text-foreground`/`text-accent` disponibles; fuentes cargadas (self-host o Google)
- Verificar: `npx astro check` + capturar `/` y ver fondo `#0A0A0A` y acento ámbar
- Depende de: F1-T1
- Verificado: `astro check` 0 err · `build` Complete · CSS con utilidades @theme + 17 @font-face · ui-verify 375/1440 → 0 problemas; captura confirma fondo #0A0A0A y acento ámbar
- Cumple: el design system está en el proyecto; cualquier componente usa ya los tokens y las 3 fuentes
- Devlog: `senzu/devlog/2026-10-30/008-design-system-integrado.md`

### F1-T3 · Layout base (nav + footer + toggle)  [M] [done]
- Para qué: el marco común de las 3 páginas: navegación, cambio de tema y pie
- Skill: ui-ux-pro-max §references/es (stack astro) + §pro-rules (a11y, focus)
- Archivos: `src/layouts/BaseLayout.astro` (head/SEO slots, nav transparente→scroll oscuro, footer), `src/components/ThemeToggle` (island mínima, localStorage, sin flash), `src/components/Nav.astro`
- Hecho cuando: nav con links (Demo · Benchmarks · Docs · GitHub) y toggle dark/light sin parpadeo inicial; footer con licencia/GitHub; tap targets ≥44px (finding ui-verify 005)
- Verificar: ui-verify `/` (375/768/1440) sin scroll horizontal y toggle funcional
- Depende de: F1-T2
- Verificado: `astro check` 0 err · `build` Complete · ui-verify 375/768/1440 → 0 problemas (burger probado); dark y light capturados
- Cumple: hay marco común (nav fijo con scroll-darken, toggle sin flash, footer) reutilizable por todas las páginas
- Devlog: `senzu/devlog/2026-10-30/009-layout-base.md`
- Nota: ThemeToggle implementado como `<script>` vanilla (no island React) — más ligero para un toggle de clase; cumple D-004

---

## F2 — Hero del landing

### F2-T1 · Hero editorial 2 columnas  [M] [done]
- Para qué: lo primero que ve el dev; comunica el producto y ofrece el CTA sin scroll (D-011)
- Skill: ui-ux-pro-max §references/es (stack astro) + blueprint §Hero
- Archivos: `src/components/landing/Hero.astro`, `src/pages/index.astro`
- Hecho cuando: grid 55/45 (texto izq, hueco Cortex der con placeholder estático); H1 "Memory for your agent." en Instrument Serif; sub "Free. Offline. No server."; CTA `hemispheric install --claude` copiable (Geist Mono) + CTA "See the demo ↓"; eyebrow y labels mono ≥12px (finding 005); en móvil columna única, CTA ancho completo
- Verificar: ui-verify `/` 375/768/1440; clic en copiar funciona
- Depende de: F1-T3
- Verificado: `astro check` 0 err · `build` Complete · ui-verify 375/768/1440 → 0 problemas (CTA 228×44px visible sin scroll); copia al portapapeles con feedback; móvil texto arriba + Cortex debajo
- Cumple: el dev ve el claim, el Cortex y el CTA de instalación sin hacer scroll
- Devlog: `senzu/devlog/2026-10-30/010-hero.md`

---

## F3 — Cortex island (killer feature)

### F3-T1 · Grafo del Cortex interactivo  [M] [done]
- Para qué: el momento de sorpresa visual; muestra cómo el motor conecta y recupera hechos (D-004)
- Skill: ui-ux-pro-max (patrón) + code-quality §references/react.md (componente, perf). Animación con SVG + rAF client-side; si se decide librería, animejs (ya instalada) — no cargar 3D
- Archivos: `src/components/cortex/Cortex.tsx` (+ datos de ejemplo `claude → project → stack → astro`), tipos, estilos con tokens
- Hecho cuando: nodos conectados que "respiran"; hover/focus en nodo muestra el hecho; nodos activos en ámbar; activación a 2 saltos visible (hop 0 ámbar, hop 1 ámbar apagado); `prefers-reduced-motion` desactiva el movimiento; táctil en móvil
- Verificar: montar en página de prueba, ui-verify + consola sin errores; reduced-motion respetado
- Depende de: F1-T2
- Verificado: 11 tests Vitest en verde · `astro check` 0 err · `build` Complete · ui-verify 375/768/1440 → 0 problemas · interacción Playwright (hover cambia hecho y activación) · consola sin errores
- Cumple: el grafo recupera por activación a 2 saltos y muestra el hecho; la lógica está probada y es determinista
- Devlog: `senzu/devlog/2026-10-30/011-cortex-island.md`
- Nota: implementado con SVG + estado React (sin rAF ni animejs: la interacción no lo necesita); la respiración es CSS y respeta reduced-motion. Lógica pura separada del render → testeable con Vitest (D-014)

### F3-T2 · Integrar el Cortex en hero y sección Demo  [S] [done]
- Para qué: reemplazar el placeholder del hero y crear la sección "Demo Cortex" con la island real
- Skill: ui-ux-pro-max + blueprint §Demo Cortex
- Archivos: `src/components/landing/DemoCortex.astro`, actualizar `Hero.astro`, `index.astro`
- Hecho cuando: Cortex con `client:visible` en el hero (versión ambiente) y en la sección demo (versión interactiva con leyenda); H2 "How it stores and recalls what matters."
- Verificar: ui-verify `/`; la island hidrata solo al entrar en viewport (comprobar en Network/consola)
- Depende de: F3-T1, F2-T1
- Verificado: `astro check` 0 err · `build` Complete · ui-verify 375/768/1440 → 0 problemas; dos islands hidratan sin errores de consola
- Cumple: el hero muestra el grafo ambiente y la sección demo el interactivo con leyenda; ancla `#demo` operativa
- Devlog: `senzu/devlog/2026-10-30/012-integrar-cortex-y-ancho.md`

---

## F4 — Resto del landing

### F4-T1 · Sección "How it works" (pasos alternados)  [M] [todo]
- Para qué: explicar el motor sin cards idénticas ni ilustraciones stock (D-010)
- Skill: ui-ux-pro-max + blueprint; SVG propios por paso
- Archivos: `src/components/landing/HowItWorks.astro` + SVG de los 3 pasos (hook flow, graph node, two-hop)
- Hecho cuando: 3 pasos alternados (texto izq/der) con su diagrama SVG; labels SVG ≥12px (finding 005); responsive a columna única
- Verificar: ui-verify `/` 375/768/1440
- Depende de: F1-T3
- Devlog: —

### F4-T2 · Sección Benchmarks resumida  [S] [todo]
- Para qué: dar la prueba en el landing sin volcar la página entera; CTA a `/benchmarks` (D-013)
- Skill: ui-ux-pro-max + blueprint §Benchmarks
- Archivos: `src/components/landing/BenchmarksSummary.astro`
- Hecho cuando: tabla corta LoCoMo (Motor 25,6% · Embedding 28,0% · mem0 21,1% · Zep ⏳) + destacado cat2 temporal (16,2% vs 5,3%) + matiz honesto en cursiva + CTA "See full benchmarks →" a `/benchmarks`; números en Geist Mono tabular
- Verificar: ui-verify `/`; enlace a `/benchmarks` presente
- Depende de: F1-T3
- Devlog: —

### F4-T3 · Sección quick-start + open source  [S] [todo]
- Para qué: cerrar el landing con la acción (instalar) y la confianza (open source)
- Skill: ui-ux-pro-max + blueprint §Instalación/§Open source
- Archivos: `src/components/landing/QuickStart.astro`, `src/components/landing/OpenSource.astro`
- Hecho cuando: quick-start con snippet copiable + CTA "Full docs →" a `/docs`; open source con licencia (MIT placeholder), badge GitHub stars estático, CTA "View the code →"
- Verificar: ui-verify `/`; enlaces a `/docs` y GitHub presentes
- Depende de: F1-T3
- Devlog: —

---

## F5 — Página /benchmarks

### F5-T1 · Página de benchmarks completa  [M] [todo]
- Para qué: la prueba detallada para el dev escéptico, con metodología reproducible (D-012)
- Skill: ui-ux-pro-max + blueprint §Benchmarks + brief
- Archivos: `src/pages/benchmarks.astro`
- Hecho cuando: tabla LoCoMo completa (1986 preguntas) + sub-tabla por categoría + matiz honesto (Qwen3-8B, no comparable al leaderboard oficial) + sección "cómo reproducir" + CTA repo; fila Zep en `⏳ running`; estilo paper académico
- Verificar: ui-verify `/benchmarks` 375/768/1440; tabla con scroll horizontal controlado en móvil
- Depende de: F1-T3
- Devlog: —

---

## F6 — Página /docs

### F6-T1 · Instalación por anfitrión  [M] [todo]
- Para qué: que el dev instale el motor en su anfitrión concreto (D-012)
- Skill: ui-ux-pro-max + ui-styling §tabs (shadcn/ui tabs accesibles) + blueprint §Instalación
- Archivos: `src/pages/docs.astro`, `src/components/docs/InstallTabs` (island si hace falta interacción)
- Hecho cuando: tabs Claude Code · Codex · Senzu · Obsidian · Standalone; cada una con snippet copiable + frase de qué hace el hook; comandos marcados como placeholder hasta confirmar; sin precio/registro/nube
- Verificar: ui-verify `/docs`; tabs navegables por teclado; copiar funciona
- Depende de: F1-T3
- Devlog: —

---

## F7 — Pulido y verificación final

### F7-T1 · SEO, meta y a11y final  [S] [todo]
- Para qué: que la web sea indexable y accesible antes de considerarla lista
- Skill: marketing-seo §on-page (title/description/OG por página) + ui-ux-pro-max §pro-rules
- Archivos: `BaseLayout.astro` (meta/OG/favicon), `src/pages/*` (title/description), `public/` (favicon, og-image), `robots.txt`, sitemap (integración astro)
- Hecho cuando: cada página con `<title>` y meta description propios + OG; favicon; sitemap generado; contraste y foco revisados; reduced-motion global
- Verificar: `npm run build` genera sitemap; revisar `<head>` de las 3 páginas
- Depende de: F4, F5, F6
- Devlog: —

### F7-T2 · Verificación global de las 3 páginas  [S] [todo]
- Para qué: cierre con evidencia real de que todo cumple la definición de hecho
- Skill: ui-verify §flujo completo
- Archivos: `senzu/ui-verify/` (capturas)
- Hecho cuando: ui-verify de `/`, `/benchmarks` y `/docs` en 375/768/1440, dark y light, sin errores de consola ni findings bloqueantes; `astro check` y `build` en verde
- Verificar: salida de ui-verify (0 problemas o justificados) + `npm run build`
- Depende de: F7-T1
- Devlog: —

---

## Tareas ad hoc (fuera del plan original)

### X-T1 · Ensanchar el contenedor del sitio  [S] [done]
- Para qué: el usuario veía demasiado margen lateral; que el contenido ocupe más pantalla
- Qué se hizo: contenedor de nav/hero/demo/footer `max-w-6xl` → `max-w-[1400px]` + padding lateral `px-6 sm:px-8 lg:px-12`; hero a `1.1fr/1fr` gap-16; Cortex SVG a 520px
- Verificado: ui-verify 375/768/1440 → 0 problemas; margen lateral en 1440px de ~144px a ~48px
- Cumple: el contenido ocupa más ancho y el margen lateral se reduce a un tercio (era el «Para qué»: sobraba espacio lateral)
- Devlog: `senzu/devlog/2026-10-30/012-integrar-cortex-y-ancho.md`
- Nota: patrón de contenedor fijado para las secciones F4–F6. Ancho 1400px pendiente de confirmar con el usuario.

## Cambios al plan
| Fecha | Cambio | Motivo |
|---|---|---|
| 2026-10-30 | Arquitectura multi-página (landing + /docs + /benchmarks) en vez de landing-único | Feedback usuario ronda 1 (D-012) |

## Riesgos y bloqueos
| Riesgo / bloqueo | Impacto | Mitigación / qué se necesita | Estado |
|---|---|---|---|
| Comando de instalación exacto sin confirmar | F4-T3, F6-T1 muestran placeholder | Confirmar con el usuario antes de publicar; marcar como placeholder en UI | abierto |
| URL del repo de GitHub pendiente | CTAs a repo apuntan a `#` | Conectar al real antes del lanzamiento | abierto |
| Benchmark de Zep en curso (F8-T9 del motor) | Fila "⏳ running" | Publicar con datos parciales; actualizar al terminar | abierto |
| Licencia definitiva sin decidir | Open source / footer usan MIT placeholder | Confirmar licencia con el usuario | abierto |
| Logo/SVG de Hemispheric pendiente | Se usa wordmark tipográfico | Generar con brand+graphic-design si se quiere, o mantener wordmark | abierto |
| Rendimiento del Cortex en móvil | Island pesada puede ralentizar | `client:visible`, SVG ligero, reduced-motion; medir en F3 | abierto |
