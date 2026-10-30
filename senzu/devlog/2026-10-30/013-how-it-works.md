# 013 — Sección "How it works" (F4-T1)

- **Fecha/hora:** 2026-10-30
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** F4-T1
- **Stack:** astro

## Qué se hizo

- `src/components/landing/HowItWorks.astro`: sección `#how` con H2 "How it works." + lead, y 3 pasos
  alternados (texto/diagrama, invertido en el 2º) con un SVG propio por paso (D-010, sin cards idénticas):
  - **Capture:** flujo claude code → PostToolUse → hook/extract → cortex.json.
  - **Store:** nodo "fact" con atributos (entity, date, value, project→stack, session→date).
  - **Retrieve:** query → nodo activo (hop 0) → vecinos (hop 1), con leyenda.
- SVG tokenizados (`var(--surface)`, `var(--cortex-node-active)`, `var(--accent-glow)`, etc.) → se adaptan a light.
- Añadida al landing tras la sección Demo.

## Commits
- `<hash>` feat: seccion How it works (pasos alternados con diagramas SVG)

## Decisiones / incidencias
- El muro `code-hygiene` vetó la numeración de secciones ("01 — Capture") como patrón anti-IA. Cambiado a
  eyebrows sin número (Capture / Store / Retrieve); el orden se entiende por la secuencia. Anotar en gustos.md.

## Verificación

```
$ npx astro check → Result (15 files): 0 errors, 0 warnings, 0 hints
$ npm run build   → 1 page(s) built — Complete!

$ ui-verify http://localhost:4321/  (375/768/1440)
Problemas: 0
```

Captura (fuera de git, `senzu/ui-verify/f4t1/how-desktop.png`): 3 pasos alternados, diagramas legibles y
tokenizados, sin cards idénticas.

## Próximos pasos
- **F4-T2** · Sección Benchmarks resumida (tabla corta + cat2 temporal + matiz honesto + CTA a /benchmarks).
