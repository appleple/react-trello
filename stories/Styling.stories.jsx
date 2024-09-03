import React from 'react';
import Board from '../src';
import './board.css';
import data from './data/base.json';

export default {
  title: 'Styling',
  component: Board,
  parameters: {
    info: 'Change the background and other css styles for the board container',
  },
};

const Template = (args) => <Board {...args} />;

export const BoardStyling = Template.bind({});
BoardStyling.args = {
  data: data,
  style: { padding: '30px 20px', fontFamily: 'Verdana' },
  className: 'boardContainer',
};

const dataWithLaneStyles = {
  lanes: [
    {
      id: 'PLANNED',
      title: 'Planned Tasks',
      label: '20/70',
      style: {
        width: 280,
        backgroundColor: '#3179ba',
        color: '#fff',
        boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
      },
      cards: [
        {
          id: 'Milk',
          title: 'Buy milk',
          label: '15 mins',
          description: '2 Gallons of milk at the Deli store',
        },
        {
          id: 'Plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed',
        },
      ],
    },
  ],
};

export const LaneStyling = Template.bind({});
LaneStyling.args = {
  data: dataWithLaneStyles,
  style: { backgroundColor: '#eee' },
};
LaneStyling.parameters = {
  info: 'Change the look and feel of the lane',
};
