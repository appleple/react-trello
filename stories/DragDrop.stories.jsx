import React from 'react';
import Board from '../src';
import data from './data/base.json';
import './drag.css';

export default {
  title: 'Drag-n-Drop',
  component: Board,
  parameters: {
    info: 'A demonstration of onDragStart and onDragEnd hooks for card and lanes',
  },
};

const Template = (args) => <Board {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  data: data,
  draggable: true,
  onDataChange: (nextData) => {
    console.log('data has changed');
    console.log(nextData);
  },
  handleDragStart: (cardId, laneId) => {
    console.log('drag started');
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`);
  },
  handleDragEnd: (cardId, sourceLaneId, targetLaneId, position, card) => {
    console.log('drag ended');
    console.log(`cardId: ${cardId}`);
    console.log(`sourceLaneId: ${sourceLaneId}`);
    console.log(`targetLaneId: ${targetLaneId}`);
    console.log(`newPosition: ${position}`);
    console.log('cardDetails:');
    console.log(card);
  },
  handleLaneDragStart: (laneId) => {
    console.log(`lane drag started for ${laneId}`);
  },
  handleLaneDragEnd: (laneId, newPosition) => {
    console.log(`lane drag ended for ${laneId}`);
    console.log(`New lane position: ${newPosition}`);
  },
};

export const DragStyling = Template.bind({});
DragStyling.args = {
  data: data,
  draggable: true,
  cardDragClass: 'draggingCard',
  laneDragClass: 'draggingLane',
};
DragStyling.parameters = {
  info: 'Modifying appearance of dragged card',
};
