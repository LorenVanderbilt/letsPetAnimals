import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


export default class HowTo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hText}>Instructions:</Text>
        <Text style={styles.text}>
          Pet the animals.
        </Text>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.bText}>back</Text>
        </AwesomeButtonRick>
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
  },
  bText: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 25,
  },
});
