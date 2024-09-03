import React from 'react';
import Board from '../src';
import data from './data/data-sort.json';

export default {
  title: 'Basic Functions',
  component: Board,
  parameters: {
    info: 'A lane sorted by completedAt',
  },
};

const Template = (args) => <Board {...args} />;

export const SortedLane = Template.bind({});
SortedLane.args = {
  data: data,
  laneSortFunction: (card1, card2) => new Date(card1.metadata.completedAt) - new Date(card2.metadata.completedAt),
};
SortedLane.parameters = {
  info: 'A lane sorted by completed at ascending',
};

export const ReverseSortedLane = Template.bind({});
ReverseSortedLane.args = {
  data: data,
  laneSortFunction: (card1, card2) => new Date(card2.metadata.completedAt) - new Date(card1.metadata.completedAt),
};
ReverseSortedLane.parameters = {
  info: 'A lane sorted by completed at descending',
};
