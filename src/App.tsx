import { useCallback } from 'react';
import Reactflow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  BackgroundVariant,
} from 'reactflow';

import { PersonNode, PersonNodeData } from './components/Node';

import { Workspace } from './apidef/models/Workspace';
import * as workspace from './testdata/workspace.json';

import 'reactflow/dist/style.css';

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

const nodeTypes = {
  personNode: PersonNode,
};

function App() {
  const data = workspace as Workspace;
  const initialNodes = data.model?.people?.map((person) => ({
    id: person.id!,
    type: 'personNode',
    data: new PersonNodeData(person), position: { x: 0, y: 0 }
  })) || [];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Reactflow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </Reactflow >
    </div>
  );
}

export default App;
