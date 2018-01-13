import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * App4 veya App5'ten sonra workshop olarak bir header oluşturuyoruz ve
 * 
 */
export default class AppWithHeader extends Component {

    render() {
        return <View style={{flex : 1, backgroundColor : "black"}}>
            <View style={{height: 50, backgroundColor : "gray", flexDirection : "row"}}>
                <View style={{alignSelf : "flex-start", width: 50, height: 50, backgroundColor : "red" }}>
                </View>
                <View style={{flex: 1, backgroundColor : "yellow"}}>
                </View>
                <View style={{alignSelf : "flex-end", width: 50, height: 50, backgroundColor : "red" }}>
                </View>
            </View>
            <View style={{flex: 1}}>

            </View>
        </View>   
    }   
}
