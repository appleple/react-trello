import React from 'react';
import Board from '../src';
import data from './data/collapsible.json';

export default {
  title: 'Advanced Features/Collapsible Lanes',
  component: Board,
  parameters: {
    info: 'Collapse lanes when double clicking on the lanes',
  },
};

const Template = (args) => {
  const shouldReceiveNewData = (nextData) => {
    console.log('data has changed');
    console.log(nextData);
  };

  return <Board {...args} onDataChange={shouldReceiveNewData} />;
};

export const CollapsibleLanes = Template.bind({});
CollapsibleLanes.args = {
  data: data,
  draggable: true,
  collapsibleLanes: true,
};
