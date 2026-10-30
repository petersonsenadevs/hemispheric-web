# Design System — Hemispheric

> Fuente de verdad de estilo. Las reglas del brief (D-002) PREVALECEN sobre cualquier propuesta del script.
> Dirección visual: **A — "Cerebro abierto"** (elegida 2026-10-29).
> Si existe `design-system/pages/[page].md`, sus reglas anulan las de este archivo.

**Proyecto:** Hemispheric (gethemispheric)
**Stack:** Astro + React islands + Tailwind 4
**Actualizado:** 2026-10-29
**Categoría:** Dev Tool · Open Source · Memoria para agentes

---

## 1. Paleta de color

### Dark mode (por defecto)

| Rol | Hex | CSS Variable | Notas |
|-----|-----|--------------|-------|
| Background | `#0A0A0A` | `--color-background` | Negro profundo, base oscura |
| Surface | `#111111` | `--color-surface` | Cards y paneles |
| Surface raised | `#1A1A1A` | `--color-surface-raised` | Hover de cards, tooltips |
| Border | `#222222` | `--color-border` | Bordes sutiles |
| Border strong | `#333333` | `--color-border-strong` | Bordes de énfasis |
| Foreground | `#F5F5F5` | `--color-foreground` | Texto principal |
| Muted | `#A3A3A3` | `--color-muted` | Texto secundario, subtítulos |
| Subtle | `#525252` | `--color-subtle` | Texto muy apagado, placeholders |
| Accent | `#B45309` | `--color-accent` | Ámbar apagado — CTAs, nodos activos del Cortex |
| Accent glow | `#92400E` | `--color-accent-glow` | Sombra/glow del acento |
| On Accent | `#FEF3C7` | `--color-on-accent` | Texto sobre fondo de acento |
| Code bg | `#0D0D0D` | `--color-code-bg` | Bloques de código inline |
| Destructive | `#EF4444` | `--color-destructive` | Errores |

### Light mode

| Rol | Hex | CSS Variable | Notas |
|-----|-----|--------------|-------|
| Background | `#FAFAFA` | `--color-background` | Blanco casi puro |
| Surface | `#FFFFFF` | `--color-surface` | Cards y paneles |
| Surface raised | `#F5F5F5` | `--color-surface-raised` | Hover de cards |
| Border | `#E5E5E5` | `--color-border` | Bordes sutiles |
| Border strong | `#D4D4D4` | `--color-border-strong` | Bordes de énfasis |
| Foreground | `#0A0A0A` | `--color-foreground` | Texto principal |
| Muted | `#737373` | `--color-muted` | Texto secundario |
| Subtle | `#A3A3A3` | `--color-subtle` | Texto muy apagado |
| Accent | `#92400E` | `--color-accent` | Ámbar más oscuro (contraste light) |
| Accent glow | `#78350F` | `--color-accent-glow` | Sombra del acento |
| On Accent | `#FFFBEB` | `--color-on-accent` | Texto sobre acento |
| Code bg | `#F4F4F5` | `--color-code-bg` | Bloques de código |
| Destructive | `#DC2626` | `--color-destructive` | Errores |

**Notas de color:**
- Un solo acento (ámbar). Sin gradientes de startup. Sin verde "run" ni morados de SaaS.
- El acento aparece SOLO en: CTAs primarios, nodos activos del Cortex, links hover, badges de estado.
- El glow del Cortex usa `--color-accent` con `opacity: 0.15–0.3`.

---

## 2. Tipografía

| Rol | Fuente | Peso | Uso |
|-----|--------|------|-----|
| **Display / Hero** | Instrument Serif | 400 (italic opcional) | Titulares principales H1, claim del hero |
| **Heading** | Inter | 600–700 | H2, H3, subtítulos de sección |
| **Body** | Inter | 400 | Párrafos, descripciones, docs |
| **UI** | Inter | 500 | Botones, labels, tabs |
| **Code / Mono** | Geist Mono | 400–500 | Snippets de código, comandos CLI, benchmarks en tabla |

**Escala tipográfica (rem, base 16px):**

| Token | Tamaño | Line-height | Uso |
|-------|--------|-------------|-----|
| `--text-xs` | 0.75rem | 1rem | Captions, badges |
| `--text-sm` | 0.875rem | 1.25rem | Labels, notas |
| `--text-base` | 1rem | 1.5rem | Body |
| `--text-lg` | 1.125rem | 1.75rem | Lead, intro |
| `--text-xl` | 1.25rem | 1.75rem | H3 |
| `--text-2xl` | 1.5rem | 2rem | H2 |
| `--text-3xl` | 1.875rem | 2.25rem | H2 grande |
| `--text-4xl` | 2.25rem | 2.5rem | H1 sección |
| `--text-5xl` | 3rem | 1 | H1 hero |
| `--text-6xl` | 3.75rem | 1 | Hero claim — Instrument Serif, muy grande |
| `--text-7xl` | 4.5rem | 1 | Hero superdisplay (desktop) |

