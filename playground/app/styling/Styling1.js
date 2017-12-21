import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * React Native aynı React gibi stil nesnesi veya inline stiller kullanabiliyor.
 * Ayrıca stiller kombine edilebiliyor.
 */
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop : Platform.OS == "ios" ? 20 : 0}]}>
            <View style={{flex: 1, backgroundColor : "blue"}}></View>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header : {
      height : 50,
      backgroundColor : "red"
  }
});
