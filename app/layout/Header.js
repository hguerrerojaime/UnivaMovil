import React, { Component } from 'react';

import {
  View,
  Text,
  ToolbarAndroid
} from 'react-native'

import styles from '../core/styles';
import appActions from '../core/actions';

export default class Header extends Component {

  constructor(props) {
    super(props);



    this.state = {
        currentAction:'Home',
        actions: appActions.filter((a) => a.id != 'Home')
    };

  }

  render() {
    return (
      <ToolbarAndroid style={styles.toolbar}
        logo={require('../assets/img/univalogo.png')}
        title="Sistema de Control"
        titleColor={'#000000'}
        actions={this.state.actions}
        onActionSelected={this.onActionSelected.bind(this)}
      />
    );
  }

  onActionSelected(position) {
    let action = this.state.actions[position];

    this.setState({
      currentAction: action.id,
      actions: appActions.filter((a) => a.id != action.id)
    });

    this.props.onActionSelected(action);
  }


}
