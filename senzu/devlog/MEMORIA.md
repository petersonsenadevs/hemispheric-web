# MEMORIA — Decisiones vigentes

Decisiones activas del proyecto. Máx. 60 líneas. Ver devlog para el detalle.

| ID | Decisión | Ver |
|---|---|---|
| D-001 | Stack: Astro + React islands + Tailwind · output static SSG | 001, 002 |
| D-002 | Dirección visual A: fondo #0A0A0A / #FAFAFA, Instrument Serif, acento ámbar ~#B45309, Geist Mono para código | 002 |
| D-003 | Dark mode por defecto + light mode toggle (Tailwind dark: en `<html>`, localStorage) | 002 |
| D-004 | El Cortex (grafo de memoria) es React island `client:visible`, client-side puro, sin backend | 002 |
| D-005 | Vetos: sin ilustraciones stock, sin gradientes startup, sin animaciones que entorpecen, sin look de agencia | 002 |
| D-006 | Dark first: semánticos dark en `:root`; light en `html.light` gestionado con JS en `<html>`, localStorage | 003 |
| D-007 | Idioma de la web: inglés (producto global, devs internacionales de Claude Code/Codex) | 004 |
| D-008 | Hemispheric es plugin de hooks CLI, no paquete npm. Install: `hemispheric install --claude` (comando exacto a confirmar al publicar) | 004 |
| D-009 | Hero maqueta B: vignette radial neutro oscuro (sin gradiente de color — cumple veto D-005) | 004 |
| D-010 | "How it works": pasos alternados texto izq/der con SVG propios por paso; sin 3 cards idénticas (cumple D-005) | 004 |
| D-011 | Dirección elegida: B (Cortex protagonista) + hero de A (editorial 2 col: texto izq, Cortex der) | 005 |
| D-012 | Arquitectura multi-página: landing (/), /docs (instalación completa), /benchmarks (tabla LoCoMo completa) | 005 |
| D-013 | Landing muestra resumen de benchmarks + quick-start con CTAs a /docs y /benchmarks para el detalle | 005 |
| D-014 | Convenciones selladas (`senzu/conventions.md` + `.json`): código/UI EN, trabajo ES, PascalCase comp./kebab rutas, Tailwind 4 por Vite, Vitest para el Cortex | 006 |
| D-015 | Fuentes self-host con `@fontsource` (Instrument Serif, Inter var, Geist Mono var); no Google Fonts @import en la web | 008 |
