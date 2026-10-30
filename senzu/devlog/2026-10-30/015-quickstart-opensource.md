# 015 — Quick-start + Open source (F4-T3) · cierra F4

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** 010
- **Tarea:** F4-T3
- **Stack:** astro

## Qué se hizo

- `src/components/CopyCommand.astro`: componente reutilizable del snippet copiable (botón + copia al
  portapapeles con feedback "copied", un handler para todos los `.copy-command` de la página). Refactorizado
  el hero para usarlo (antes tenía el botón y el script inline duplicados).
- `src/components/landing/QuickStart.astro`: sección `#install` — "Plug it in where you already work.",
  snippet copiable, chips de anfitriones (Claude Code · Codex · Senzu · Obsidian · Standalone), CTA "Full docs →" a `/docs`.
- `src/components/landing/OpenSource.astro`: "Built in the open." + lead, badges (estrella SVG + "— stars",
  MIT License, v0.x · early) y CTA "View the code" (icono GitHub) a GitHub. Sin emojis (estrella es SVG).
- Añadidas al landing; con esto el landing tiene todas sus secciones (hero, demo, how it works, benchmarks, quick-start, open source).

Licencia, URL del repo y nº de estrellas siguen como placeholder (riesgos en PLAN.md).

## Commits
- `da26c65` feat: secciones quick-start y open source + CopyCommand reutilizable

## Verificación

```
$ npx astro check → Result (19 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)
Problemas: 0

Copia al portapapeles (Playwright con permiso): click → label "copied" · clipboard = "hemispheric install --claude"
Consola: 0 errores
```

Capturas (fuera de git, `senzu/ui-verify/f4t3/`): `bottom.png` (quick-start), `opensource.png` (open source + footer).

## Próximos pasos
- Fase **F5** · página `/benchmarks` completa (tabla LoCoMo, metodología, reproducir).
