import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * CSS box model ile ilgili padding, bottom, ayarlamaları yapılabiliyor.
 */
export default class Styling4 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.buttonSample}>
              <Text style={styles.text}>HELLO HERE</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  body : {
    flex: 1,
    backgroundColor : "blue",
    justifyContent : "center",
    alignItems : "center"
  },
  buttonSample : {
    width: 200,
    height: 100,
    borderWidth: 2,
    backgroundColor : "white",
    borderColor : "red",
    paddingTop : 20,
    paddingBottom : 20,
    paddingLeft: 20,
    paddingRight : 10,
    marginTop : 10,
    borderRadius : 5
  },
  text : {
    color : "orange",
    fontSize: 18,
    fontWeight : "bold",
    backgroundColor : "blue"
  }
};
