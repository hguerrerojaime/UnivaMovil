import React, { Component } from 'react';



import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native'

import styles from '../core/styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.instructions}>
            uni-simovil ver alpha-0.0.1 { "\n" }
            Derechos Reservados UNIVA LEON
        </Text>
      </View>
    );
  }
}
