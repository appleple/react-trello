import React from 'react';
import Board from '../src';

export default {
  title: 'Custom Templates/Custom Lane Template',
  component: Board,
  parameters: {
    info: 'Style your lane header appearance',
  },
};

const CustomLaneHeader = (props) => {
  const buttonHandler = () => {
    alert(`The label passed to the lane was: ${props.label}. The lane has ${props.cards.length} cards!`);
  };

  return (
    <div>
      <header
        style={{
          borderBottom: '2px solid #c5c5c5',
          paddingBottom: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{props.title}</div>
        {props.label && (
          <div style={{ width: '30%', textAlign: 'right', fontSize: 13 }}>
            <button onClick={buttonHandler} style={{ cursor: 'pointer' }}>
              ?
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

const Template = (args) => <Board {...args} />;

export const CustomLaneTemplate = Template.bind({});
CustomLaneTemplate.args = {
  data: {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: 'First Lane here',
        cards: [
          {
            id: 'Card1',
            title: 'John Smith',
            description: 'Thanks. Please schedule me for an estimate on Monday.',
          },
          {
            id: 'Card2',
            title: 'Card Weathers',
            description: 'Email received at 1:14pm',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Completed Tasks',
        label: 'Second Lane here',
        cards: [
          {
            id: 'Card3',
            title: 'Michael Caine',
            description: 'You are welcome. Interested in doing business with you again',
            tags: [
              { title: 'Critical', color: 'white', bgcolor: 'red' },
              { title: '2d ETA', color: 'white', bgcolor: '#0079BF' },
            ],
          },
        ],
      },
    ],
  },
  customLaneHeader: <CustomLaneHeader />,
};
