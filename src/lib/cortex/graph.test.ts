import { describe, it, expect } from 'vitest';
import { activate, buildAdjacency, litEdges, edgeKey, type CortexGraph } from './graph';

// A small chain + branch to exercise hop distances:
//   seed — a — b — c        (c is 3 hops from seed → not recalled)
//   seed — d                (d is a direct neighbour)
//   isolated                (no edges)
const graph: CortexGraph = {
  nodes: [
    { id: 'seed', label: 'seed', fact: '', x: 0, y: 0 },
    { id: 'a', label: 'a', fact: '', x: 0, y: 0 },
    { id: 'b', label: 'b', fact: '', x: 0, y: 0 },
    { id: 'c', label: 'c', fact: '', x: 0, y: 0 },
    { id: 'd', label: 'd', fact: '', x: 0, y: 0 },
    { id: 'isolated', label: 'isolated', fact: '', x: 0, y: 0 },
  ],
  edges: [
    { from: 'seed', to: 'a' },
    { from: 'a', to: 'b' },
    { from: 'b', to: 'c' },
    { from: 'seed', to: 'd' },
  ],
};

describe('activate', () => {
  it('activates the seed at hop 0 with full weight', () => {
    const result = activate(graph, 'seed');
    expect(result.get('seed')).toEqual({ hop: 0, weight: 1 });
  });

  it('activates direct neighbours at hop 1', () => {
    const result = activate(graph, 'seed');
    expect(result.get('a')?.hop).toBe(1);
    expect(result.get('d')?.hop).toBe(1);
  });

  it('activates neighbours-of-neighbours at hop 2', () => {
    const result = activate(graph, 'seed');
    expect(result.get('b')?.hop).toBe(2);
  });

  it('does not recall nodes farther than 2 hops', () => {
    const result = activate(graph, 'seed');
    expect(result.has('c')).toBe(false);
  });

  it('weight decreases with hop distance', () => {
    const result = activate(graph, 'seed');
    const w0 = result.get('seed')!.weight;
    const w1 = result.get('a')!.weight;
    const w2 = result.get('b')!.weight;
    expect(w0).toBeGreaterThan(w1);
    expect(w1).toBeGreaterThan(w2);
  });

  it('keeps the smallest hop when a node is reachable by several paths', () => {
    // d is a direct neighbour of seed; even if other paths existed it stays hop 1.
    const result = activate(graph, 'seed');
    expect(result.get('d')?.hop).toBe(1);
  });

  it('returns an empty map for an unknown seed', () => {
    const result = activate(graph, 'does-not-exist');
    expect(result.size).toBe(0);
  });

  it('activates only itself for an isolated node', () => {
    const result = activate(graph, 'isolated');
    expect(result.size).toBe(1);
    expect(result.get('isolated')?.hop).toBe(0);
  });

  it('accepts a prebuilt adjacency map and gives the same result', () => {
    const adj = buildAdjacency(graph);
    const a = activate(graph, 'seed');
    const b = activate(graph, 'seed', adj);
    expect([...b.entries()]).toEqual([...a.entries()]);
  });
});

describe('litEdges', () => {
  it('lights edges between adjacent hop levels only', () => {
    const activation = activate(graph, 'seed');
    const lit = litEdges(graph, activation);
    expect(lit.has(edgeKey({ from: 'seed', to: 'a' }))).toBe(true); // hop 0↔1
    expect(lit.has(edgeKey({ from: 'seed', to: 'd' }))).toBe(true); // hop 0↔1
    expect(lit.has(edgeKey({ from: 'a', to: 'b' }))).toBe(true); // hop 1↔2
  });

  it('does not light an edge to a non-recalled node', () => {
    const activation = activate(graph, 'seed');
    const lit = litEdges(graph, activation);
    expect(lit.has(edgeKey({ from: 'b', to: 'c' }))).toBe(false); // c not recalled
  });
});
