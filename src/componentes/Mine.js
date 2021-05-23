import React from "react";
import {View,StyleSheet, Text} from "react-native";
import params from "../params"

export default props => {
    
return(
    <View style={styles.container}>
         <View style={styles.coreMine}></View>
         <View style={styles.mine}></View>
         <View style={styles.line}></View>
         <View style={[styles.line, {transform:[{rotate: '45deg'}]}]}></View>
         <View style={[styles.line, {transform:[{rotate: '90deg'}]}]}></View>
         <View style={[styles.line, {transform:[{rotate: '135deg'}]}]}></View>
    </View>
);

}

const styles = StyleSheet.create({

container:{
    alignItems: "center",
    justifyContent: "center",
},

coreMine: {
    height: 45 -params.blockSize,
    width: 45 - params.blockSize,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
},
line: {
    position: "absolute",
    height: 3,
    width: params.blockSize - 5 ,
    borderRadius: 3,
    backgroundColor: "#000",
}

});




