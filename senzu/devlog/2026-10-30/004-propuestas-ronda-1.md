# 004 — Propuestas Ronda 1: maquetas A y B

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** 002
- **Tarea:** —
- **Stack:** astro

## Qué se hizo

Generadas dos maquetas HTML de baja fidelidad en `senzu/design-system/hemispheric/propuestas/ronda-1/`:

### Maqueta A — Editorial
- Layout 2 columnas: 55% texto izquierda, 45% Cortex SVG derecha
- H1 Instrument Serif ~4.5rem, sub en Inter, snippet `hemispheric install --claude` copiable
- Cortex SVG: 6 nodos (claude activo en ámbar, project/stack/memory/astro/date en neutro), aristas con animación `edge-pulse`
- Animación CSS: `breathe` para nodos inactivos, `breathe-active` para claude central, `glow-fade` para anillo exterior
- Sección Benchmarks: tabla LoCoMo completa + sub-tabla cat2 temporal con `highlight-row` en ámbar
- Responsive: columna única en móvil (<900px), Cortex debajo del texto
- Banner propuesta sticky + sistema de votación por piezas (localStorage)

### Maqueta B — Cortex protagonista
- Hero full-bleed: Cortex SVG ocupa 100vw × 90vh de fondo, texto centrado en overlay
- Vignette radial oscuro para legibilidad del texto, sin degradado de color (neutro)
- Nav transparente que se oscurece al hacer scroll (clase `.scrolled`)
- H1 más grande (~5.5rem) por ser el único elemento focal de la pantalla
- Sección "How it works" con 3 pasos alternados (sin cards idénticas):
  - Paso 1: flujo hook → extracción → cortex.json (texto izq, diagrama der)
  - Paso 2: grafo de atributos (entity, date, value, neighbors) — layout invertido
  - Paso 3: activación a 2 saltos (hop 0 activo ámbar, hop 1 ámbar apagado)
- Misma sección Benchmarks que A
- Sección Open Source con badge MIT, stars placeholder, CTA GitHub
- Scroll hint animado en el hero

### Ambas maquetas incluyen
- Banner "PROPUESTA · Ronda 1 · Maqueta X — baja fidelidad"
- `data-pieza` con categoría y descripción en cada decisión opinable
- Panel "Tu opinión" con JS de votación Sí/No por pieza + comentario libre + copiar al portapapeles
- CSS `prefers-reduced-motion`
- Responsive completo (375/768/1440px)
- Fuentes Google: Instrument Serif + Inter (sin Geist Mono — fallback a Courier New en maquetas)
- Contenido real del blueprint, sin lorem ipsum

## Archivos creados

- `senzu/design-system/hemispheric/propuestas/ronda-1/a.html`
- `senzu/design-system/hemispheric/propuestas/ronda-1/b.html`

## Decisiones

Ver DECISIONES.md de hoy.

## Verificación

Archivos creados sin errores. Verificación visual pendiente en Chrome (el proyecto Astro aún no existe, solo son HTML estáticos — abrir directamente en el navegador).

## Próximos pasos

1. Usuario abre ambas maquetas en Chrome y da su opinión con el panel "Tu opinión"
2. Elegir dirección (A, B, o mix) → `senzu/devlog/MEMORIA.md` D-007
3. `/plan` — crear PLAN.md con tarjetas para las 5 secciones
4. `npm create astro@latest` → inicializar el proyecto
5. Copiar `senzu/design-system/hemispheric/app.css` a `src/styles/tokens.css`
