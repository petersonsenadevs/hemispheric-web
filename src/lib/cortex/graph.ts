// Cortex graph: the memory engine's core idea, modelled for the demo.
// Facts are nodes; the engine connects them and recalls with 2-hop activation.
// This is pure and deterministic (no backend, no embeddings) — see D-004.

export interface CortexNode {
  id: string;
  /** Short label shown on the node. */
  label: string;
  /** The fact revealed when the node is focused. */
  fact: string;
  /** Fixed layout position in the SVG viewBox. */
  x: number;
  y: number;
}

export interface CortexEdge {
  from: string;
  to: string;
}

export interface CortexGraph {
  nodes: CortexNode[];
  edges: CortexEdge[];
}

/** How strongly a node is activated, by distance from the seed. */
export interface Activation {
  hop: 0 | 1 | 2;
  weight: number;
}

// Activation decays with distance (ACT-R-like). Beyond 2 hops: not recalled.
const HOP_WEIGHT: Record<0 | 1 | 2, number> = {
  0: 1,
  1: 0.55,
  2: 0.25,
};

/** Undirected adjacency map for the graph. */
export function buildAdjacency(graph: CortexGraph): Map<string, Set<string>> {
  const adj = new Map<string, Set<string>>();
  for (const node of graph.nodes) adj.set(node.id, new Set());
  for (const edge of graph.edges) {
    adj.get(edge.from)?.add(edge.to);
    adj.get(edge.to)?.add(edge.from);
  }
  return adj;
}

/**
 * Activate the graph from a seed node: the seed (hop 0), its neighbours (hop 1)
 * and their neighbours (hop 2), with decreasing weight. Nodes farther than 2
 * hops are not recalled. Unknown seed → empty map.
 */
export function activate(
  graph: CortexGraph,
  seedId: string,
  adjacency?: Map<string, Set<string>>,
): Map<string, Activation> {
  const result = new Map<string, Activation>();
  const adj = adjacency ?? buildAdjacency(graph);
  if (!adj.has(seedId)) return result;

  result.set(seedId, { hop: 0, weight: HOP_WEIGHT[0] });

  // BFS up to depth 2; keep the smallest hop for each node.
  let frontier: string[] = [seedId];
  for (const hop of [1, 2] as const) {
    const next: string[] = [];
    for (const id of frontier) {
      for (const neighbour of adj.get(id) ?? []) {
        if (result.has(neighbour)) continue;
        result.set(neighbour, { hop, weight: HOP_WEIGHT[hop] });
        next.push(neighbour);
      }
    }
    frontier = next;
  }
  return result;
}

/**
 * Edges that are "lit" by an activation: both endpoints activated and adjacent
 * in hop distance (hop n ↔ hop n+1, or the seed's own hop-1 links).
 */
export function litEdges(
  graph: CortexGraph,
  activation: Map<string, Activation>,
): Set<string> {
  const lit = new Set<string>();
  for (const edge of graph.edges) {
    const a = activation.get(edge.from);
    const b = activation.get(edge.to);
    if (a && b && Math.abs(a.hop - b.hop) === 1) {
      lit.add(edgeKey(edge));
    }
  }
  return lit;
}

export function edgeKey(edge: CortexEdge): string {
  return `${edge.from}--${edge.to}`;
}
