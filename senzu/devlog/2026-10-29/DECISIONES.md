# Decisiones — 2026-10-29

## D-001 — Stack: Astro + React islands + Tailwind
- **Contexto:** web de marketing para herramienta dev (motor Node de Hemispheric).
- **Opciones:** Astro / Next.js / Vite vanilla.
- **Elección:** Astro + React islands + Tailwind.
- **Motivo:** escaparate estático (SSG), máximo rendimiento, React solo para la demo interactiva del Cortex.
- **Consecuencias:** output `static`; la demo del Cortex es client-side puro, sin backend.
- **Dev:** 001-setup-inicial · 002-brief-direccion-visual

## D-002 — Dirección visual A: "Cerebro abierto"
- **Contexto:** brief de /brief con el usuario.
- **Opciones:** A (editorial + Serif + grafo como arte) / B (terminal dark + Geist Mono + panel IDE).
- **Elección:** A — Cerebro abierto.
- **Motivo:** el usuario quiere una dev tool con "algo de alma", inesperada. La A es más memorable
  y diferenciadora; la B es más convencional para el sector.
- **Especificaciones:**
  - Fondo dark: `#0A0A0A` | Fondo light: `#FAFAFA`
  - Acento: ámbar apagado `~#B45309` (solo CTAs y nodos activos)
  - Titular: Instrument Serif (display grande)
  - Cuerpo: Inter / Geist Sans
  - Código: Geist Mono / JetBrains Mono
- **Dev:** 002-brief-direccion-visual

## D-003 — Tema: dark default + light mode toggle
- **Contexto:** audiencia devs (mayoría en dark); pero necesitan leer docs (legibilidad en light).
- **Elección:** dark por defecto, toggle para light.
- **Consecuencias:** implementar con Tailwind `dark:` class en `<html>` + persistencia en localStorage.
- **Dev:** 002-brief-direccion-visual

## D-004 — Cortex como isla React protagonista
- **Contexto:** el grafo de memoria es el killer feature de la demo.
- **Elección:** React island con `client:visible`, renderizado client-side puro, sin backend.
- **Motivo:** sin servidor = sin coste, sin latencia, sin datos de usuario enviados a ningún lado.
- **Consecuencias:** la lógica de visualización del grafo va en JS puro en el cliente.
- **Dev:** 002-brief-direccion-visual

## D-005 — Vetos visuales
- Sin ilustraciones de stock (devs con laptops, vectores genéricos).
- Sin gradientes de startup (morado-rosa-naranja).
- Sin animaciones que entorpecen o tardan en aparecer.
- Sin aspecto de agencia de marketing / funnel de ventas.
- **Dev:** 002-brief-direccion-visual
