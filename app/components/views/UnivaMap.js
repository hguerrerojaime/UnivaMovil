import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

export default class UnivaMap extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View>
        <View style={{ width: 250 }}>
            <Text>Ubicaciones</Text>
        </View>
      </View>
    );
  }

}
