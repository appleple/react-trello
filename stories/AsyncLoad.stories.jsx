import React, { Component } from 'react';
import Board from '../src';
import data from './data/base.json';

class AsyncBoard extends Component {
  state = { boardData: { lanes: [] } };

  async componentDidMount() {
    const response = await this.getBoard();
    this.setState({ boardData: response });
  }

  getBoard() {
    return new Promise((resolve) => {
      resolve(data);
    });
  }

  render() {
    return <Board data={this.state.boardData} />;
  }
}

export default {
  title: 'Advanced Features/Async Load data',
  component: AsyncBoard,
  parameters: {
    info: 'Load board data asynchronously after the component has mounted',
  },
};

const Template = (args) => <AsyncBoard {...args} />;

export const AsyncLoadData = Template.bind({});
