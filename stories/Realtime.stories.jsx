import React, { Component } from 'react';
import update from 'immutability-helper';
import Board from '../src';
import data from './data/base.json';

class RealtimeBoard extends Component {
  state = { boardData: data, eventBus: undefined };

  setEventBus = (handle) => {
    this.setState({ eventBus: handle });
  };

  completeMilkEvent = () => {
    this.state.eventBus.publish({
      type: 'REMOVE_CARD',
      laneId: 'PLANNED',
      cardId: 'Milk',
    });
    this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'COMPLETED',
      card: {
        id: 'Milk',
        title: 'Buy Milk',
        label: '15 mins',
        description: 'Use Headspace app',
      },
    });
  };

  addBlockedEvent = () => {
    this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'BLOCKED',
      card: {
        id: 'Ec2Error',
        title: 'EC2 Instance Down',
        label: '30 mins',
        description: 'Main EC2 instance down',
      },
    });
  };

  modifyLaneTitle = () => {
    const { boardData } = this.state;
    const newData = update(boardData, {
      lanes: { 1: { title: { $set: 'New Lane Title' } } },
    });
    this.setState({ boardData: newData });
  };

  modifyCardTitle = () => {
    const { boardData } = this.state;
    const newData = update(boardData, {
      lanes: { 1: { cards: { 0: { title: { $set: 'New Card Title' } } } } },
    });
    this.setState({ boardData: newData });
  };

  prioritizeWriteBlog = () => {
    this.state.eventBus.publish({
      type: 'MOVE_CARD',
      fromLaneId: 'PLANNED',
      toLaneId: 'WIP',
      cardId: 'Plan3',
      index: 0,
    });
  };

  shouldReceiveNewData = (nextData) => {
    console.log('data has changed');
    console.log(nextData);
  };

  render() {
    return (
      <div>
        <button onClick={this.completeMilkEvent} style={{ margin: 5 }}>
          Complete Buy Milk
        </button>
        <button onClick={this.addBlockedEvent} style={{ margin: 5 }}>
          Add Blocked
        </button>
        <button onClick={this.modifyLaneTitle} style={{ margin: 5 }}>
          Modify Lane Title
        </button>
        <button onClick={this.modifyCardTitle} style={{ margin: 5 }}>
          Modify Card Title
        </button>
        <button onClick={this.prioritizeWriteBlog} style={{ margin: 5 }}>
          Prioritize Write Blog
        </button>
        <Board data={this.state.boardData} onDataChange={this.shouldReceiveNewData} eventBusHandle={this.setEventBus} />
      </div>
    );
  }
}

export default {
  title: 'Advanced Features/Realtime Events',
  component: RealtimeBoard,
  parameters: {
    info: 'This is an illustration of external events that modify the cards in the board',
  },
};

const Template = (args) => <RealtimeBoard {...args} />;

export const RealtimeEvents = Template.bind({});
