import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default class SelectAnimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ['corgi', 'cat', 'robin', 'fawn'],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pets!</Text>
        {this.renderButtons()}
      </View>
    );
  }

  renderButtons() {
    return this.state.animals.map(animal => {
      // console.log('this is the animal', animal);
      return (
        <View
          key={animal}
          // style={styles.}
        >
          <AwesomeButtonRick
            style={{ marginBottom: 10 }}
            width={200}
            type="secondary"
            onPress={() =>
              this.props.navigation.navigate('Animal', { name: animal })
            }
          >
            <Text style={styles.bText}>{animal}</Text>
          </AwesomeButtonRick>
        </View>
      );
    });
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
