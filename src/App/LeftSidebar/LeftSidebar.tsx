import React from 'react';

import { FiSquare } from 'react-icons/fi';

import { NodeType } from '../Node/Node';

import './LeftSidebar.scss';

type Props = {
  addNode: (type: NodeType) => void;
  addNodes: (type: NodeType) => void;
};

const LeftSidebar: React.FC<Props> = ({ addNode, addNodes }) => {
  return (
    <div className="leftSidebar">
      <div className="leftSidebar__itemsContainer">
        <div
          className="leftSidebar__item"
          onClick={() => {
            addNode(NodeType.Rectangle);
          }}
        >
          <FiSquare color="white" size="25" />
        </div>
        <div
          className="leftSidebar__item"
          onClick={() => {
            addNode(NodeType.Rectangle);
          }}
        >
          <FiSquare color="white" size="25" />
        </div>
        <div
          className="leftSidebar__item"
          onClick={() => {
            addNode(NodeType.Rectangle);
          }}
        >
          <FiSquare color="white" size="25" />
        </div>
        <div
          className="leftSidebar__item"
          onClick={() => {
            addNode(NodeType.Rectangle);
          }}
        >
          <FiSquare color="white" size="25" />
        </div>
      </div>

      <div
        className="leftSidebar__generateMany"
        onClick={() => {
          addNodes(NodeType.Rectangle);
        }}
      >
        Generate
      </div>
    </div>
  );
};

export default LeftSidebar;
