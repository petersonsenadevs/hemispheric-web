# 003 — Design system: tokens y CSS base

- **Fecha/hora:** 2026-10-30
- **Tipo:** infra
- **Mejora a:** 002
- **Tarea:** —
- **Stack:** astro

## Qué se hizo

- Ejecutado `search.py --design-system` con keywords de Hemispheric → base generada
- Sobreescrito el MASTER.md generado con las decisiones del brief (D-002): Instrument Serif,
  acento ámbar #B45309, fondo #0A0A0A, sin verde "run" ni gradientes
- Creado `tokens.json` con 3 capas completas (primitive → semantic dark/light → component)
- Generado `tokens.css` con el script de design-system
- Creado `app.css` listo para copiar a `src/styles/` cuando el proyecto Astro se inicialice:
  - Dark mode en `:root` (por defecto)
  - Light mode en `html.light`
  - `@theme` para Tailwind 4
  - `prefers-reduced-motion` global
  - `focus-visible` con ring de acento

## Archivos en `senzu/design-system/hemispheric/`

- `MASTER.md` — fuente de verdad de estilo (ajustada al brief)
- `tokens.json` — tokens en 3 capas, formato DTCG
- `tokens.css` — artefacto generado (primitivos en vars)
- `app.css` — CSS listo para Astro + Tailwind 4

## Decisiones

- D-006: Los semánticos dark van en `:root` (dark first); light en `html.light`
  (clase gestionada con JS en `<html>`, persistida en localStorage)

## Verificación

- Script `generate-tokens.cjs` ejecutado sin errores
- `tokens.css` generado con todos los valores correctos
- Gancho `PreToolUse:Write` verificó cumplimiento de reglas UI (contraste, reduced-motion, SVG icons)

## ui-verify — por qué no aplica en esta entrada

El muro `stop-guard` detectó edición de UI (`app.css`) y exige `ui-verify`.
**No se puede ejecutar**: el proyecto Astro no ha sido scaffoldeado todavía — no existe `package.json`,
no hay servidor local (`npm run dev`) ni URL que verificar.

`app.css` es un **asset de diseño** en `senzu/design-system/`, no una página en ejecución.
La verificación `ui-verify` se hará en la primera tarea que levante el servidor: inicialización de Astro
y la primera vista construida (Hero). Quedará registrada en el devlog de esa tarea.

## Próximos pasos

- Inicializar el proyecto Astro (`npm create astro@latest`)
- Copiar `app.css` a `src/styles/tokens.css`
- `/plan` para las tarjetas de las 5 secciones
- `/propuestas` antes de construir (blueprint + maquetas A/B)
