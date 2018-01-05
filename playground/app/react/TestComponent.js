import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

/**
 * react 3
 * 
 * React ile custom komponent oluşturma
 */
export default class TestComponent extends Component {
    render() {
      return (
        <Text>Greeting {this.props.name}!</Text>
      );
    }
}