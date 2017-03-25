import React, { Component } from 'react';

import {
  View,
  Button,
  ToolbarAndroid,
  Text,
  TextInput,
  Switch,
  ToastAndroid,
  Navigator,
  Image
} from 'react-native';

import update from 'immutability-helper';

import styles from '../core/styles';
import firebase from '../core/firebase';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import Home from './Home';

export default class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    // <Navigator initialRoute={{ id:'Home' }}
    //   renderScene={this.renderScene.bind(this)}
    //  />

    return (
      <View>
        <Header onActionSelected={this.onActionSelected.bind(this)} />
        <Navigator initialRoute={{ id:'Home' }}
          ref={(navigator) => this.navigator = navigator}
          renderScene={this.renderScene.bind(this)}
         />
      </View>
    );
  }

  onActionSelected(action) {
    this.navigator.push(action);
  }

  renderScene(route, navigator) {
     console.log("LOADING ROUTE "+route.id);
     if (route.id === 'Home') {
       return <Home navigator={navigator} />;
     }

     return null;
  }

}
