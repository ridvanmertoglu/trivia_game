import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    headerShown: false,
  };
  render() {
    return (
      <View>
        <Text> main </Text>
      </View>
    );
  }
}
