import React, { Component } from 'react';
import Board from '../src';
import data from './data/base.json';
import smallData from './data/data-sort';

export default {
  title: 'Editable Board',
  component: Board,
  parameters: {
    info: 'Demonstrates various editable board features',
  },
};

class NewCard extends Component {
  state = {};

  updateField = (field, evt) => {
    this.setState({ [field]: evt.target.value });
  };

  handleAdd = () => {
    this.props.onAdd(this.state);
  };

  render() {
    const { onCancel } = this.props;
    return (
      <div
        style={{
          background: 'white',
          borderRadius: 3,
          border: '1px solid #eee',
          borderBottom: '1px solid #ccc',
        }}
      >
        <div style={{ padding: 5, margin: 5 }}>
          <div>
            <div style={{ marginBottom: 5 }}>
              <input type="text" onChange={(evt) => this.updateField('title', evt)} placeholder="Title" />
            </div>
            <div style={{ marginBottom: 5 }}>
              <input type="text" onChange={(evt) => this.updateField('description', evt)} placeholder="Description" />
            </div>
          </div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}

const Template = (args) => <Board {...args} />;

export const AddDeleteCards = Template.bind({});
AddDeleteCards.args = {
  data: data,
  draggable: true,
  id: 'EditableBoard1',
  onDataChange: (nextData) => {
    console.log('Board has changed');
    console.log(nextData);
  },
  onCardDelete: (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`);
  },
  onCardAdd: (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  },
  onCardClick: (cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`),
  editable: true,
};
AddDeleteCards.parameters = {
  info: 'Add/delete cards or delete lanes',
};

export const CustomButtons = Template.bind({});
CustomButtons.args = {
  data: data,
  editable: true,
  hideCardDeleteIcon: true,
  addCardLink: <button>New Card</button>,
};
CustomButtons.parameters = {
  info: 'Allow editable elements on the board to be customized',
};

export const NewCardTemplate = Template.bind({});
NewCardTemplate.args = {
  data: data,
  editable: true,
  newCardTemplate: <NewCard />,
  addCardTitle: 'Click to add',
};
NewCardTemplate.parameters = {
  info: 'Pass a custom new card template to add card',
};

export const AddNewLane = Template.bind({});
AddNewLane.args = {
  data: smallData,
  editable: true,
  canAddLanes: true,
};
AddNewLane.parameters = {
  info: 'Allow adding new lane',
};
