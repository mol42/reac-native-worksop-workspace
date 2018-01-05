import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * flexWrap eğer ana eksende komponenti yerleştirmek için yeterli yer kalmaz ise
 * nasıl hareket edilmesi gerektiğini belirleyen opsiyondur.
 * 
 * wrap ve nowrap değerlerini alır, wrap ile yeterli boşluk kalmaz ise ana eksende
 * bir alt göze geçilir. nowrap varsayılan dizilim ayarıdır ve komponentlerin dizilimi
 * ile ilgili bir oynama yapmaz ve komponentlerin ekranın dışına taşmasına izin verir.
 *  
 */
export default class App5 extends Component {

    render() {
        return this.render_withNoWrap();
    }

    render_withWrap() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'row',
              flexWrap : "wrap"
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </View>
          );
    }

    render_withNoWrap() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'row',
              flexWrap : "nowrap"
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </View>
          );
    }    
}
