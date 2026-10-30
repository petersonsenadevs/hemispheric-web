# 016 — Página /benchmarks completa (F5-T1) · cierra F5

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F5-T1
- **Stack:** astro

## Qué se hizo

- `src/pages/benchmarks.astro`: página completa estilo paper académico, en `BaseLayout` (sin
  heroOverlay) con title/description propios. Secciones:
  - **Header**: eyebrow "LoCoMo benchmark", H1 "The numbers, unedited.", lead con el matiz honesto
    (Qwen3-8B local como contestador y juez; no comparable al leaderboard oficial de GPT-4o).
  - **Full results**: tabla LoCoMo (1986 preguntas) con las **5 categorías reales × 3 motores**
    (Hemispheric / Embedding e5 / mem0) + fila Overall. Líder por fila en negrita (honesto: e5 gana
    casi todas; Hemispheric lidera adversarial y dobla a mem0 en temporal). Columna Hemispheric con
    tinte `bg-surface` para seguir al sujeto. `overflow-x-auto` + `min-w-[640px]` → scroll horizontal
    controlado en móvil; columna "What it measures" oculta <sm.
  - **Temporal highlight**: 16,2% vs 5,3% (+206% vs mem0) en ámbar.
  - **Methodology**: misma vara para todos (Qwen3-8B juez único) + descripción del dataset.
  - **A note on Zep / Graphiti**: solo muestra conv-1 (no dataset completo), tabla aparte marcada
    como parcial (motor 28,2 · e5 30,3 · mem0 14,9 · zep 18,5). Separada para no mezclar.
  - **Reproduce it**: `CopyCommand` con el comando real de `comparar.mjs` + cita de la fuente
    (`resultados-e2e-locomo-*.json` y `BENCHMARK.md` del repo del motor) + CTA repo (placeholder `#`).

Datos **reales** aportados por el usuario desde `D:\dev-standards\tools\eval-productos\BENCHMARK.md §1`
(regenerables con `comparar.mjs`). No se inventó ningún número. Es LoCoMo (F8-T9), no LongMemEval
(X-T22, aún sin ejecutar): la web no mezcla los dos.

## Commits
- `7fde7b1` feat: pagina /benchmarks con tabla LoCoMo completa

## Decisiones (resumen)
- La "sub-tabla por categoría" del plan se resuelve con la tabla principal de 5 categorías reales
  (no una tabla aparte), más el destacado temporal cat2. El líder por fila en negrita en vez de pintar
  de ámbar al "ganador" (sería e5, no Hemispheric) → tabla honesta tipo paper.

## Bug corregido (whitespace de Astro)
- Astro **elimina el espacio** cuando un salto de línea del código fuente cae pegado a un elemento inline
  (`<em>`, `<strong>`, `<span>`), por cualquiera de los dos lados → "arenot", "whensomething",
  "It isnot", ".jsonand". Solución: mantener cada tramo con inline + sus palabras vecinas en **una sola
  línea física** (espacios literales, no saltos). Verificado en el HTML generado.

## Verificación

```
$ npx astro check → Result (20 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 2 page(s) built — Complete! (/benchmarks + /)

$ ui-verify http://localhost:4321/benchmarks  (375/768/1440)
Problemas: 0   (tras subir las notas de precio de 11px → 12px)

HTML generado: espacios inline correctos ("are not", "depends on when something", "raw <span>…</span> files")
```

Capturas (fuera de git, `senzu/ui-verify/f5t1/`): `375.png`, `768.png`, `1440.png`, `375-menu.png`.

## Próximos pasos
- Fase **F6** · página `/docs` (instalación por anfitrión: Claude Code · Codex · Senzu · Obsidian ·
  Standalone con tabs accesibles y snippets copiables) — F6-T1.
- Pendiente aparte (aviso del hook de sesión): crear `senzu/devlog/MEMORIA.md` desde el devlog existente.
