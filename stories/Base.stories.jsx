import React from 'react';
import Board from '../src';
import data from './data/base.json';

export default {
  title: 'Basic Functions/Full Board example',
  component: Board,
  parameters: {
    info: 'A complete Trello board with multiple lanes fed as json data',
  },
};

const Template = (args) => <Board {...args} />;

export const FullBoardExample = Template.bind({});
FullBoardExample.args = {
  data: data,
};
