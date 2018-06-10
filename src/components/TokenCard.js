import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const TokenCard = (props) => {
  return(
    <View>
      <Text>{props.symbol}</Text>
      <Text>{props.price_usd}</Text>
      <Text>{props.percent_change_24h}</Text>
    </View> 
  )
}

export default TokenCard;
