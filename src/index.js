import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from "./params";
import Field from "./componentes/Field";

export default class App extends Component {
  render(){
  return (
    <SafeAreaView  style={styles.container
    }  >
      <Text>Tamanho da grade: {params.getRowsAmount()} X {params.getColumnsAmount()}</Text>
      <Field></Field>
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

