import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

export default class Next extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Next',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/right-arrow.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: '#579BE6', opacity: 0.9}}>
      </Image>
    )
  };
  constructor() {
    super();
    this.state = {
      nextChordData: [],
      nextChord: [],
      nextChordLetters: ''
    }
  }

  doubleFunc = () => {
    this.joinArray();
    this.getNextChord();
  }

  // joinArray = () => {
  //   // let a = this.state.nextChord;
  //   // console.log(a);
  //   // a.join();
  //
  //   var a = Array.prototype.slice.call(this.state.nextChord);
  //   a.join();
  //   console.log(a);
  // }

  getNextChord = () => {
    var a = Array.prototype.slice.call(this.state.nextChord);
    a.join();
    console.log(a);
    fetch('https://api.hooktheory.com/v1/trends/nodes?cp=' + a, {
      headers: {
        'Authorization': 'Bearer 2bdfc290142eaeac8287b310807155fb',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {

      this.setState({
        nextChordData: response
      });
    });
  }
  render(){
    return(
      <ScrollView>
      <Text>Next chord</Text>
      <Button onPress={this.getNextChord}>Get next chord!</Button>
      <Button onPress={() => this.setState({nextChordData: [], nextChord: '', nextChordLetters: ''})}>Reset!</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "1", nextChordLetters: this.state.nextChordLetters + 'C   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >C</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "2", nextChordLetters: this.state.nextChordLetters + 'Dm   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >Dm</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "3", nextChordLetters: this.state.nextChordLetters + 'Em   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >Em</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "4", nextChordLetters: this.state.nextChordLetters + 'F   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >F</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "5", nextChordLetters: this.state.nextChordLetters + 'G   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >G</Button>
      <Button
        onPress={() => this.setState({nextChord: this.state.nextChord + "6", nextChordLetters: this.state.nextChordLetters + 'Am   '})}
        containerStyle={styles.buttonContainer}
        style={styles.button}
      >Am</Button>
      <Text style={{textAlign: 'center', fontFamily: 'Avenir Next', fontSize: 32, marginBottom: 10}}>{this.state.nextChordLetters}</Text>

      {this.state.nextChordData.map(function(item, i){
        console.log(item.chord_HTML)
        {
          if (item.chord_HTML == "IV") {
            item.chord_HTML = "F"
          } else if (item.chord_HTML == "I") {
            item.chord_HTML = 'C'
          } else if (item.chord_HTML == 'vi') {
            item.chord_HTML = 'Am'
          } else if (item.chord_HTML == 'ii') {
            item.chord_HTML = 'Dm'
          } else if (item.chord_HTML == 'V') {
            item.chord_HTML = 'G'
          } else if (item.chord_HTML == 'I<sup>7</sup>') {
            item.chord_HTML = 'C7'
          }
        }
        return (
          <View style={{marginBottom: 39, alignItems: 'center'}} key={i}>
            <Text style={{fontFamily: 'Avenir Next', fontSize: 28, color: 'black'}}>
              {item.chord_HTML}
            </Text>
            <Text style={{fontFamily: 'AvenirNext-Italic', fontSize: 20, color: 'gray'}}>{item.probability * 100} %</Text>
          </View>
        )
      })}
    </ScrollView>
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
    borderWidth: 2,
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
