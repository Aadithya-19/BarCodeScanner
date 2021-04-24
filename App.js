
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScanScreen from './screens/ScanScreen'

export default class App extends Component {

  render(){
    return(
      <ScanScreen/>
    );
  }

}
