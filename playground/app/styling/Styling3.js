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
export default class Styling3 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, {paddingTop : Platform.OS == "ios" ? 20 : 0}]}>
            <View style={{flex: 1, backgroundColor : "black"}}></View>
        </View> 
        <View style={styles.body}>
            <View style={styles.buttonSample}><Text>BUTON</Text></View>
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
      zIndex : 2,
      backgroundColor : "red"
  },
  body : {
      flex: 1,
      borderWidth : 2,
      paddingTop : 50,
      borderColor : "green",
      backgroundColor : "gray",
      alignItems : "center"
  },
  buttonSample : {
        width: 200,
        borderWidth : 2,
        borderRadius : 10,
        marginTop : 30,
        paddingTop : 30,
        borderColor : "red",
        backgroundColor : "green"
  }
});
