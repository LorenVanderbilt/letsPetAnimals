import React, { Component } from 'react';
import { Image, StyleSheet, Text, ImageBackground } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Sound from 'react-native-sound';

const animalSound = require('../assets/fawn.mp3');
const animalPic = require('../assets/fawn.jpg');

export default class Fawn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSwipeUp() {
    const s = new Sound(animalSound, e => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      }
      s.play(() => s.release());
    });
  }

  onSwipeDown() {
    const s = new Sound(animalSound, e => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      }
      s.play(() => s.release());
    });
  }

  render() {
    const config = {
      velocityThreshold: 0,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <ImageBackground style={styles.photo} source={animalPic}>
          <AwesomeButtonRick
            style={{ marginTop: 700, marginLeft: 100 }}
            width={200}
            type="secondary"
            onPress={() => this.props.navigation.navigate('SelectAnimal')}
          >
            <Text style={styles.bText}>back</Text>
          </AwesomeButtonRick>
        </ImageBackground>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  bText: {
    fontFamily: 'Futura-MediumItalic',
    fontSize: 25,
  },
});
