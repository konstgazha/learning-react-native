import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class StyleStuff extends Component {
  onPress() {
    console.log('Area pressed');
  }

  onPress2() {
    console.log('Area 2 pressed');
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>New style</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight 
            style={styles.v1} 
            onPress={this.onPress}
            underlayColor="#001f3f">
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity 
            style={styles.v2}
            onPress={this.onPress2}>
            <View >
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
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
