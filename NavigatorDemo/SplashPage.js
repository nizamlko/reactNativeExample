'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,    
  StyleSheet,
  Text,
  View
} from 'react-native';

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>Splash</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
