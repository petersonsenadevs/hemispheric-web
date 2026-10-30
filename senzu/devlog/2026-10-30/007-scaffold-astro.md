# 007 — Inicializar proyecto Astro (F1-T1)

- **Fecha/hora:** 2026-10-30
- **Tipo:** infra
- **Mejora a:** —
- **Tarea:** F1-T1
- **Stack:** astro

## Qué se hizo

Scaffold del proyecto Astro desde cero (directorio no vacío, montado a mano en vez de `npm create`).

- Dependencias: `astro@7.4.4`, `@astrojs/react@7.1.2`, `react@19.3.1`, `react-dom@19.3.1`,
  `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3`, tipos de React, `@astrojs/check`, `typescript`.
- `package.json`: `type: module`, scripts `dev/build/preview/check/lint`.
- `astro.config.mjs`: `output: 'static'`, integración React, Tailwind 4 vía plugin de Vite (no `@astrojs/tailwind`, cumple convención D-014).
- `tsconfig.json`: extiende `astro/tsconfigs/strict`, JSX react-jsx.
- `src/styles/global.css`: `@import 'tailwindcss'`.
- `src/pages/index.astro`: página mínima "hello" con Tailwind.
- `.gitignore`: dist, .astro, node_modules, .env, senzu/ui-verify.

## Commits
- `<hash>` chore: scaffold inicial de Astro + React + Tailwind 4

## Verificación

```
$ npx astro check
Result (4 files):
- 0 errors
- 0 warnings
- 0 hints

$ npm run build
00:45:08 [build] 1 page(s) built in 6.01s
00:45:08 [build] Complete!
```

## Próximos pasos
- **F1-T2** · Integrar el design system (copiar `app.css` → `src/styles/tokens.css`, fuentes, `@theme`).
