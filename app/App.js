import React, { Component } from 'react';
import styles from './core/styles';
import routes from './core/navigation';

import {
  View,
  Text,
  ToolbarAndroid,
  Navigator
} from 'react-native'


import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './components/Login';
import Main from './components/Main';

export default class App extends Component {

  render() {
    return (
        <Navigator initialRoute={{ id:'Main' }}
          renderScene={this.renderScene.bind(this)}
         />
    );
  }

   renderScene(route, navigator) {
      if (route.id === 'Login') {
        return <Login navigator={navigator} />;
      } else if (route.id === 'Main') {
        return <Main navigator={navigator} />
      }
   }

}
