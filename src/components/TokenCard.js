import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({

})

const { container, image, bold } = styles;

const TokenCard = ({ symbol, token_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return(
    <View style={container}>
      <Image
        style={styles.image}
        source=({ url: images[symbol] })
      />
      <Text>{symbol}</Text>
      <Text>{token_name}</Text>
      <Text>{price_usd} <Text style={bold}>$</Text></Text>
      <Text>Change past 24 hours: {percent_change_24h}</Text>
      <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
  );
}

export default TokenCard;
