import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class StyleStuff extends Component {
  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>New style</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.v1}>
            <Text>View 1</Text>
          </View>
          <View style={styles.v2}>
            <Text>View 2</Text>
          </View>
          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: '#001f3f'
  },
  myText: {
    color: '#0074D9'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: '#2ECC40',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: '#FFDC00',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: '#7FDBFF',
    padding: 10
  }
});
