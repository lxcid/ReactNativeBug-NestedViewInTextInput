import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { images } from '../assets';

export default class TextViewScreen extends Component {
  static navigationOptions = {
    title: 'Text + View',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          There is a blue square{' '}
          <View
            style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}
          />{' '}
          in between my text.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
  },
});
