import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class TokenContainer extends Component {
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(TokenContainer)
