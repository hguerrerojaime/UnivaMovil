import React, { Component } from 'react';

import {
  View,
  Button,
  ToolbarAndroid,
  Text,
  TextInput,
  Switch
} from 'react-native'

import styles from '../core/styles';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
         u:"",
         p:"",
         rm:false
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput style={ { width: 200, padding: 10 } }
            placeholder="Matrícula"
            onChangeText={(text) => this.setState({form: {u: text} })}
            value={this.state.form.u}
          />
          <TextInput style={ { width: 200, padding: 10 } }
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({form: {p: text} })}
            value={this.state.form.p}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch', padding:10 }}>
            <Text>Recuerdame...</Text>
            <Switch value={this.state.form.rm}
                    onValueChange={(value) => this.setState({form: {rm: value} })}
            />
          </View>
          <Button style={ { padding: 10 } } title="Login" onPress={} />
      </View>
    );
  }
}
