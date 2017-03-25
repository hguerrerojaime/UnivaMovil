import React, { Component } from 'react';

import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native'

import styles from '../core/styles';


export default class Header extends Component {

  constructor(props) {
    super(props);

    this.actions = [
          { id:'MyData',title:'Mis Datos' },
          { id:'Gallery',title:'Galeria' },
          { id:'Map',title:'Mapa' }
    ];

  }

  render() {
    return (
      <ToolbarAndroid style={styles.toolbar}
        logo={require('../assets/img/univalogo.png')}
        title="Sistema de Control"
        titleColor={'#000000'}
        actions={this.actions}
        onActionSelected={this.onActionSelected.bind(this)}
      />
    );
  }

  onActionSelected(position) {
    let action = this.actions[position];
    this.props.onActionSelected(action);
  }


}
