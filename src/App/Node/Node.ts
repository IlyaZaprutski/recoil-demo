export enum NodeType {
  Rectangle = 'rectangle',
  Chart = 'chart',
}

export type NodeStyle = {
  top: number;
  left: number;
  width: number;
  height: number;
  backgroundColor: string;
};

export type CommonNodeState = {
  id: string;
  type: NodeType;
  style: NodeStyle;
};

export const DefaultNodeStyle: NodeStyle = {
  top: 10,
  left: 10,
  width: 100,
  height: 100,
  backgroundColor: 'red',
};
