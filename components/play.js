import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient, Audio } from 'expo';

export default class Play extends React.Component {

  playC = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/CChord.mp3'));
    await sound.playAsync();
  };

  playDm = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/DmChord.mp3'));
    await sound.playAsync();
  };

  playEm = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/EmChord.mp3'));
    await sound.playAsync();
  };

  playF = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/FChord.mp3'));
    await sound.playAsync();
  };

  playG = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/GChord.mp3'));
    await sound.playAsync();
  };

  playAm = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../audio/AmChord.mp3'));
    await sound.playAsync();
  };

  static navigationOptions = {
    tabBarLabel: 'Play',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/piano.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: tintColor, opacity: 0.9}}>
      </Image>
    )
  };
  render(){
    return (
      <View>
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#00E7EE', '#579BE6']} style={styles.linearGradient}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image source={require('../img/play-button.png')} style={{width: 38, height: 38, marginTop: 25, opacity: 0.9}}></Image>
            <Text style={{textAlign: 'center', fontSize: 38, paddingTop: 20, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 20}}>CHORDS</Text>
            <Text style={{backgroundColor: 'transparent', opacity: 0}}>Some</Text>
          </View>
        </LinearGradient>
        <ScrollView style={{backgroundColor: 'white', marginTop: 0, marginBottom: 86}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', marginTop: 6}}>
            <Button
              onPress={this.playC}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 18, color: '#0E8498'}}>C</Text></Button>
            <Button
              onPress={this.playDm}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 4, color: '#0E8498'}}>Dm</Text></Button>
            <Button
              onPress={this.playEm}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Em</Text></Button>
          </View>
          <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', marginBottom: 20}}>
            <Button
              onPress={this.playF}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 21, color: '#0E8498'}}>F</Text></Button>
            <Button
              onPress={this.playG}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 17, color: '#0E8498'}}>G</Text></Button>
            <Button
              onPress={this.playAm}
              containerStyle={styles.buttonContainer}
              style={styles.button}
            ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Am</Text></Button>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../img/speaker-2.png')} style={{height: 150, width: 150, opacity: 0.6}}></Image>
          </View>
        </ScrollView>
      </View>
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
  buttonContainer: {
    margin: 12,
    padding: 4,
    height: 78,
    width: 78,
    overflow:'hidden',
    borderWidth: 4,
    borderColor: "#00E7EE",
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  button: {
    fontSize: 36,
    paddingTop: 7,
    fontFamily: 'AvenirNext-Heavy',
    color: '#579BE6'
  },
  linearGradient: {
    height: 80
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
