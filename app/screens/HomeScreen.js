import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { images } from '../assets';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('TextImage')}
            title="Text + Image"
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('TextView')}
            title="Text + View"
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('TextInputImage')}
            title="TextInput + Image"
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('TextInputView')}
            title="TextInput + View"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    paddingVertical: 5,
  },
});
