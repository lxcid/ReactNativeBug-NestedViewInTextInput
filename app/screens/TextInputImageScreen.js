import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { images } from '../assets';

export default class TextInputImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput>
          <Text style={styles.text}>
            There is a react logo{' '}
            <Image
              source={images.react}
              style={{ width: 30, height: 30, backgroundColor: 'pink' }}
            />{' '}
            in between my text.
          </Text>
        </TextInput>
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
