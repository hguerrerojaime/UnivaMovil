import React, { Component } from 'react';

import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native'

import styles from '../core/styles';


export default class Header extends Component {
  render() {
    return (
      <ToolbarAndroid style={styles.toolbar}
        logo={require('../assets/img/univalogo.png')}
        title="Sistema de Control"
        titleColor={'#000000'}
      />
    );
  }
}
