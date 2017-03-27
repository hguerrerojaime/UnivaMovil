import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import ImageGallery from 'react-native-gallery';

export default class Gallery extends Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (
      <ImageGallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={[
          'https://firebasestorage.googleapis.com/v0/b/api-univa.appspot.com/o/ImagenesUniva%2FCuatro.jpeg?alt=media&token=da491964-c43e-489f-a93d-fae74d632419',
          'https://firebasestorage.googleapis.com/v0/b/api-univa.appspot.com/o/ImagenesUniva%2FWhatsApp%20Image%202017-03-18%20at%201.01.33%20PM.jpeg?alt=media&token=ea7547b0-0715-48f5-b2e0-91a1fa0ea457',
          'https://firebasestorage.googleapis.com/v0/b/api-univa.appspot.com/o/ImagenesUniva%2FWhatsApp%20Image%202017-03-18%20at%201.01.34%20PM.jpeg?alt=media&token=a027a90a-1ce5-4253-a14f-ebce87465af7',
          'https://firebasestorage.googleapis.com/v0/b/api-univa.appspot.com/o/ImagenesUniva%2FWhatsApp%20Image%202017-03-18%20at%201.01.36%20PM.jpeg?alt=media&token=4a071f1b-445c-4c05-adcd-6377abd77de3'
        ]}
      />
    );
  }

}
