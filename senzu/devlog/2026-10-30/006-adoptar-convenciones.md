# 006 — Adoptar convenciones (modo entrevista)

- **Fecha/hora:** 2026-10-30
- **Tipo:** infra
- **Mejora a:** —
- **Tarea:** — (puerta previa a F1-T1)
- **Stack:** astro

## Qué se hizo

El muro `arranque-guard` paró la escritura de `package.json` pidiendo `/adoptar`. El usuario eligió hacerlo
primero. Proyecto nuevo sin código previo → modo entrevista (code-quality §adopt-conventions §7).

### Decidido en la entrevista
- **Idioma:** código y UI en inglés; comentarios, devlog, memoria y commits en castellano. Dominio técnico ya en inglés.
- **Naming:** componentes PascalCase; páginas/rutas kebab-case; utils camelCase (estándar Astro/React).
- **Estructura:** `src/{components/{landing,cortex,docs},layouts,lib,data,styles,pages}`; islands React solo interactivo.
- **Front:** Tailwind 4 vía `@tailwindcss/vite` + tokens del design system; sin colores crudos ni estilos inline en `.astro`.
- **Tests:** `astro check` + `build` + ui-verify por tarea; **Vitest** para la lógica del Cortex.
- **Git:** Conventional ≤72 en castellano, cuerpo con `Tarea: <id>`, sin co-autor (ya en CLAUDE.md).

### Archivos creados (sellados `senzu:inmutable`)
- `senzu/conventions.md` — fuente de verdad humana.
- `senzu/conventions.json` — 3 reglas ejecutables para `conventions-guard`:
  1. prohibido `@astrojs/tailwind` (forzar Tailwind 4 por Vite)
  2. sin `style="` inline en componentes `.astro`
  3. sin `dangerouslySetInnerHTML`

## Commits
— (pendiente: se commitea junto con el scaffold de F1-T1)

## Decisiones
Ver DECISIONES.md de hoy (dev-006).

## Verificación
Archivos escritos con el sello. A partir de ahora `conventions-guard` bloquea violaciones nuevas y `protect-files` impide editarlos a mano.

## Próximos pasos
Retomar **F1-T1** · Inicializar proyecto Astro (ya con las convenciones vigentes).
