# Blueprint — gethemispheric landing (APROBADO con correcciones 2026-10-30)

> Paso 1 del modo propuesta. Estructura + contenido real esbozado antes de diseñar nada.
> Una vez que escribas APROBADO (o corrijas lo que no encaja), paso a las maquetas HTML.

---

| # | Sección | Contenido esbozado (texto REAL candidato) | En móvil | Lo trae |
|---|---|---|---|---|
| 1 | **Hero** | **H1:** "Memory for your agent." *(Instrument Serif, enorme, 2 líneas — idioma inglés)* — **Sub:** "Free. Offline. No server. Works where you already work." — **CTA 1:** `hemispheric install --claude` *(copiable, Geist Mono — es un CLI de hooks, no npm)* — **CTA 2:** "See the demo ↓" *(scroll anchor)* — **Visual:** grafo del Cortex en movimiento lento a la derecha/fondo | CTA 1 ancho completo · grafo debajo del texto, más pequeño | copy: yo · comando exacto: confirmar al publicar |
| 2 | **Demo Cortex** | **H2:** "Así almacena y recupera lo que importa." — **Lead:** "Cada hecho que guarda tu agente es un nodo. El motor los conecta por nombre, fecha y relevancia, y los recupera con activación a 2 saltos —sin embeddings, sin servidor, instantáneo." — **Island React:** grafo interactivo con nodos reales (ej. "claude → proyecto → stack → astro") · hover en nodo muestra el hecho · nodos activos en ámbar | Grafo a ancho completo · leyenda debajo · táctil (pinch opcional) | demo: yo (lógica del Cortex en JS) |
| 3 | **Benchmarks** | **H2:** "Los números, sin disculpas." — **Lead honesto:** "Medido con Qwen3-8B local como contestador y juez — la vara es la misma para todos, no es comparable al leaderboard oficial de mem0/Zep (que usa GPT-4o). El cara a cara es justo." — **Tabla principal (LoCoMo 1986 preg.):** Motor 25,6 % · Embedding 28,0 % · mem0 21,1 % · Zep (en curso) — **Tabla destacada (cat. temporal):** Motor **16,2 %** vs mem0 5,3 % *(«el motor casi dobla a mem0 en temporal»)* — **CTA:** "Reproducir el benchmark →" *(enlaza a repo)* | Tablas con scroll horizontal · números grandes con `font-tabular` Geist Mono | datos: ya tenemos · URL repo: pendiente · Zep final: pendiente (F8-T9) |
| 4 | **Instalación** | **H2:** "Se enchufa donde ya trabajas." — **Tabs / accordeon:** Claude Code · Codex · Senzu · Obsidian · Standalone — Cada pestaña: 2-3 líneas de snippet copiable + frase de qué hace el hook. Ej. Claude Code: `npm i -g hemispheric && hemispheric init --claude` — *(sin precio, sin registro, sin nube)* | Tabs en scroll horizontal · snippet a ancho completo | snippets de instalación: confirmar comandos reales con el usuario antes de publicar |
| 5 | **Open source** | **H2:** "Construido en abierto." — Licencia · GitHub stars *(dinámico si hay endpoint, badge si no)* · frase de contribución — **CTA:** "Ver el código →" *(enlaza al repo)* | CTA a ancho completo · badge en línea | URL repo, licencia definitiva: pendiente |

---

## Decisiones tomadas (criterio mío — se cambian sin drama)

1. **No es npm** — es un plugin de hooks CLI. Comando mostrado: `hemispheric install --claude` (se confirma el exacto al publicar).
2. **Repo de GitHub** — placeholder en maquetas; se conecta al real al lanzar.
3. **Idioma: inglés** — producto global para devs de Claude Code y Codex de todo el mundo.
4. **Zep "in progress"** — la fila sale con `⏳ running` hasta que termine F8-T9.
5. **GitHub stars** — badge estático en maqueta; dinámico al lanzar con el repo real.

---

## Patrón de página propuesto

- **Navegación:** barra fija arriba, oscura · logo izquierda · links «Demo · Benchmarks · Instalación · GitHub» derecha · toggle dark/light
- **Hero:** pantalla completa (100vh) · texto izquierda · Cortex derecha (o fondo) · sin scroll-jacking
- **Cortex Demo:** sección a ancho completo, fondo levemente diferente (#111) · isla React sin SSR (client:visible)
- **Benchmarks:** fondo neutro · tabla tipo paper con números grandes · cita del matiz honesto en cursiva
- **Instalación:** fondo igual al hero · tabs clean · syntax highlighting mínimo
- **Open source:** footer extendido · linea horizontal · info mínima
- **Footer:** licencia · GitHub · sin "hecho con ❤️" · sin marquee de tecnologías
