import React from  'react';
import { View, Text } from 'react-native';

constHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Digital Token App</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  headerContainer: {
    display: 'flex',
    marginTOp: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});


export default Header;