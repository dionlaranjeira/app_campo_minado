import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import params from "./params";

export default class App extends Component {
  render(){
  return (
    <SafeAreaView  style={styles.container
    }  >
      <Text>Tamanho da grade: {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>
     
    </SafeAreaView>
  );
}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

