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
      <Field/>
      <Field opened />
      <Field opened nearMines = {1} />
      <Field opened nearMines = {2} />
      <Field opened nearMines = {3} />
      <Field opened nearMines = {4} />
      <Field opened nearMines = {5} />
      <Field opened nearMines = {6} />
      <Field opened nearMines = {7} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
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

