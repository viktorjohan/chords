import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Songs from './components/songs';
import Next from './components/next';
import Play from './components/play';
import About from './components/about';

var MainScreenNavigator = TabNavigator({
  Songs: {screen: Songs},
  Next: {screen: Next},
  Play: {screen: Play},
  About: {screen: About}
}, {
  tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#579BE6',
      inactiveTintColor: '#d3d3d3',
      showIcon: true,
      labelStyle: {
        fontSize: 13,
        fontFamily: 'Avenir Next',
        color: 'transparent'
      },
      style: {
        height: 40
      }
    }
});

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
}

export default MainScreenNavigator;
