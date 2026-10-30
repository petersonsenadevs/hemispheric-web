# 014 — Sección Benchmarks resumida (F4-T2)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F4-T2
- **Stack:** astro

## Qué se hizo

- `src/components/landing/BenchmarksSummary.astro`: sección `#benchmarks` (surface, border-y) con:
  - H2 "The numbers, unedited." + lead con el **matiz honesto** (Qwen3-8B local juez, no comparable al leaderboard oficial GPT-4o).
  - Tabla LoCoMo (1.986 preguntas): Hemispheric 25.6% (ámbar), Embedding e5 28.0%, mem0 21.1%, Zep/Graphiti "running".
  - Bloque destacado temporal (cat2): Hemispheric 16.2% vs mem0 5.3% · +206%.
  - Nota honesta (remember *when*, not just *what*) + CTA "See full benchmarks →" a `/benchmarks`.
- Números en `font-mono` tabular. Datos reales; Zep pendiente (F8-T9 del motor).
- Añadida al landing tras How it works.

## Commits
- `<hash>` feat: seccion benchmarks resumida con matiz honesto

## Verificación

```
$ npx astro check → Result (16 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)
Problemas: 0
```

Captura (fuera de git, `senzu/ui-verify/f4t2/bench-desktop.png`): tabla + destacado temporal + matiz + CTA.

## Próximos pasos
- **F4-T3** · Sección quick-start + open source (snippet + CTA a /docs + GitHub/licencia).
