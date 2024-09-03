import React from 'react';
import Board from '../src';

export default {
  title: 'Advanced Features/Event Handling',
  component: Board,
  parameters: {
    info: 'Adding event handlers to cards',
  },
};

const Template = (args) => <Board {...args} />;

export const EventHandling = Template.bind({});
EventHandling.args = {
  draggable: true,
  data: {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        cards: [
          { id: 'Card1', title: 'Card1', description: 'foo card', metadata: { id: 'Card1' } },
          { id: 'Card2', title: 'Card2', description: 'bar card', metadata: { id: 'Card2' } },
        ],
      },
      {
        id: 'lane2',
        title: 'Executing',
        cards: [{ id: 'Card3', title: 'Card3', description: 'foobar card', metadata: { id: 'Card3' } }],
      },
    ],
  },
  onCardClick: (cardId, metadata, laneId) =>
    alert(`Card with id:${cardId} clicked. Has metadata.id: ${metadata.id}. Card in lane: ${laneId}`),
  onLaneClick: (laneId) => alert(`Lane with id:${laneId} clicked`),
};
