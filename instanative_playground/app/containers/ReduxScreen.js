import React, { Component } from 'react'
import { View, Image, TextInput, ImageBackground, Text } from 'react-native'
import Button from 'react-native-button';

// redux
import { connect } from "react-redux";


class ReduxScreen extends Component {

    render() {
        return <View>
            <Text>global.value : {this.props.global.value}</Text>
        </View>
    }

}

function bindAction(dispatch) {
    return {

    };
}

const mapStateToProps = state => ({
    global : state.global
});

export default connect(mapStateToProps, bindAction)(ReduxScreen);
