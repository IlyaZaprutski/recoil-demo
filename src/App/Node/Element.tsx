import React from 'react';
import { DraggableCore } from 'react-draggable';
import { Resizable } from 'react-resizable';

import { CommonNodeState } from '../Node/Node';

import 'react-resizable/css/styles.css';
import './Element.scss';

type Props = {
  node: CommonNodeState;
  onDrag: (id: string, deltaX: number, deltaY: number) => void;
  onDoubleClick: (id: string) => void;
  onClick: (id: string) => void;
  onResize: (id: string, width: number, height: number) => void;
};

const Element: React.FC<Props> = ({ node, onDrag, onDoubleClick, onClick, onResize }) => {
  return (
    <Resizable
      width={node.style.width}
      height={node.style.height}
      onResize={(_, { size }) => {
        onResize(node.id, Math.round(size.width), Math.round(size.height));
      }}
    >
      <div
        className="element"
        style={node.style}
        onDoubleClick={() => {
          onDoubleClick(node.id);
        }}
        onMouseDown={() => {
          onClick(node.id);
        }}
      >
        <DraggableCore
          onDrag={(e: any) => {
            onDrag(node.id, e.movementX, e.movementY);
          }}
        >
          <div className="element__body">
            <div>Top: {node.style.top}</div>
            <div>Left: {node.style.left}</div>
          </div>
        </DraggableCore>
      </div>
    </Resizable>
  );
};

export default Element;
