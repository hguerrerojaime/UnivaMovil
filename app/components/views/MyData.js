import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

export default class MyData extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View>
        <View style={{ width: 250 }}>
            <Text>Mis Datos</Text>
        </View>
      </View>
    );
  }

}
