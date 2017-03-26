import React, { Component } from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

import styles from '../core/styles';

export default class Loader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            style={{height: 80}}
            size="large"
          />
        </View>
      </View>
    );
  }

}
