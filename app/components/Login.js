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
import firebase from '../core/firebase';
import Footer from '../layout/Footer';

import CookieManager from 'react-native-cookies';

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

    firebase.auth().signInWithEmailAndPassword(`${this.state.form.u}@univa.mx`, this.state.form.p)
    .then((user) => {
        ToastAndroid.show('Login Success', ToastAndroid.SHORT);
        // this will replace myself with the other component (no going back)
        Keyboard.dismiss();
        this.props.navigator.push({id: "Main"});
    })
    .catch((error) => {
        console.log(error);
        ToastAndroid.show('Login Error', ToastAndroid.SHORT);
    });

  }
}
