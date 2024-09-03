import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import boardReducer from '../reducers/BoardReducer';
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyle } from '../styles/Base';

const middlewares = [];

export default class Board extends Component {
  constructor() {
    super();
    this.store = this.getStore();
    this.id = uuidv4();
  }

  getStore = () => {
    //When you create multiple boards, unique stores are created for isolation
    return createStore(boardReducer, applyMiddleware(...middlewares));
  };

  render() {
    return (
      <Provider store={this.store}>
        <>
          <GlobalStyle />
          <BoardContainer className="react-trello-board" {...this.props} id={this.id} />
        </>
      </Provider>
    );
  }
}
