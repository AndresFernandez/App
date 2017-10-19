/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';
import Camera from 'react-native-camera';
import {
  StackNavigator,
} from 'react-navigation';
import YouTube from 'react-native-youtube';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Inicio',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Camara')}
          title="Camara"
        />
          <Button
          onPress={() => navigate('Video')}
          title="Video"
        />
      </View>
    );
  }
}
class VideoScreen extends Component {
  render(){
    return(
      <View style= {styles.container}>
      <YouTube
  //videoId="KVZ-P-ZI6W4"   // The YouTube video ID
  playlistId="LLsGawyWfvrx2MlRiwb8pcQw"
  play={true}             // control playback of video with true/false
  fullscreen={true}       // control whether the video should play in fullscreen or inline
  loop={true}             // control whether the video should loop when ended
apiKey="AIzaSyAYCJljffxEmLpyYMFLa97CDzf2A8zX0Ys"
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}

  style={{ alignSelf: 'stretch', height: 300 }}
/>
</View>
      )
  }
}
 class CamaraScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}
const App = StackNavigator({
  Home: { screen: HomeScreen },
  Camara: { screen: CamaraScreen },
  Video: { screen: VideoScreen },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('app', () => App);
