import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { mockNodes, mockEdges } from '../../data/mockData';

const initialNodes = mockNodes.map((n, i) => ({
  id: n.id,
  position: { x: (i % 4) * 200, y: Math.floor(i / 4) * 100 },
  data: { label: n.label },
  style: {
    background: '#171717',
    color: '#fafafa',
    border: '1px solid #262626',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '12px',
    width: 150,
    textAlign: 'center' as const,
  }
}));

const initialEdges = mockEdges.map(e => ({
  id: e.id,
  source: e.source,
  target: e.target,
  label: e.label,
  style: { stroke: '#a3a3a3' },
  labelStyle: { fill: '#a3a3a3', fontSize: 10 },
  markerEnd: { type: MarkerType.ArrowClosed, color: '#a3a3a3' }
}));

export function GraphExplorer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-4 border-b border-border bg-card/30">
        <h2 className="text-xl font-semibold tracking-tight">Knowledge Graph</h2>
        <p className="text-sm text-muted-foreground">Interactive view of the LCA taxonomy and dataset links.</p>
      </div>
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          colorMode="dark"
        >
          <Controls />
          <MiniMap nodeStrokeColor="#262626" nodeColor="#171717" maskColor="rgba(0,0,0,0.2)" />
          <Background color="#262626" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
