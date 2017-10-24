import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

export default class Play extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Play',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/piano.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: '#579BE6', opacity: 0.9}}>
      </Image>
    )
  };
  render(){
    return(
      <View>
      </View>
    )
  }
}
