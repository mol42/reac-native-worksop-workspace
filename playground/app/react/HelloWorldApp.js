import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

/**
 * react 1
 * 
 * Basit bir react komponent.
 */
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{paddingTop : 20}}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}