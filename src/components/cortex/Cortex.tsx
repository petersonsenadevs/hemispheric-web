import { useMemo, useState } from 'react';
import {
  activate,
  buildAdjacency,
  litEdges,
  edgeKey,
  type Activation,
} from '../../lib/cortex/graph';
import { cortexGraph, defaultSeedId } from '../../data/cortex-graph';
import './Cortex.css';

const AMBER = 'var(--cortex-node-active)';

interface NodeStyle {
  dot: string;
  dotOpacity: number;
  stroke: string;
  strokeOpacity: number;
  label: string;
}

function nodeStyle(act: Activation | undefined): NodeStyle {
  if (!act) {
    return { dot: 'var(--cortex-node)', dotOpacity: 0.4, stroke: 'var(--cortex-edge)', strokeOpacity: 1, label: 'var(--muted)' };
  }
  if (act.hop === 0) return { dot: AMBER, dotOpacity: 1, stroke: AMBER, strokeOpacity: 1, label: AMBER };
  if (act.hop === 1) return { dot: AMBER, dotOpacity: 0.8, stroke: AMBER, strokeOpacity: 0.7, label: 'var(--foreground)' };
  return { dot: AMBER, dotOpacity: 0.45, stroke: AMBER, strokeOpacity: 0.4, label: 'var(--muted)' };
}

interface CortexProps {
  /** Show the fact panel and interaction hint (demo). Off for the ambient hero use. */
  showFact?: boolean;
}

export default function Cortex({ showFact = true }: CortexProps) {
  const [activeId, setActiveId] = useState(defaultSeedId);

  const adjacency = useMemo(() => buildAdjacency(cortexGraph), []);
  const activation = useMemo(
    () => activate(cortexGraph, activeId, adjacency),
    [activeId, adjacency],
  );
  const lit = useMemo(() => litEdges(cortexGraph, activation), [activation]);

  const activeNode = cortexGraph.nodes.find((n) => n.id === activeId);

  const select = (id: string) => setActiveId(id);
  const reset = () => setActiveId(defaultSeedId);

  return (
    <div className="cortex">
      <svg
        className="cortex-svg"
        viewBox="0 0 480 420"
        fill="none"
        role="group"
        aria-label="Interactive memory graph. Focus a node to recall its fact and its 2-hop neighbours."
        xmlns="http://www.w3.org/2000/svg"
        onMouseLeave={reset}
      >
        {/* Edges */}
        {cortexGraph.edges.map((edge) => {
          const a = cortexGraph.nodes.find((n) => n.id === edge.from)!;
          const b = cortexGraph.nodes.find((n) => n.id === edge.to)!;
          const isLit = lit.has(edgeKey(edge));
          return (
            <line
              key={edgeKey(edge)}
              className="cortex-edge"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={isLit ? 'var(--cortex-edge-active)' : 'var(--cortex-edge)'}
              strokeWidth={isLit ? 1.5 : 1}
            />
          );
        })}

        {/* Nodes */}
        {cortexGraph.nodes.map((node) => {
          const act = activation.get(node.id);
          const style = nodeStyle(act);
          const radius = node.id === 'claude' ? 24 : 20;
          const isSeed = act?.hop === 0;
          return (
            <g
              key={node.id}
              className="cortex-node"
              transform={`translate(${node.x},${node.y})`}
              role="button"
              tabIndex={0}
              aria-pressed={activeId === node.id}
              aria-label={`${node.label}: ${node.fact}`}
              onMouseEnter={() => select(node.id)}
              onFocus={() => select(node.id)}
              onClick={() => select(node.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  select(node.id);
                }
              }}
            >
              {/* Transparent hit area so the node stays a ≥44px tap target on mobile. */}
              <circle r={34} fill="transparent" />
              {isSeed && (
                <circle className="cortex-seed-glow" r={radius + 10} fill="var(--cortex-glow)" />
              )}
              <circle
                className="cortex-ring"
                r={radius}
                fill="var(--surface)"
                stroke={style.stroke}
                strokeOpacity={style.strokeOpacity}
                strokeWidth={isSeed ? 1.5 : 1}
              />
              <circle r={radius < 24 ? 6 : 9} fill={style.dot} opacity={style.dotOpacity} />
              <text className="cortex-label" x={0} y={radius + 16} textAnchor="middle" fill={style.label}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {showFact && (
        <div className="cortex-fact" aria-live="polite">
          <p className="cortex-fact-label">{activeNode?.label}</p>
          <p className="text-muted">{activeNode?.fact}</p>
        </div>
      )}
      {showFact && <p className="cortex-hint">Hover or tap a node · 2-hop activation</p>}
    </div>
  );
}
