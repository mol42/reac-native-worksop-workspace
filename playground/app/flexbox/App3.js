import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 *  justifyContent ana axis içinde pozisyonlamaları kontrol etmek içindir, eğer
 *  flexDirection row ise X ekseninde yerleşimleri ayarlar.
 *  Eğer flexDirection column ise justifyContent Y ekseninde yerleşimleri ayarlar.
 * 
 *  alignItems ise justifyContent X ise Y ekseninde Y ise X ekseninde etki yapar.
 *
 *  justifyContent : flex-start, center, flex-end, space-around, veya space-between 
 *  değerlerinden birini alabilir. space-around ve space-between kafa karıştırıcı olabilir
 *  aralarındaki fark şudur, space-around ile her view'ın *etrafında* eşit uzunlukta boşluk
 *  bırakılır. space-between ile view'lar arasında eşit uzunlukta boşluk bırakılır.
 * 
 *  alignItems için şu propertyler kullanılabilir : 'flex-start' || 'flex-end' || 'center' || 'stretch'
 *  burada justifyContent ile tek farklı olan stretch'tir ve aktif axis içinde baştan sona kaplamayı
 *  sağlar.
 */
export default class App3 extends Component {

    render() {
        return this.render_column_justifyCenter_alignFlexStart();
    }

    render_column_justifySpaceBetween() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }

    render_column_justifyCenter() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
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
              justifyContent: 'space-between',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }    

    render_row_justifyCenter() {
        return (
            <View style={{
              flex: 1,
              borderWidth : 2,
              borderColor : "red",
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }   
    
    render_column_justifyCenter_alignCenter() {
        return (
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }

    render_column_justifyCenter_alignFlexStart() {
        return (
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
          );
    }    
}
