import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Component',
      showName: true
    }
  }
  render() {
    console.log('Hello');
    let name = this.state.showName ? this.state.name : 'None';
    return (
      <View>
        <Text>{this.props.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}