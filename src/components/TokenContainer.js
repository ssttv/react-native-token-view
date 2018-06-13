import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView } from "react-native";
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

    if(token.isFetching) {
      return(
        <View>
          <Spinner
            visible={token.isFetching}
            textContent={"Loading"}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>
      )
    }

    return <ScrollView contentContainerStyle={contentContainer}>{this.renderTokenCards()}</ScrollView>;
  }
}

const styles= {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps)(TokenContainer);
