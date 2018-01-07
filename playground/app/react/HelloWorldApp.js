import React, { Component } from 'react';
import { AppRegistry, Text, View, Platform, PlatformIOS } from 'react-native';

/**
 * react 1
 * 
 * Basit bir react komponent.
 */
export default class HelloWorldApp extends Component {
  
  render() {
    return (
      <View style={{paddingTop : Platform.OS == "ios" ? 20 : 0}}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}