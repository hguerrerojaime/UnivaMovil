import React from 'react';

import {
  Image
} from 'react-native';


export default class ImageService {

    renderImage(url,style = {}) {
      if (url) {
        return <Image
            source={{ uri: url }}
            style={style}
        />
      }

      return null;
    }

}
