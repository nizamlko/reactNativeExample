'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,  
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

class PropertyFinderApp extends Component {
  render() {
    return( 
    <Text style={styles.text}>
      Hello World (Again2)
    </Text>
  );
  }
}

class PropertyFinder extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    return (
        <PropertyFinderApp
          navigator={navigator} />
      );
  }
}


const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
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
});







AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
