import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Button from 'react-native-button';
import { TabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

export default class Songs extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Songs',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/musical-note.png')}
        style={{width: 22, height: 22, marginTop: 14, tintColor: '#579BE6', opacity: 0.9}}>
      </Image>
    )
  };
  constructor() {
    super();
    this.state = {
      data: [],
      chords: '',
      chordsLetters: ''
    }
  }

  getSongs = () => {
    var b = Array.prototype.slice.call(this.state.chords);
    b.join();
    fetch('https://api.hooktheory.com/v1/trends/songs?cp=' + b, {
      headers: {
        'Authorization': 'Bearer 2bdfc290142eaeac8287b310807155fb',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        data: response
      });
    });
  }

  // page2 = () => {
  //   fetch('https://api.hooktheory.com/v1/trends/songs?cp=' + this.state.chords + '&page=2', {
  //     headers: {
  //       'Authorization': 'Bearer 2bdfc290142eaeac8287b310807155fb',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     this.setState({
  //       data: response
  //     });
  //   });
  // }

  render() {
    console.log(this.state.chords)
    return (
      <View>
      {/* <View style={{backgroundColor: '#90CBF4', height: 80}}>
      </View> */}
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#00E7EE', '#579BE6']} style={styles.linearGradient}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image source={require('../img/play-button.png')} style={{width: 38, height: 38, marginTop: 25, opacity: 0.9}}></Image>
            <Text style={{textAlign: 'center', fontSize: 38, paddingTop: 20, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 20}}>CHORDS</Text>
            <Text style={{backgroundColor: 'transparent', opacity: 0}}>Some</Text>
          </View>
        </LinearGradient>
      <ScrollView style={{backgroundColor: 'white', marginTop: 0, height: 800}}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', marginTop: 6}}>
          {/* <Button onPress={this.page2}>Page 2</Button> */}
          <Button
            onPress={() => this.setState({chords: this.state.chords + "1", chordsLetters: this.state.chordsLetters + 'C  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 18, color: '#0E8498'}}>C</Text></Button>
          <Button
            onPress={() => this.setState({chords: this.state.chords + "2", chordsLetters: this.state.chordsLetters + 'Dm  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 4, color: '#0E8498'}}>Dm</Text></Button>
          <Button
            onPress={() => this.setState({chords: this.state.chords + "3", chordsLetters: this.state.chordsLetters + 'Em  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Em</Text></Button>
        </View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', marginBottom: 20}}>
          <Button
            onPress={() => this.setState({chords: this.state.chords + "4", chordsLetters: this.state.chordsLetters + 'F  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 8, paddingLeft: 21, color: '#0E8498'}}>F</Text></Button>
          <Button
            onPress={() => this.setState({chords: this.state.chords + "5", chordsLetters: this.state.chordsLetters + 'G  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 8, paddingLeft: 19, color: '#0E8498'}}>G</Text></Button>
          <Button
            onPress={() => this.setState({chords: this.state.chords + "6", chordsLetters: this.state.chordsLetters + 'Am  '})}
            containerStyle={styles.buttonContainer}
            style={styles.button}
          ><Text style={{fontFamily: 'Avenir-Light', fontSize: 36, paddingTop: 6, paddingLeft: 5, color: '#0E8498'}}>Am</Text></Button>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 66, marginRight: 66}}>
          {/* <TextInput maxLength={2} style={{height: 50, width: 200, textAlign: 'center', fontFamily: 'Avenir Next', color: '#0E8498', fontSize: 30, marginBottom: 2}} value={this.state.chordsLetters} /> */}
          <Text style={{textAlign: 'center', fontFamily: 'Avenir Next', color: '#0E8498', fontSize: 30, marginBottom: 2}}>{this.state.chordsLetters}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 17}}>
          <View style={{backgroundColor: 'gray', height: 1, width: 175}}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          {/* <Button
            onPress={this.getSongs}
            containerStyle={{paddingBottom: 9, paddingTop:5, marginBottom: 8, height:35, width: 140, overflow:'hidden', borderRadius:50, backgroundColor: '#90CBF4'}}
            style={{fontSize: 20, color: 'white'}}
          >Find songs!</Button> */}
          <TouchableOpacity onPress={this.getSongs}>
            <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#00E7EE', '#579BE6']} style={{height: 45, width: 190, borderRadius: 50}}>
              <Text style={{textAlign: 'center', fontSize: 24, paddingTop: 7, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 16}}>Find songs!</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10, marginBottom: 30}} onPress={() => this.setState({chordsLetters: '', chords: '', data: []})}>
            <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.3, y: 0.1}} colors={['#ddd', 'lightgrey']} style={{height: 25, width: 90, borderRadius: 50, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 17, color: 'white', backgroundColor: 'transparent', fontFamily: 'AvenirNext-Regular', marginBottom: 16}}>Reset</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* <Button
          onPress={() => this.setState({chordsLetters: '', chords: '', data: []})}
          style={{color: 'lightgrey', marginBottom: 30}}
        >Reset</Button> */}
        {this.state.data.map(function(item, i){
          return (
            <View style={{marginBottom: 39, alignItems: 'center'}} key={i}>
              <Text style={{fontFamily: 'Avenir Next', textAlign: 'center', fontSize: 28, color: 'black'}}>{item.artist}</Text>
              <Text style={{fontSize: 21, fontFamily: 'Avenir Next', color: 'gray'}}>{item.song}</Text>
              <Text style={{fontFamily: 'AvenirNext-Italic', fontSize: 20, color: 'grey'}}>In the {item.section}</Text>
              {/* <Text style={{fontFamily: 'Avenir Next', fontSize: 28, color: 'black'}}>The chord is: {item.chord_HTML}</Text>
              <Text style={{fontFamily: 'AvenirNext-Italic', fontSize: 20, color: 'gray'}}>{item.probability * 100} %</Text> */}
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
