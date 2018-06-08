import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './src/components/';
import Store from './src/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={ Store }>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}

/*const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
