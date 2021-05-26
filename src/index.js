import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import params from "./params";
import Header from "./componentes/Header";
import MineField from "./componentes/MineField";
import {flagsUsed,invertFlag,createMinedBoar, cloneBoard, openField,hadExploded, showMines, wonGame} from "../src/functions";

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
      won: false, 
      lost: false,
    }
  }

  onOpenField = (row, column) =>{
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExploded(board);
    const won = wonGame(board);
    
    if(lost){
      showMines(board);
      Alert.alert("GAME OVER","Você perdeu!!!");
    }

    if(won){
      Alert.alert("VÍTORIA","Parabéns! Você ganhou!")
    }

    this.setState({board, lost, won});  

  }
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    if(won){
      Alert.alert("VÍTORIA","Parabéns! Você ganhou!")
    }
    this.setState({board, won})
  }
  render(){
  return (
    <SafeAreaView  style={styles.container}>
     <Header flagsLeft = {this.minesAmount() - flagsUsed(this.state.board)}
       onNewGame={()=>this.setState(this.createState())}
       ></Header>
     <View style={styles.board}>
       
       
       <MineField board = {this.state.board}
       onOpenField= {this.onOpenField}
       onSelectField = {this.onSelectField}
         ></MineField>
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

