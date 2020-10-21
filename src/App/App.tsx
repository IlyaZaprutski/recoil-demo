import React, { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

import Layout from './Layout/Layout';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import Canvas from './Canvas/Canvas';
import RightSidebar from './RightSidebar/RightSidebar';

import useArrayState from './Hooks/useArrayState';

import { CommonNodeState, DefaultNodeStyle, NodeType } from './Node/Node';

import './App.scss';

function App() {
  const [nodes, addNode, updateNode, deleteNode, concatItems] = useArrayState<CommonNodeState>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(undefined);

  const selectedNode = nodes.find((x) => x.id === selectedNodeId);

  const addNewNode = useCallback(
    (type: NodeType) => {
      addNode({
        id: nanoid(),
        type,
        style: DefaultNodeStyle,
      });
    },
    [addNode]
  );

  const addNewNodes = useCallback(
    (type: NodeType) => {
      const newItems = new Array(1000).fill(0).map(() => ({
        id: nanoid(),
        type,
        style: DefaultNodeStyle,
      }));
      concatItems(newItems);
    },
    [concatItems]
  );

  return (
    <div className="app">
      <Layout title="React State ❤️">
        <aside className="leftSidebarContainer">
          <LeftSidebar addNode={addNewNode} addNodes={addNewNodes} />
        </aside>
        <section className="canvasContainer">
          <Canvas nodes={nodes} updateNode={updateNode} deleteNode={deleteNode} selectNode={setSelectedNodeId} />
        </section>
        <aside className="rightSidebarContainer">
          {selectedNode && <RightSidebar node={selectedNode} updateNode={updateNode} />}
        </aside>
      </Layout>
    </div>
  );
}

export default App;
