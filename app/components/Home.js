import React, { Component } from 'react';

import {
  View,
  Button,
  ToolbarAndroid,
  Text,
  TextInput,
  Switch,
  ToastAndroid,
  Image
} from 'react-native';

import update from 'immutability-helper';

import styles from '../core/styles';
import firebase from '../core/firebase';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl:"https://firebasestorage.googleapis.com/v0/b/api-univa.appspot.com/o/comunicacion.png?alt=media&token=5ff048ca-b710-427c-9f3e-2407fdb8a8f5"
    }
  }

  componentDidMount() {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let tangRef = storageRef.child('comunicacion.png');
    console.log(tangRef);
    tangRef.getDownloadURL().then((url) => {
       console.log(url);
       this.setState({ imageUrl: url });
    });
  }

  render() {



    return (
      <View>
        <View style={{ width: 250 }}>
            { this.renderImage() }
            <Text>Bienvenido</Text>
        </View>
      </View>
    );
  }

  renderImage() {
      if (this.state.imageUrl) {
        return <Image
            source={{ uri: this.state.imageUrl }}
            style={{
              height: 200,
              resizeMode: 'contain',
            }}
        />
      }

      return null;
  }

}
