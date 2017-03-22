import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import {Text, ScrollView} from 'react-native';


class MainAppContainer extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>hello!!</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
    return {
        test: state.test
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAppContainer);
