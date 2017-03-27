import React, { Component } from 'react';

import {
  Navigator,
  Text,
  View
} from 'react-native';

import styles from '../core/styles';
import appActions from '../core/actions';

export default class Container extends Component {

  render() {

    return (
      <Navigator initialRoute={appActions[0]}
        renderScene={this.renderScene.bind(this)}
        ref={(navigator) => this.navigator = navigator}
       />
    );
  }

  renderScene(route, navigator) {
     return route.component;
  }

  getNavigator() {
    return this.navigator;
  }

}
