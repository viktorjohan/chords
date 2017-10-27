import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

export default class About extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/information.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: '#579BE6', opacity: 0.9}}>
      </Image>
    )
  };
  render() {
    return (
      <View>
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#00E7EE', '#579BE6']} style={styles.linearGradient}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image source={require('../img/play-button.png')} style={{width: 38, height: 38, marginTop: 25, opacity: 0.9}}></Image>
            <Text style={{textAlign: 'center', fontSize: 38, paddingTop: 20, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 20}}>CHORDS</Text>
            <Text style={{backgroundColor: 'transparent', opacity: 0}}>Some</Text>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={{flex: 1, alignItems: 'center', marginTop: 20, marginBottom: 100, paddingLeft: 19, paddingRight: 19}}>
            <Image source={require('../img/information-blue.png')} style={{height: 40, width: 40}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>Hooktheory's API exposes the chord probability data used in Hooktheory's Theorytab Trends page. The chords surrounding the chord(s) you chose are the ones that come next most often. The percentage tells you how often.</Text>
            <Image source={require('../img/musical-note-blue.png')} style={{height: 40, width: 40, marginTop: 20}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>Hooktheory's API exposes the chord probability data used in Hooktheory's Theorytab Trends page. The chords surrounding the chord(s) you chose are the ones that come next most often. The API contains two endpoints: one for "next chord containing a chord progression".</Text>
            <Image source={require('../img/piano-blue.png')} style={{height: 40, width: 40, marginTop: 20}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>The API contains two endpoints: one  containing a chord progression". The API exposes the chord probability data used in Hooktheory’s database. Hooktheory's API exposes the chord probability data used in Hooktheory's Theorytab Trends page. The chords surrounding the chordcome next most often.</Text>
          </View>
        </ScrollView>
      </View>
    )
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
