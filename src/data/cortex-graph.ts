import type { CortexGraph } from '../lib/cortex/graph';

// Example memory graph for the demo. Facts are product-true and in English.
// Layout positions are fixed (viewBox 0 0 480 420) so the render is deterministic.
export const cortexGraph: CortexGraph = {
  nodes: [
    { id: 'claude', label: 'claude', fact: 'Your coding agent. Everything it learns links back to this node.', x: 240, y: 205 },
    { id: 'project', label: 'project', fact: 'project: hemi-web — an Astro marketing site.', x: 130, y: 115 },
    { id: 'memory', label: 'memory', fact: 'memory: facts stored as a graph on disk. No server, no embeddings.', x: 350, y: 115 },
    { id: 'user', label: 'user', fact: 'user: prefers Spanish, terse answers, the Senzu method.', x: 125, y: 300 },
    { id: 'host', label: 'host', fact: 'host: also plugs into Codex, not just Claude Code.', x: 355, y: 300 },
    { id: 'stack', label: 'stack', fact: 'stack: Astro + React islands + Tailwind 4.', x: 55, y: 195 },
    { id: 'date', label: 'date', fact: 'last session: 2026-10-30.', x: 240, y: 45 },
    { id: 'benchmark', label: 'benchmark', fact: 'LoCoMo: 25.6% overall · 16.2% temporal recall.', x: 435, y: 205 },
    { id: 'hook', label: 'hook', fact: 'captured via a PostToolUse hook after each tool call.', x: 300, y: 375 },
  ],
  edges: [
    { from: 'claude', to: 'project' },
    { from: 'claude', to: 'memory' },
    { from: 'claude', to: 'user' },
    { from: 'claude', to: 'host' },
    { from: 'project', to: 'stack' },
    { from: 'project', to: 'date' },
    { from: 'memory', to: 'date' },
    { from: 'memory', to: 'benchmark' },
    { from: 'host', to: 'hook' },
  ],
};

export const defaultSeedId = 'claude';
