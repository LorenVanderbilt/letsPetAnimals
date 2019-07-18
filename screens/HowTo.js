import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HowTo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hText}>Instructions:</Text>
        <Text style={styles.text}>
          Pet the animals.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 50,
  },
  hText: {
    textDecorationLine: 'underline',
    fontFamily: 'Futura-MediumItalic',
    fontSize: 50,
  }
});
