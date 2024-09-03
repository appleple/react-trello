import React from 'react';
import Board from '../src';
import data from './data/drag-drop.json';

export default {
  title: 'Drag-n-Drop',
  component: Board,
  parameters: {
    info: 'Use droppable property to prevent some lanes from being droppable',
  },
};

const Template = (args) => <Board {...args} />;

export const RestrictLanes = Template.bind({});
RestrictLanes.args = {
  data: data,
  draggable: true,
};

export const DragCardsNotLanes = Template.bind({});
DragCardsNotLanes.args = {
  data: data,
  draggable: true,
  laneDraggable: false,
};
DragCardsNotLanes.parameters = {
  info: 'Use props to disable dragging lanes but enable card dragging',
};
