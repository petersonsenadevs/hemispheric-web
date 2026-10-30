# 012 — Integrar el Cortex (F3-T2) + ensanchar el contenedor (X-T1)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** 010
- **Tarea:** F3-T2 · X-T1
- **Stack:** astro

## Qué se hizo

### F3-T2 — Integración del Cortex
- Hero: reemplazado el placeholder por el Cortex real (island `client:visible`, `showFact={false}`, modo ambiente).
- `src/components/landing/DemoCortex.astro`: sección `#demo` (fondo surface) con H2 "How it stores and recalls
  what matters.", lead del blueprint y el Cortex interactivo completo (con panel y leyenda).
- `src/pages/index.astro`: Hero + DemoCortex.
- Borrado `CortexPlaceholder.astro` (ya no se usa).

### X-T1 (ad hoc) — Ensanchar el contenedor
Feedback del usuario: sobraba margen lateral, el contenido iba estrecho y centrado.
- Contenedor de nav, hero, demo y footer: `max-w-6xl` (1152px) → `max-w-[1400px]` con padding lateral
  responsivo `px-6 sm:px-8 lg:px-12`. Margen lateral en 1440px baja de ~144px a ~48px.
- Hero: ratio de columnas `55fr/45fr` → `1.1fr/1fr` y gap `20` → `16` para no agrandar el hueco central.
- `Cortex.css`: `.cortex-svg` max-width `460px` → `520px` para que el grafo llene mejor su columna.

El patrón de contenedor queda fijado para las secciones que faltan (F4–F6).

## Commits
- `5f7b330` feat: integra el Cortex en hero y demo + ensancha el contenedor

## Verificación

```
$ npx astro check → Result (14 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)   [antes y después del ensanchado]
Problemas: 0  en ambos
```

Capturas (fuera de git): `f3t2/1440-wide.png` y `f3t2/1920-wide.png` (margen lateral reducido, grafo lleno),
`f3t2b/*` (responsive tras el cambio). Las dos islands (hero ambiente + demo interactivo) hidratan sin errores.

## Próximos pasos
- Fase **F4** · resto del landing: How it works, benchmarks resumido, quick-start, open source.
- Pendiente del usuario: confirmar si el ancho de 1400px le encaja o lo quiere aún más amplio.
