# 008 — Integrar el design system (F1-T2)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** 003
- **Tarea:** F1-T2
- **Stack:** astro

## Qué se hizo

Integrado el design system de `senzu/design-system/hemispheric/` en el proyecto Astro.

- **Fuentes self-host** con `@fontsource` en lugar del `@import` de Google Fonts del `app.css`:
  - `@fontsource/instrument-serif` (400 + italic) → display
  - `@fontsource-variable/inter` → cuerpo
  - `@fontsource-variable/geist-mono` → código (la mono real del design system, antes solo fallback)
- `src/styles/tokens.css`: semánticos dark en `:root`, light en `html.light` (D-006), bloque `@theme` de
  Tailwind 4 con colores (`--color-*`), fuentes (familias variable reales) y radios, más base, reduced-motion y focus-visible.
- `src/styles/global.css`: orden `@fontsource` → `@import 'tailwindcss'` → `@import './tokens.css'`.
- `src/pages/index.astro`: página de verificación de tokens (fondo, acento, muted, 3 familias, code-bg).

## Commits
- `9dd6a7c` feat: integra el design system (tokens, @theme y fuentes self-host)

## Decisiones
- **dev-008:** fuentes self-host (`@fontsource`) en vez de Google Fonts. Motivo: sin render-blocking de
  terceros, sin dependencia de Google en runtime (privacidad/GDPR) y permite usar Geist Mono real. Se desvía
  del `app.css` del design system (que usaba `@import` de Google), que es asset de diseño, no de implementación.

## Verificación

```
$ npx astro check
Result (4 files): 0 errors, 0 warnings, 0 hints

$ npm run build
1 page(s) built — Complete!

# CSS generado (dist/_astro/index.*.css, 20K):
utilidades @theme: .bg-background .text-accent .text-muted .font-display .bg-code-bg  (todas presentes)
@font-face: 17  (6 Geist Mono Variable · 4 Instrument Serif · 7 Inter Variable)
woff2 empaquetados: 17

$ ui-verify http://localhost:4321/ --viewports 375,1440
375px: ✓ sin problemas (h1 60px, párrafo 18px)
1440px: ✓ sin problemas
Problemas: 0
```

Captura 375 (fuera de git, `senzu/ui-verify/f1t2/375.png`): fondo `#0A0A0A`, eyebrow ámbar en Geist Mono,
H1 en Instrument Serif con italic, cuerpo Inter en `--muted`, snippet en `--code-bg`. Todo correcto.

## Próximos pasos
- **F1-T3** · Layout base: `BaseLayout.astro` (head/SEO, nav transparente→scroll, footer) + `ThemeToggle` (localStorage, sin flash).
