import React, { useCallback } from 'react';

import Element from '../Node/Element';

import { CommonNodeState } from '../Node/Node';

import './Canvas.scss';

type Props = {
  nodes: CommonNodeState[];
  updateNode: (id: string, newItem: CommonNodeState) => void;
  deleteNode: (id: string) => void;
  selectNode: (id: string | undefined) => void;
};

const Canvas: React.FC<Props> = ({ nodes, updateNode, deleteNode, selectNode }) => {
  const changePosition = useCallback(
    (id: string, deltaX: number, deltaY: number) => {
      const node = nodes.find((x) => x.id === id);

      if (node) {
        updateNode(id, {
          ...node,
          style: {
            ...node.style,
            top: node.style.top + deltaY,
            left: node.style.left + deltaX,
          },
        });
      }
    },
    [nodes, updateNode]
  );

  const deleteElement = useCallback(
    (id: string) => {
      deleteNode(id);
      selectNode(undefined);
    },
    [deleteNode, selectNode]
  );

  const resizeElement = useCallback(
    (id: string, width: number, height: number) => {
      const node = nodes.find((x) => x.id === id);

      if (node) {
        updateNode(id, {
          ...node,
          style: {
            ...node.style,
            width: width,
            height: height,
          },
        });
      }
    },
    [nodes, updateNode]
  );

  return (
    <div
      className="canvas"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          selectNode(undefined);
        }
      }}
    >
      {nodes.map((node) => {
        return (
          <Element
            key={node.id}
            node={node}
            onDrag={changePosition}
            onDoubleClick={deleteElement}
            onClick={selectNode}
            onResize={resizeElement}
          />
        );
      })}
    </div>
  );
};

export default Canvas;
