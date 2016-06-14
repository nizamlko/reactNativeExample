'use strict';
import React, { Component, Navigator } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class PropertyFinderApp extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'HelloWorld', name: 'Index'}}
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
    var routeId = route.id;   
    return (
        <HelloWorld
          navigator={navigator} />
      );   
  }
}

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>
          Hello World (Again2)
      </Text>
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

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
