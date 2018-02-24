import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';

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
        console.log("CoolText componentWillMount");
    }

    componentDidMount() {
        console.log("CoolText componentDidMount");
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
        console.log("CoolText componentWillReceiveProps this.props ->", this.props, " nextProps ->", nextProps);
        this.state.counter = nextProps.counter;
    }

    render() {
      console.log("CoolText render");
        let {counter} = this.props;
        return (
          <Text>{counter}</Text>
        );
    }
}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: props.start, showHide : true, pressed : false};
  }

  componentWillMount() {
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        let newCounter = previousState.counter + 1;
        let showHide = newCounter - this.props.start > 10 ? false : true;
        return { counter: newCounter, showHide };
      });
    }, 1000);
  }

  render() {
    let {counter, showHide} = this.state;
    /*
    if (!showHide) {
        return <Text>CoolText is gone</Text>;
    }
    */
    return (
      <TouchableOpacity onPress={() => console.log("test")}>
        <CoolText counter={counter}></CoolText>
      </TouchableOpacity>
    );
  }
}

export default class AppLifeCycle extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent : "center", alignItems : "center"}}>
        <Counter start={1000} />
      </View>
    );
  }
}