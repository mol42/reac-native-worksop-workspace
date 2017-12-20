import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


/**
 * react 5
 * 
 * React komponenti içinde state yönetimi
 */
class CoolText extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: props.counter};
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    /**
     * Komponent re-render olmalı mı olmamalı mı
     */
    shouldComponentUpdate(nextProps) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        this.state.counter = nextProps.counter;
    }

    render() {
        let {counter} = this.props;
        return (
          <Text>{counter}</Text>
        );
    }
}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: props.start, showHide : true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        let newCounter = previousState.counter + 1;
        let showHide = newCounter - this.props.start > 5 ? false : true;
        return { counter: newCounter, showHide };
      });
    }, 1000);
  }

  render() {
    let {counter, showHide} = this.state;
    if (!showHide) {
        return <Text>CoolText is gone</Text>;
    }
    return (
      <CoolText counter={counter}></CoolText>
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