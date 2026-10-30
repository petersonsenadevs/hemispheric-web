# Decisiones — 2026-10-30

## dev-004-A — Layout "How it works" con pasos alternados en lugar de cards

- **Contexto:** Blueprint pedía 3 secciones de instalación por tabs y Cortex demo interactivo. Para la maqueta B había que comunicar cómo funciona el motor sin ilustraciones stock y sin cards idénticas (veto D-005).
- **Opciones:** 3 cards iguales / lista numerada / pasos alternados con diagramas SVG propios.
- **Elección:** Pasos alternados (texto izquierda/derecha) con diagramas SVG únicos por paso.
- **Motivo:** Evita la monotonía visual de 3 cards, cada paso tiene un diagrama que refuerza el concepto (hook flow, graph node, two-hop activation) sin ilustraciones externas.
- **Consecuencias:** Más trabajo de implementación; los diagramas SVG son maquetas básicas que habrá que pulir al construir en Astro.

## dev-005-A — Dirección definitiva: B + hero editorial de A

- **Contexto:** El usuario revisó ambas maquetas. Le convence la B (nav, pasos, Cortex) pero el hero full-bleed no es lo que busca.
- **Opciones:** Hero full-bleed (B) / hero editorial 2 col (A) / híbrido.
- **Elección:** Híbrido: layout general de B con hero de A (2 columnas: texto izq, Cortex der).
- **Motivo:** El hero 2 col comunica mejor el producto (texto e imagen juntos, sin perder el Cortex como protagonista visual).
- **Consecuencias:** En la implementación Astro el hero será un grid 55/45 con el Cortex como island a la derecha.

## dev-005-B — Arquitectura multi-página

- **Contexto:** El blueprint original ponía benchmarks e instalación como secciones largas del landing.
- **Opciones:** Todo en una página / páginas separadas.
- **Elección:** Landing + `/docs` + `/benchmarks` como rutas propias.
- **Motivo:** El landing es escaparate, no documentación. Las páginas de detalle dan más espacio y mejor SEO por tema.
- **Consecuencias:** El landing tendrá resúmenes con CTAs. El routing Astro gestiona las 3 páginas estáticas.

## dev-006 — Convenciones del proyecto selladas en modo entrevista

- **Contexto:** El muro arranque-guard pidió `/adoptar` antes de escribir `package.json`. Proyecto nuevo sin código previo.
- **Opciones:** Saltar /adoptar (proyecto nuevo) / hacerlo en modo entrevista.
- **Elección:** Modo entrevista — fijar idioma, naming, estructura, front, tests y git antes de escribir código.
- **Motivo:** El usuario prefiere fijar reglas propias desde el minuto cero; evita deriva de estilo entre Claude y Codex.
- **Consecuencias:** `senzu/conventions.md` + `.json` sellados (`senzu:inmutable`). `conventions-guard` bloquea violaciones nuevas; cambiarlas exige borrar y re-ejecutar `/adoptar`. Verificación por tarea añade Vitest para el Cortex.

## dev-004-B — Vignette radial en el hero B (sin degradado de color)

- **Contexto:** El Cortex SVG como fondo pleno requería que el texto superpuesto fuera legible. Opciones: degradado de color / oscurecimiento neutro / overlay negro semitransparente uniforme.
- **Opciones:** Gradiente morado-azul (vetado) / gradiente ámbar (demasiado ostentoso) / radial neutro oscuro.
- **Elección:** `radial-gradient` neutro oscuro centrado, sin color.
- **Motivo:** Respeta el veto de gradientes startup (D-005); el ámbar ya está en los nodos activos del Cortex, no necesita repetirse en el fondo.
- **Consecuencias:** La legibilidad depende de que el Cortex no sea demasiado brillante en el centro. Si el grafo se ajusta con más nodos brillantes, habrá que reforzar el vignette.
