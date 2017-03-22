import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Page2 extends Component {
    render(){
        return(
            <View>
                <Text style={{height:200}}>de!!!</Text>
                <Text>Page2!!!</Text>
                    <TouchableHighlight
                        onPress={() => { Actions.page1(); }}>
                        <Text>go home!</Text>
                    </TouchableHighlight>
            </View>
        )
    }
}
