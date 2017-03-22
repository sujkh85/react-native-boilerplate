/* @flow */

import React from "react";
import { Provider, connect } from "react-redux";
import configureStore from "../redux/store/configureStore";
import { Router, Actions, Scene, ActionConst } from 'react-native-router-flux';
const ConnectedRouter = connect()(Router);
const store = configureStore();

import Scenes from '../router'

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

export default Root;
