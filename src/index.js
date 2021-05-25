import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import params from "./params";
import MineField from "./componentes/MineField";
import {createMinedBoar} from "../src/functions";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = this.createState();
  }


  minesAmount = () =>{
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () =>{
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();
    return {
      board: createMinedBoar(rows,cols,this.minesAmount()),

    }
  }

  render(){
  return (
    <SafeAreaView  style={styles.container}>
     <View style={styles.board}>
       <MineField board = {this.state.board} ></MineField>
     </View>
    </SafeAreaView>
  );
}};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: "#AAA",
  }
});

