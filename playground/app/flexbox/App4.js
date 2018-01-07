import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 *  alignSelf : ana axis'in tersi yönde sadece stilin uygulandığı komponenti 
 *  konumlandırmak için kullanılır. 
 *  
 *  Ana axis Y ise X ekseninde konumlama yapılır. Ana axis X ise Y ekseninde konumlama
 *  yapılır.
 * 
 *  Genellikle genele uyguladığımız justifyContent ve alignItems stil ayarlarına 1-2
 *  komponenti dışarıda tutmak için kullanılır.
 * 
 *  alabileceği değerler şunlardır : 
 *  'flex-start' || 'flex-end' || 'center' || 'stretch' || 'auto'
 *  
 */
export default class App4 extends Component {

    render() {
        return this.render_row_justifySpaceBetween();
    }

    render_column_justifySpaceBetween() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <View style={{width: 100, height: 100, alignSelf : "auto", backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }
   
    render_row_justifySpaceBetween() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <View style={{width: 100, height: 100, alignSelf : "center", backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }


    
}
