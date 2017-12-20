import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class AppWithProps extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{flex: 1, flexDirection : "column", height : null, resizeMode : "contain" }}/>
    );
  }
}