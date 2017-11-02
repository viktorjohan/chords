import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { DotIndicator } from 'react-native-indicators';

const width = "70%";

export default class Next extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Next',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/right-arrow.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: tintColor, opacity: 0.9}}>
      </Image>
    )
  };
  constructor() {
    super();
    this.state = {
      nextChordData: [],
      nextChord: [],
      nextChordLetters: '',
      animating: false,
      error: ''
    }
  }

  getNextChord = () => {
    this.setState({animating: true});
    var a = Array.prototype.slice.call(this.state.nextChord);
    a.join();
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
    }).then(() => {
      this.setState({
        animating: false
      });
    }).catch((error) => {
      this.setState({error: "Sorry, we can't find the next chord with that progression", animating: false});
    });
  }
  render(){
    return(
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
            onPress={() => this.setState({nextChord: this.state.nextChord + "1", nextChordLetters: this.state.nextChordLetters + 'C  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 18, color: '#0E8498'}}>C</Text></Button>
          <Button
            onPress={() => this.setState({nextChord: this.state.nextChord + "2", nextChordLetters: this.state.nextChordLetters + 'Dm  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 4, color: '#0E8498'}}>Dm</Text></Button>
          <Button
            onPress={() => this.setState({nextChord: this.state.nextChord + "3", nextChordLetters: this.state.nextChordLetters + 'Em  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Em</Text></Button>
        </View>
          <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', marginBottom: 20}}>
          <Button
            onPress={() => this.setState({nextChord: this.state.nextChord + "4", nextChordLetters: this.state.nextChordLetters + 'F  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 21, color: '#0E8498'}}>F</Text></Button>
          <Button
            onPress={() => this.setState({nextChord: this.state.nextChord + "5", nextChordLetters: this.state.nextChordLetters + 'G  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 17, color: '#0E8498'}}>G</Text></Button>
          <Button
            onPress={() => this.setState({nextChord: this.state.nextChord + "6", nextChordLetters: this.state.nextChordLetters + 'Am  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Am</Text></Button>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 66, marginRight: 66}}>
          <Text style={{textAlign: 'center', fontFamily: 'Avenir Next', color: '#0E8498', fontSize: 30, marginBottom: 2}}>{this.state.nextChordLetters}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 17}}>
          <View style={{backgroundColor: 'gray', height: 1, width: 175}}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={this.getNextChord}>
            <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#00E7EE', '#579BE6']} style={{height: 45, width: 194, borderRadius: 50}}>
              <Text style={{textAlign: 'center', fontSize: 22, paddingTop: 7, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 16}}>Get next chord!</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10, marginBottom: 30}} onPress={() => this.setState({nextChordData: [], nextChord: '', nextChordLetters: ''})}>
            <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#ddd', 'lightgrey']} style={{height: 25, width: 90, borderRadius: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 17, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 16}}>Reset</Text>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.animating &&
            <DotIndicator
                 color = 'lightblue'
                 count = {4}
                 size = {11}
                 style = {styles.activityIndicator}/>
          }
        </View>
        {this.state.nextChordData.slice(0, 8).map(function(item, i){
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
            } else if (item.chord_HTML == 'iii') {
              item.chord_HTML = 'Em'
            } else if (item.chord_HTML == 'I<sup>7</sup>') {
              item.chord_HTML = 'C7'
            } else if (item.chord_HTML == 'V<sup>7</sup>') {
              item.chord_HTML = 'G7'
            } else if (item.chord_HTML == 'IV<sup>7</sup>') {
              item.chord_HTML = 'F7'
            } else if (item.chord_HTML == 'V<sup>7</sup>/vi') {
              item.chord_HTML = 'G7/Am'
            } else if (item.chord_HTML == '&#9837;V') {
              item.chord_HTML = 'G♭'
            } else if (item.chord_HTML == 'ii<sup>7</sup>') {
              item.chord_HTML = 'Dm7'
            } else if (item.chord_HTML == 'iii<sup>7</sup>') {
              item.chord_HTML = 'Em7'
            } else if (item.chord_HTML == 'vi<sup>7</sup>') {
              item.chord_HTML = 'Am7'
            } else if (item.chord_HTML == 'I<sup>6</sup>') {
              item.chord_HTML = 'C6'
            } else if (item.chord_HTML == 'IV<sup>6</sup>') {
              item.chord_HTML = 'F7'
            } else if (item.chord_HTML == 'V<sup>6</sup>') {
              item.chord_HTML = 'G7'
            } else if (item.chord_HTML == 'ii<sup>6</sup>') {
              item.chord_HTML = 'Dm6'
            } else if (item.chord_HTML == 'iii<sup>6</sup>') {
              item.chord_HTML = 'Em6'
            } else if (item.chord_HTML == 'vi<sup>6</sup>') {
              item.chord_HTML = 'Am6'
            } else if (item.chord_HTML == 'V/iii') {
              item.chord_HTML = 'G/Em'
            } else if (item.chord_HTML == '&#9837;VII') {
              item.chord_HTML = 'B♭'
            } else if (item.chord_HTML == 'V/V') {
              item.chord_HTML = 'G/G'
            } else if (item.chord_HTML == 'vii') {
              item.chord_HTML = 'Bm'
            } else if (item.chord_HTML == 'V/vi') {
              item.chord_HTML = 'G/Am'
            } else if (item.chord_HTML == 'V<sup>6</sup>/vi') {
              item.chord_HTML = 'G6/Am'
            } else if (item.chord_HTML == 'iv') {
              item.chord_HTML = 'B♭'
            } else if (item.chord_HTML == 'V<sup>7</sup>/iii') {
              item.chord_HTML = 'G7/Em'
            } else if (item.chord_HTML == 'vii&deg;') {
              item.chord_HTML = 'B°'
            } else if (item.chord_HTML == 'vi<sup>4</sup><sub>2</sub>') {
              item.chord_HTML = 'Am4sus2'
            } else if (item.chord_HTML == 'IV<sup>6</sup><sub>4</sub>') {
              item.chord_HTML = 'F6sus4'
            } else if (item.chord_HTML == 'vii&deg;/vi') {
              item.chord_HTML = 'B°/Am'
            } else if (item.chord_HTML == 'vi<sup>6</sup><sub>4</sub>') {
              item.chord_HTML = 'Am6sus4'
            } else if (item.chord_HTML == 'V<sup>6</sup>/V') {
              item.chord_HTML = 'G6/G'
            } else if (item.chord_HTML == 'V<sup>6</sup><sub>4</sub>') {
              item.chord_HTML = 'G6sus4'
            } else if (item.chord_HTML == '&#9837;III') {
              item.chord_HTML = 'Em♭'
            } else if (item.chord_HTML == 'iii<sup>6</sup><sub>4</sub>') {
              item.chord_HTML = 'Em6sus4'
            } else if (item.chord_HTML == '&#9837;VI') {
              item.chord_HTML = 'Am♭'
            } else if (item.chord_HTML == 'V<sup>7</sup>/V') {
              item.chord_HTML = 'G7/G'
            } else if (item.chord_HTML == 'iii<sup>6</sup><sub>5</sub>') {
              item.chord_HTML = 'Em6sus5'
            } else if (item.chord_HTML == 'V/ii') {
              item.chord_HTML = 'G/Dm'
            } else if (item.chord_HTML == '&#9837;II') {
              item.chord_HTML = 'Dm♭'
            } else if (item.chord_HTML == 'V<sup>4</sup><sub>2</sub>') {
              item.chord_HTML = 'G4sus2'
            } else if (item.chord_HTML == 'V<sup>6</sup><sub>5</sub>/vi') {
              item.chord_HTML = 'G6sus5/Am'
            } else if (item.chord_HTML == 'v') {
              item.chord_HTML = 'G'
            } else if (item.chord_HTML == 'I<sup>6</sup><sub>4</sub>') {
              item.chord_HTML = 'C6sus4'
            } else if (item.chord_HTML == 'iii<sup>4</sup><sub>2</sub>') {
              item.chord_HTML = 'Em4sus2'
            }
          }
          {
            var number = item.probability;
            var roundedNumber = Math.ceil(number * 100);
          }
          return (
            <View key={i}>
              <View style={{marginBottom: 20}} key={i}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12}}>
                  <Text style={{fontFamily: 'Avenir Next', fontSize: 22, color: 'black', marginRight: -15}}>
                    {item.chord_HTML}
                  </Text>
                  <Text style={{fontFamily: 'AvenirNext-Italic', fontSize: 22, color: 'black', marginLeft: -15}}>
                    {roundedNumber} %
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <View style={{width: width, height: 1, backgroundColor: 'gray'}}></View>
                </View>
              </View>
            </View>
          )
        })}
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
