import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: props.start};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        let newCounter = previousState.counter + 1;
        console.log("newCounter ->", newCounter);
        return { counter: newCounter };
      });
    }, 1000);
  }

  render() {
    let counter = this.state.counter;
    return (
      <Text>{counter}</Text>
    );
  }
}

export default class AppWithState extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent : "center", alignItems : "center"}}>
        <Counter start={1000} />
      </View>
    );
  }
}