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
export default class Styling4 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.buttonSample}></View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
