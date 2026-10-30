# 011 — Grafo del Cortex interactivo (F3-T1)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F3-T1
- **Stack:** astro

## Qué se hizo

La killer feature: el grafo de memoria interactivo (island React, client-side puro, D-004).

- `src/lib/cortex/graph.ts`: lógica pura y determinista. `activate(graph, seed)` → activación a 2 saltos
  con peso decreciente (ACT-R-like: hop0=1, hop1=0.55, hop2=0.25); nodos a >2 saltos no se recuperan.
  `buildAdjacency`, `litEdges` (aristas entre niveles de hop adyacentes), `edgeKey`.
- `src/lib/cortex/graph.test.ts`: **11 tests Vitest** (seed hop0, vecinos hop1, vecinos-de-vecinos hop2,
  corte a >2 saltos, peso decreciente, menor hop por varios caminos, seed inexistente, nodo aislado, aristas lit).
- `src/data/cortex-graph.ts`: grafo de ejemplo con hechos reales del dominio (9 nodos, posiciones fijas → render determinista).
- `src/components/cortex/Cortex.tsx`: island React. Hover/focus/tap en un nodo → se activa; nodos por hop
  en ámbar con intensidad decreciente; aristas iluminadas; panel con el hecho (`aria-live`); nodos como
  `role="button"` con `tabIndex`, `aria-label`, `aria-pressed` y teclado (Enter/Espacio). Área de toque
  transparente r=34 para ≥44px en móvil. Prop `showFact` (off para uso ambiente en el hero).
- `src/components/cortex/Cortex.css`: transiciones, respiración del nodo semilla (se desactiva con reduced-motion
  por la regla global), tipografías por token.
- Vitest instalado; scripts `test` / `test:watch` en package.json.

## Commits
- `1b66aca` feat: Cortex interactivo (grafo 2 saltos, island React testeada)

## Verificación

```
$ npm run test  → Test Files 1 passed · Tests 11 passed
$ npx astro check → Result (15 files): 0 errors, 0 warnings, 0 hints
$ npm run build → Complete!

$ ui-verify http://localhost:4321/cortex-test  (375/768/1440)
Problemas: 0   (tras añadir hit-area ≥44px a los nodos y subir la pista a 12px)

Interacción (Playwright, 1440):
  default → "claude"
  hover "benchmark" → panel "benchmark" + "LoCoMo: 25.6% overall · 16.2% temporal recall."
  errores de consola: []
```

Captura (fuera de git, `senzu/ui-verify/f3t1/1440-benchmark.png`): hover en benchmark ilumina benchmark (hop0),
memory (hop1) y claude+date (hop2) con intensidad decreciente; aristas resaltadas. Activación a 2 saltos visible.

La página de prueba `cortex-test.astro` se usó para verificar y se borró al cerrar (la integración en hero y
sección demo es F3-T2). El componente queda listo, sin montar todavía.

## Próximos pasos
- **F3-T2** · Integrar el Cortex en el hero (ambiente, `showFact={false}`) y en la sección Demo (interactivo con leyenda).
