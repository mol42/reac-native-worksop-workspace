import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import TestComponent from "./TestComponent";

/**
 * react 3
 * 
 * React ile custom komponent oluşturma
 */
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class FirstComponent extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop : 20}}>
        <Greeting name='Test 1' />
        <Greeting name='Test 2' />
        <TestComponent name='Test 3' />
      </View>
    );
  }
}