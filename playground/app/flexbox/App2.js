import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App2 extends Component {

  render() {
    return this.render_Flex_Column();
  }

  render_Flex_Row() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }

  render_Flex_Column() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }

}
