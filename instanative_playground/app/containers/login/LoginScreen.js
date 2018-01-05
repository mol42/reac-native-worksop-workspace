import React, { Component } from 'react'
import { View, Image, TextInput, ImageBackground, Text } from 'react-native'
import Button from 'react-native-button'; 

// redux
import { connect } from "react-redux";
import { updateValue } from '../../redux/globalActions';


class LoginScreen extends Component {

    render() {
        return <View style={{paddingTop : 20}}>
            <Text>global.value : {this.props.common.value}</Text>
            <Text>global.value : {this.props.common.value}</Text>
            <Button onPress={this._handleClick}>CLICK</Button>
        </View>
    }

    _handleClick = () => {
      this.props.updateValue();
    }
}

function bindAction(dispatch) {
    return {
      updateValue : () => dispatch(updateValue()) //{type : "UPDATE_VALUE_ACTION"}
    };
}

const mapStateToProps = state => ({
    common : state.global
});

export default connect(mapStateToProps, bindAction)(LoginScreen);
