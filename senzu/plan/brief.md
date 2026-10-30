# Brief — Web de Hemispheric (gethemispheric)

- **Fecha:** 2026-10-29 · **Stack:** Astro + React islands + Tailwind
- **Dirección visual:** A — "Cerebro abierto" (elegida en sesión)

---

## Objetivo (una frase)

Que un dev que usa Claude Code o Codex aterrice en la web, vea el Cortex en acción y los benchmarks,
y pulse "Instalar" (o vaya al repo de GitHub).

## CTA principal

`npm install hemispheric` / "Ver en GitHub" — en el hero, visible sin scroll.

## Usuarios y resultado observable

- **Quién lo usa:** desarrolladores técnicos que usan Claude Code, Codex, LangGraph o smolagents;
  que buscan memoria persistente para su agente sin pagar ni depender de un servidor.
- **Dispositivo:** responsive completo (móvil + escritorio). Desktop-primary en acceso inicial;
  móvil para referencias rápidas.
- **Resultado:** el dev instala el motor, lo conecta a su anfitrión (Claude Code / Codex / Senzu /
  Obsidian / standalone) y la memoria persiste entre sesiones.

## Secciones (en orden, del dossier §4)

| # | Sección | Qué hace | Notas |
|---|---|---|---|
| 1 | **Hero + claim** | Engancha. CTA visible sin scroll | "La memoria para tu agente: gratis, sin internet, que mide igual o mejor que los de pago" |
| 2 | **Demo Cortex** | El grafo de memoria en vivo o interactivo | Killer feature. Island React. El momento de "sorpresa visual" |
| 3 | **Benchmarks** | La prueba. Tabla LoCoMo, con matiz honesto | Estilo paper académico. Enlace a cómo reproducirlos |
| 4 | **Docs por anfitrión** | Cómo instalarlo (Claude Code, Codex, Senzu, Obsidian, standalone) | Tabs o secciones desplegables |
| 5 | **Open source / licencia / créditos** | Confianza y transparencia | GitHub stars, licencia, autores |

## Dirección visual elegida — A "Cerebro abierto"

| Token | Valor |
|---|---|
| Fondo dark | `#0A0A0A` (negro profundo) |
| Fondo light | `#FFFFFF` / `#FAFAFA` |
| Acento principal | Ámbar apagado `~#B45309` (solo CTAs y nodos activos del Cortex) |
| Tipografía titular | Instrument Serif (display grande, inesperado) |
| Tipografía cuerpo | Inter o Geist Sans |
| Tipografía código | Geist Mono / JetBrains Mono |
| Tema | Dark default + light mode toggle |
| Estilo global | Editorial, monochrome con acento único |

## Vetos (lo que NO entra)

- Ilustraciones de stock (devs con laptops, vectores genéricos)
- Gradientes de startup (morado-rosa-naranja)
- Animaciones que entorpecen la lectura o tardan en aparecer
- Aspecto de agencia de marketing / funnel de ventas

## Efectos previstos

- Cortex: grafo generativo con nodos/conexiones que "respira" — React island con `client:visible`
- Reveals al scroll: suaves, reducidos (AOS o scroll-reveal). Sin scroll-jacking
- Tipografía display: titulares en Instrument Serif, muy grandes, sin efectos de typewriter
- Animación de benchmarks: contadores al entrar en viewport (sutil)

## Restricciones

- **Open source:** el código de la web también puede ser público (coordinar con el usuario)
- **Sin servidor:** la web es SSG (Astro static output); la demo del Cortex es client-side puro
- **Benchmarks:** la tabla de Zep/Graphiti está pendiente de completarse (F8-T9); la web puede
  publicarse con los datos parciales ya medidos y actualizar cuando termine
- **Sin claves/API:** el Cortex demo usa el motor directamente en el navegador (cero backend)

## Contenido pendiente (checklist para el cliente)

- [ ] Logo/SVG de Hemispheric (si existe; si no, se genera con brand + graphic-design)
- [ ] Colores de marca oficiales (si los hay)
- [ ] Snippet real de instalación (`npm install hemispheric` o equivalente — confirmar el nombre del paquete)
- [ ] URL del repo de GitHub del motor Node
- [ ] Tabla de benchmarks completa (cuando termine F8-T9 con Zep)
- [ ] Texto del claim final confirmado (del dossier: "La memoria para tu agente: gratis, sin internet, que mide igual o mejor que los de pago, y se enchufa donde ya trabajas")
- [ ] Licencia definitiva del proyecto

## Supuestos (para refutar si es necesario)

- El Cortex se puede renderizar como island React sin backend (solo JS en el navegador)
- El output de Astro es `static` (SSG puro); sin SSR
- La web va en la carpeta `D:\hemi-web` y el dominio se decide más adelante
- El paquete npm ya tiene o tendrá nombre definitivo antes del lanzamiento

## Definición de hecho global

- [ ] `npx astro check` sin errores · `npm run build` ok
- [ ] Responsive verificado en 375 / 768 / 1440 px
- [ ] Dark mode + light mode funcionales
- [ ] Sin secretos ni variables de servidor expuestas
- [ ] Devlog al día · sin push a main sin aprobación
