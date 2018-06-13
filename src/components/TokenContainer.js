import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import FetchTokenData from "./../Actions/FetchTokenData";
import Spinner from "react-bative-loading-spinner-overlay";

class TokenContainer extends Component {
  componentDidMount() {
    this.props.FetchTokenData();
  }

  renderTokenCards() {
    const { token } = this.props;
    console.log(token);
    return token.data.map((token, index) => (
      <TokenCard
        key={index}
        token_name={token.name}
        symbol={token.symbol}
        percent_change_24h={token.percent_change_24h}
        percent_change_7d={token.percent_change_7d}
      />
    ));
  }

  render() {
    const { token } = this.props;

    return <View>{this.renderTokenCards()}</View>;
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps)(TokenContainer);
