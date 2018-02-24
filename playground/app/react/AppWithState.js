import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


/**
 * react 4
 * 
 * React komponenti içinde state yönetimi
 */
class Counter extends Component {

  checked = "true";
  state = {

  }

  constructor(props) {
    super(props);
    // this.staerPoint = 
    this.state = {
      counter: props.start
    };
  }

  componentWillMount() {
      // Toggle the state every second
      setInterval(() => {
        this.setState(previousState => {
          let newCounter = previousState.counter + 1;
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