import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


export default class SelectAnimal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pets!</Text>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Corgi')}
          >
          <Text style={styles.bText}>Corgi</Text>
        </AwesomeButtonRick>
        {/* <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Butter')}>
          <Text style={styles.bText}>Corgi</Text>
        </TouchableOpacity> */}
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Cat')}
          >
          <Text style={styles.bText}>Cat</Text>
        </AwesomeButtonRick>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Robin')}
          >
          <Text style={styles.bText}>Robin</Text>
        </AwesomeButtonRick>
        <AwesomeButtonRick
          style={{ marginBottom: 10 }}
          width={200}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Fawn')}
          >
          <Text style={styles.bText}>Fawn</Text>
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
    textDecorationLine: 'underline',
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
