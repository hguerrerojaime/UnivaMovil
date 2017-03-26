import React, { Component } from 'react';

import {
  View,
  Button,
  ToolbarAndroid,
  Text,
  TextInput,
  Switch,
  ToastAndroid,
  Keyboard
} from 'react-native';

import update from 'immutability-helper';

import styles from '../core/styles';
import resolver from '../core/di';
import Footer from '../layout/Footer';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.userService = resolver.get('userService');

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

      <View style={styles.layout}>

        <View style={styles.container}>
          <View style={{ width: 250 }}>
            <TextInput
              placeholder="Matrícula"
              keyboardType="numeric"
              value={this.state.form.u}
              onChangeText={(text) => this.updateForm("u",text)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.form.p}
              onChangeText={(text) => this.updateForm("p",text)}
            />
            <Button title="Login" onPress={this.onLogin.bind(this)} />
          </View>
        </View>
        <Footer />
      </View>
    );
  }

  updateForm(field,value) {
    this.setState({
      form: update(this.state.form, { [field]: {$set: value} } )
    })
  }

  onLogin() {

    this.props.beforeLogin();

    this.userService.auth(this.state.form.u,this.state.form.p).then((user) => {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT);
        Keyboard.dismiss();

        this.props.onLogin(true);
    }).catch((error) => {
        ToastAndroid.show('Login Error', ToastAndroid.SHORT);
        this.props.onLogin(false);
    });

  }
}
