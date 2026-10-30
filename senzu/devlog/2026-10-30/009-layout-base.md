# 009 — Layout base: nav + footer + toggle (F1-T3)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F1-T3
- **Stack:** astro

## Qué se hizo

Marco común de las 3 páginas. Cierra la fase F1 (walking skeleton).

- `src/layouts/BaseLayout.astro`: `<head>` con title/description por props (defaults del producto),
  `color-scheme`, favicon, **anti-flash** inline (aplica `html.light` antes del primer paint leyendo
  localStorage), skip link accesible, `<Nav>`, `<main id="main">` (con `pt-16` salvo `heroOverlay`), `<Footer>`.
- `src/components/Nav.astro`: barra fija (`fixed top-0 h-16`) transparente que se oscurece al scroll
  (clase `.scrolled` por `<script>` vanilla + `color-mix` con tokens). Logo wordmark, links Demo/Benchmarks/Docs,
  icono GitHub (SVG), ThemeToggle. En móvil: toggle + burger con panel desplegable (aria-expanded/controls, Escape cierra).
- `src/components/ThemeToggle.astro`: botón sol/luna, togglea `html.light` + localStorage, `aria-pressed`/`aria-label`
  dinámicos. **Script vanilla, no island React** (es un toggle de clase; cumple D-004: islands solo para lo que lo necesita).
- `src/components/Footer.astro`: borde superior, wordmark + "MIT License · © año · Built in the open", links Docs/Benchmarks/GitHub.
- `public/favicon.svg`: placeholder (círculo ámbar) hasta el logo real (F7/brand).
- `src/pages/index.astro`: usa BaseLayout con contenido de verificación del skeleton.

Iconos SVG inline (no emojis), `aria-hidden` en los decorativos, nombre accesible en los controles de icono (pro-rules).
GitHub URL y licencia siguen como placeholder (riesgos ya registrados en PLAN.md).

## Commits
- `0355217` feat: layout base (nav fijo, footer y theme toggle)

## Verificación

```
$ npx astro check → Result (8 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)
375px: ✓ 0 problemas (cabecera 64px fixed; menú abierto: 4 enlaces; burger probado)
768px: ✓ 0 problemas
1440px: ✓ 0 problemas
Problemas: 0
```

Primera pasada tenía 5 tap targets < 44px (logo, links de menú, skip link) y el skip link `sr-only`
marcado como desbordamiento. Corregido: skip link off-screen de tamaño completo (sin el 1px de `sr-only`),
logo y todos los links con `min-h-11` (44px). Re-verificado → 0 problemas.

Capturas (fuera de git, `senzu/ui-verify/f1t3/`): `375-menu.png` (menú móvil abierto, toggle y X),
`1440.png` (nav + footer dark), `1440-light.png` (light mode: fondo claro, acento ámbar oscuro, toggle luna).
Dark y light verificados.

## Próximos pasos
- Fase **F2** · **F2-T1** · Hero editorial 2 columnas (texto izq + Cortex placeholder der), `heroOverlay`.
