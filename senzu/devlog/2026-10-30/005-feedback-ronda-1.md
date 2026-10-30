# 005 — Feedback ronda 1: dirección elegida y arquitectura multi-página

- **Fecha/hora:** 2026-10-30
- **Tipo:** decisión
- **Mejora a:** 004
- **Tarea:** —
- **Stack:** astro

## Qué se hizo

Recogido el feedback del usuario sobre las maquetas A y B.

### Feedback recibido
- Le gusta la maqueta **B** (Cortex protagonista, nav transparente, "How it works" con pasos)
- Quiere el **hero de la A**: editorial 2 columnas (texto izquierda, Cortex derecha), no el full-bleed de B
- **Benchmarks y docs son páginas propias**, no secciones largas del landing
- En el landing irá un resumen de cada una con CTA a la página completa

### Decisiones resultantes

**D-011** — Dirección: B + hero A  
Layout final: nav de B (transparente, scroll→oscuro), hero editorial 2 col (texto izq, Cortex der), "How it works" con pasos alternados, sección Cortex demo, resumen benchmarks, quick-start, open source.

**D-012** — Arquitectura multi-página  
- `/` → landing (hero, demo Cortex, benchmarks resumidos, quick-start, open source)  
- `/docs` → instalación completa (tabs: Claude Code, Codex, Senzu, Obsidian, Standalone)  
- `/benchmarks` → tabla LoCoMo completa, metodología, matiz honesto, reproducir

**D-013** — Landing como escaparate, no como documentación  
Cada sección larga del blueprint se recorta: muestra lo justo para convencer y apunta a la página de detalle.

## Verificación (ui-verify, Playwright, 375/768/1440)

Ejecutado `verify-ui.mjs` sobre ambas maquetas. Capturas en `senzu/ui-verify/{a,b}/`.

**Maqueta A:** 8 tap targets < 44 px, 4 textos < 12 px.  
**Maqueta B:** 6 tap targets < 44 px, 7 textos < 12 px.

Revisadas las capturas de 375 px: el layout se ve correcto en móvil en ambas (sin scroll
horizontal, jerarquía clara, dark mode bien). Los avisos son de dos tipos:
- **Andamiaje de propuesta** (banner "Ver piezas", botón "Tu opinión", nav sin área táctil): desaparece en la web real.
- **A arrastrar a la implementación Astro:**
  1. Textos mono en mayúsculas (eyebrows, cabeceras de tabla, footer): subir a mínimo 12 px (idealmente 13).
  2. Links de nav (Demo, Benchmarks): área de toque ≥ 44 px en móvil.
  3. Diagramas SVG de "How it works" (maqueta B): labels pequeños, revisar al portar a componentes.

Conclusión: la dirección elegida (B + hero A) es sólida visualmente; los findings se corrigen al construir, no cambian el diseño.

## Commits
— (sin código aún; solo decisiones de diseño y arquitectura)

## Próximos pasos
1. Ejecutar ui-verify sobre a.html y b.html (375 px) — sin abrir el navegador manualmente
2. Actualizar el blueprint con la nueva arquitectura (D-012, D-013)
3. `/plan` — crear PLAN.md con tarjetas para landing + /docs + /benchmarks
4. Inicializar proyecto Astro (`npm create astro@latest`)
