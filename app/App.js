import React, { Component } from 'react';
import styles from './core/styles';

import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native'

import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './components/Login';

export default class App extends Component {

  render() {
    return (
      <View style={styles.layout}>
        <Login />
        <Footer />
      </View>
    );
  }

}
