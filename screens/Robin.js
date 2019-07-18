import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Sound from 'react-native-sound';

const animalSound = require('../assets/robin_chirp2.mp3');
const animalPic = require('../assets/robin2.jpg');

export default class Robin extends Component {
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
        <Image style={styles.photo} source={animalPic} />
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
});
