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
        style={{width: 22, height: 22, marginTop: 14, tintColor: tintColor, opacity: 0.9}}>
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
          <View style={{flex: 1, alignItems: 'center', marginTop: 20, marginBottom: 100, paddingLeft: 39, paddingRight: 39}}>
            <Image source={require('../img/information-blue.png')} style={{height: 40, width: 40}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>For this app, we use the API provided by Hooktheory.com. The API exposes the chord probability data used in Hooktheory's Theorytab Trends page. The database consists of 16 000 analyzed songs.</Text>
            <Image source={require('../img/musical-note-blue.png')} style={{height: 40, width: 40, marginTop: 20}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>The default key is C and the options are the six most common chords used in this key.</Text>
            <Image source={require('../img/piano-blue.png')} style={{height: 40, width: 40, marginTop: 20}}></Image>
            <Text style={{fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 20}}>You can find songs that have the same chords and the most likely chords to follow any progression. Also, in the Play-section, you can play the six most common chords in the key C.</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 80
  }
});
