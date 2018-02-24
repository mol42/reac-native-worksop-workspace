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
    console.log("Greeting render ->", this.props);
    let {name} = this.props.data;
    let {useName} = this.props;
    return (
      useName ? <Text>Hello {name}!</Text> : <Text>Hello!</Text>
    );
  }
}

const style = {alignItems: 'center', marginTop : 20}

export default class FirstComponent extends Component {
  render() {
    let data = {
      name : "Tayfun"
    }
    return (
      <View style={style}>
        <Greeting name={'Test 3'} data={data} useName={false}/>
        <Greeting name='Test 2' data={data} useName={true}/>
        <TestComponent name='Test 3' />
      </View>
    );
  }
}