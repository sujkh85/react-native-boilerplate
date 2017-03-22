import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {changeText} from '../redux/nativeRouter/action'

class Page1 extends Component {
    render(){
        return(
            <View>
                <Text style={{height:200}}>Home!!!</Text>
                    <TouchableHighlight
                        onPress={() => { Actions.page2(); }}>
                        <Text>go Page2</Text>
                    </TouchableHighlight>

                    <Text>{this.props.text}</Text>

                    <TouchableHighlight
                        onPress={() => {
                             this.props.changeText('changed !!') }}>
                        <Text>please Click</Text>
                    </TouchableHighlight>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.nativeRouter.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeText:changeText
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
