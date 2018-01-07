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
    return this.render_Flex_Row();
  }

  render_Flex_Column() {
    let styles = stylesForColumn;
    return (
      <View style={styles.container}>
        <View style={styles.box2}>

        </View>
        <View style={styles.box3}>

        </View>  
        <View style={styles.box1}>

        </View>      
      </View>
    );
  }

  render_Flex_Row() {
    let styles = stylesForRow;
    return (
      <View style={styles.container}>
        <View style={styles.box2}>

        </View>
        <View style={styles.box3}>

        </View>        
      </View>
    );
  }
}

const stylesForColumn = {
  container: {
    flex: 1,
    //width : "100%",
    //height: "100%",
    //flex: 1,
    borderWidth: 5,
    borderColor : "purple",
    flexDirection : "column" // bu varsayılan direction'dur.
  },
  box2 : {
    flex: 2,
    backgroundColor : "red"
  },
  box3 : {
    flex: 3,
    backgroundColor : "black"
  },
  box1 : {
    flex: 1,
    backgroundColor : "yellow"
  }
};

const stylesForRow = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "row"
  },
  box2 : {
    flex: 2,
    flexDirection : "row",
    backgroundColor : "red"
  },
  box3 : {
    flex: 3,
    backgroundColor : "black"
  }
});
