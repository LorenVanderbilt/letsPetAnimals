import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Let's Pet Animals!</Text>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Pets')}
        >
          <Text style={styles.bText}>Select a Pet</Text>
        </AwesomeButtonRick>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('HowTo')}
        >
          <Text style={styles.bText}>Instructions</Text>
        </AwesomeButtonRick>
        {/* <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('HowTo')}>
          <Text style={styles.bText}>Instructions</Text>
        </TouchableOpacity> */}
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
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    width: 200,
    marginTop: 20,
  },
  bText: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 25,
  },
});
