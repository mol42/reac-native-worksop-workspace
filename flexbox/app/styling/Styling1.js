/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * React Native ile flexbox varsayılan direction olarak column 
 * kullanmaktadır. Diğer opsiyon row'dur.
 * 
 * column ile view'lar yukarıdan aşağıya doğru sıra ile yerleştirilirken
 * row ile soldan sağa doğru yerleştirilmektedir.
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
