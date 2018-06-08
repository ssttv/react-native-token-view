import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchTokenData from './../Actions/FetchTokenData'

class TokenContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }
  
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
