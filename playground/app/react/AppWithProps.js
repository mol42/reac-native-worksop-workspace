import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

/**
 * react 2
 * 
 * Property kabul eden basit bir react komponent
 */
export default class AppWithProps extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <Image source={pic} style={{ width : 100, height : 100, resizeMode : "contain" }}/>
      </View>
    );
  }
}