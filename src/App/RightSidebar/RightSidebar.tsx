import React, { useCallback } from 'react';

import ColorPicker from './ColorPicker/ColorPicker';
import Input from './Input/Input';

import { CommonNodeState, NodeStyle } from '../Node/Node';

import './RightSidebar.scss';

type Props = {
  node: CommonNodeState;
  updateNode: (id: string, newItem: CommonNodeState) => void;
};

const RightSidebar: React.FC<Props> = ({ node, updateNode }) => {
  const createChangeFunction = (fieldName: keyof NodeStyle) => (value: number | string) => {
    updateNode(node.id, {
      ...node,
      style: {
        ...node.style,
        [fieldName]: value,
      },
    });
  };

  const updateBackgroundColor = useCallback(createChangeFunction('backgroundColor'), [updateNode, node]);
  const updateTop = useCallback(createChangeFunction('top'), [updateNode, node]);
  const updateLeft = useCallback(createChangeFunction('left'), [updateNode, node]);
  const updateWidth = useCallback(createChangeFunction('width'), [updateNode, node]);
  const updateHeight = useCallback(createChangeFunction('height'), [updateNode, node]);

  return (
    <div className="rightSidebar">
      <div className="rightSidebar__colorPickerContainer">
        <ColorPicker color={node.style.backgroundColor} onChange={updateBackgroundColor}></ColorPicker>
      </div>

      <div className="rightSidebar__inputContainer">
        <Input label="Top" value={node.style.top} onChange={updateTop} />
      </div>

      <div className="rightSidebar__inputContainer">
        <Input label="Left" value={node.style.left} onChange={updateLeft} />
      </div>

      <div className="rightSidebar__inputContainer">
        <Input label="Width" value={node.style.width} onChange={updateWidth} />
      </div>

      <div className="rightSidebar__inputContainer">
        <Input label="Height" value={node.style.height} onChange={updateHeight} />
      </div>
    </div>
  );
};

export default RightSidebar;
