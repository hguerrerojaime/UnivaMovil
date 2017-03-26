/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './app/App';
import resolver from './app/core/di';

export default class UnivaMovil extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('UnivaMovil', () => UnivaMovil);
