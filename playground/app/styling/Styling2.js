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
export default class Styling2 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop : Platform.OS == "ios" ? 20 : 0}]}>
            <View style={{flex: 1, backgroundColor : "blue"}}></View>
        </View> 
        <View style={styles.body}>
            <Text>aaaa</Text>
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
      // flex: 1, absolute iken flex dikkate alınmıyor
      width: "100%",
      position : "absolute",
      height : 50,
      marginTop : 20,
      zIndex : 2,
      backgroundColor : "red"
  },
  body : {
      flex: 1,
      borderWidth : 2,
      paddingTop : 40,
      borderColor : "green",
      backgroundColor : "yellow"
  }
});