**Import de fuentes:**
```css
/* Instrument Serif */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
/* Inter + Geist Mono */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
/* Geist Mono: via npm @vercel/fonts o CDN */
```

---

## 3. Espaciado (escala 4px base)

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Icon gaps, inline |
| `--space-3` | 12px | Padding inline pequeño |
| `--space-4` | 16px | Padding estándar |
| `--space-6` | 24px | Padding de sección interna |
| `--space-8` | 32px | Gaps entre componentes |
| `--space-12` | 48px | Secciones medianas |
| `--space-16` | 64px | Secciones grandes |
| `--space-24` | 96px | Hero padding top/bottom |
| `--space-32` | 128px | Separador entre secciones principales |

---

## 4. Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, tags, inline |
| `--radius-md` | 8px | Inputs, botones |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Paneles, modales |
| `--radius-full` | 9999px | Pills |

---

## 5. Sombras

Sobre fondo oscuro las sombras son casi invisibles; se usa `border + glow` en su lugar.

| Token | Valor dark | Valor light | Uso |
|-------|-----------|-------------|-----|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.5)` | `0 1px 2px rgba(0,0,0,0.05)` | Lift sutil |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.6)` | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.7)` | `0 10px 15px rgba(0,0,0,0.1)` | Paneles flotantes |
| `--shadow-accent` | `0 0 20px rgba(180,83,9,0.25)` | — | Glow del acento (Cortex) |

---

## 6. Motion

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-fast` | 150ms | Hover, focus |
| `--duration-normal` | 250ms | Transiciones UI |
| `--duration-slow` | 400ms | Reveals al scroll |
| `--duration-reveal` | 600ms | Entradas de sección |
| `--ease-out` | `cubic-bezier(0.16,1,0.3,1)` | Entradas (ease-out-expo) |
| `--ease-in-out` | `cubic-bezier(0.4,0,0.2,1)` | Cambios de estado |
| `--ease-spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Micro-interacciones con rebote sutil |

**Regla reduced-motion:** todas las animaciones respetan `@media (prefers-reduced-motion: reduce)`.

---

## 7. Cortex — tokens específicos

El grafo de memoria es la island React protagonista.

| Token | Valor dark | Valor light |
|-------|-----------|-------------|
| `--cortex-node-color` | `#F5F5F5` | `#0A0A0A` |
| `--cortex-node-active` | `#B45309` | `#92400E` |
| `--cortex-edge-color` | `#333333` | `#D4D4D4` |
| `--cortex-edge-active` | `rgba(180,83,9,0.5)` | `rgba(146,64,14,0.4)` |
| `--cortex-glow` | `rgba(180,83,9,0.2)` | `rgba(146,64,14,0.1)` |
| `--cortex-bg` | `#0A0A0A` | `#FAFAFA` |
| `--cortex-label-font` | Geist Mono | Geist Mono |
| `--cortex-label-size` | 0.625rem | 0.625rem |

---

## 8. Reglas anti-patrón (vetos del brief)

- ❌ Ilustraciones de stock (devs con laptops, vectores genéricos de agencias)
- ❌ Gradientes de startup (morado-rosa-naranja)
- ❌ Animaciones que entorpecen o tardan más de 600ms en aparecer
- ❌ Aspecto de agencia de marketing / funnel de ventas
- ❌ Emojis como iconos — solo SVG (Lucide, Heroicons, Simple Icons)
- ❌ Más de 1 color de acento (el ámbar es el único)
- ❌ Hover con transform que desplazan el layout
- ❌ Texto sin contraste mínimo 4.5:1

---

## 9. Checklist pre-entrega (por vista)

- [ ] `npx astro check` sin errores · `npm run build` ok
- [ ] Responsive: 375 / 768 / 1440 px comprobado
- [ ] Dark mode + light mode funcionales, toggle persistido en `localStorage`
- [ ] Instrument Serif cargada y visible en el hero
- [ ] Cortex island funcional con `client:visible`
- [ ] Tabla de benchmarks legible en móvil (scroll horizontal si hace falta)
- [ ] Contrastes: foreground sobre background ≥ 4.5:1 en ambos temas
- [ ] `prefers-reduced-motion` respetado en todas las animaciones
- [ ] Sin emojis como iconos
- [ ] `cursor-pointer` en todos los elementos clicables
- [ ] Focus states visibles (ring de `--color-accent`)
