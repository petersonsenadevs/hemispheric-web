# 010 — Hero editorial 2 columnas (F2-T1)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F2-T1
- **Stack:** astro

## Qué se hizo

Primera cara real de la web. Dirección B + hero editorial de A (D-011).

- `src/components/landing/Hero.astro`: grid 55/45 (texto izq, Cortex der) con `heroOverlay` (pinta bajo el nav).
  - Eyebrow mono ámbar "Open source · Claude Code · Codex"
  - H1 Instrument Serif "Memory for your *agent.*" (em italic muted), `clamp` responsivo (48→72px)
  - Sub Inter muted con el copy del blueprint
  - CTA primario ámbar "Install for Claude Code" (icono download) → `/docs`
  - Snippet copiable `$ hemispheric install --claude` con copia al portapapeles + feedback "copied" (script vanilla)
  - CTA secundario "See the demo ↓" → `#demo`
- `src/components/landing/CortexPlaceholder.astro`: SVG del grafo (6 nodos, claude activo ámbar) con colores
  por tokens `--cortex-*` (se adapta a light) y animación "breathe" por clases (sin `style` inline).
  Placeholder hasta la island React de F3.
- `src/pages/index.astro`: usa BaseLayout `heroOverlay` + Hero.
- En móvil: columna única, texto arriba y Cortex debajo (blueprint).

## Commits
- `<hash>` feat: hero editorial 2 columnas con Cortex placeholder

## Decisiones / incidencias
- **Bug corregido en el Cortex:** la animación CSS `transform: scale()` sobrescribía el `transform="translate()"`
  del atributo SVG, descolocando el nodo central "claude". Solución: posición en un `<g>` exterior y animación en
  uno interior (patrón estándar SVG+CSS). Los nodos inactivos no sufrían el bug porque solo animan `opacity`.

## Verificación

```
$ npx astro check → Result (10 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)
375px: ✓ 0 problemas (h1 48px, CTA 228×44px visible sin scroll)
768px: ✓ 0 problemas
1440px: ✓ 0 problemas
Problemas: 0
```

Capturas (fuera de git, `senzu/ui-verify/f2t1/`): `1440-fixed.png` (claude centrado con glow, grafo conectado),
`375.png` (columna única: texto arriba, Cortex debajo).

## Próximos pasos
- Fase **F3** · **F3-T1** · Grafo del Cortex interactivo (island React: hover muestra el hecho, activación 2 saltos).
