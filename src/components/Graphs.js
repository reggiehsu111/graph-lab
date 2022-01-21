import React, { useState, useEffect, useCallback } from 'react';

import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import {Elements as initElements} from '@/Elements';
import CircleNode from './CustomNodes/CircleNode';

const connectionLineStyle = { stroke: '#0f0' };
const snapGrid = [20, 20];
const nodeTypes = {
  circleNode: CircleNode,
};

const Graphs = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState(initElements);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, els)
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      style={{ background: "#F0F0F0" }}
      onLoad={onLoad}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'circleNode') return '#ff0022';
          if (n.type === 'output') return '#ff0072';
        }}
        nodeColor={(n) => {
          if (n.type === 'circleNode') return '#ff0072';
          return '#fff';
        }}
      />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default Graphs;