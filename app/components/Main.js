import React, { Component } from 'react';

import {
  View,
  Text,
  ToastAndroid,
  BackAndroid
} from 'react-native';

import update from 'immutability-helper';

import styles from '../core/styles';
import firebase from '../core/firebase';
import resolver from '../core/di';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Container from './Container';



export default class Main extends Component {

  constructor(props) {
    super(props);

    this.userService = resolver.get('userService');

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.container) {
        let navigator = this.container.getNavigator();

        if (navigator.getCurrentRoutes().length === 1  ) {
           return false;
        }
        navigator.pop();
        return true;
      }

    });

  }

  render() {



    return (
      <View style={{ flex: 1 }}>
        <Header onActionSelected={this.onActionSelected.bind(this)} />
        <Container ref={(c) => this.container = c} />
      </View>
    );
  }

  onActionSelected(action) {

      let navigator = this.container.getNavigator();

      if (action.id != 'Logout') {

        let currentRoutes = navigator.getCurrentRoutes();
        let existingAction = currentRoutes.find((a) => a.id == action.id);

         if (existingAction) {
            navigator.jumpTo(action);
         } else {
            navigator.push(action);
         }

      } else {
         this.doLogout();
      }

  }

  doLogout() {
    this.userService.logout();
    ToastAndroid.show('Logged Out', ToastAndroid.SHORT);
    this.props.onLogout();
  }



}
