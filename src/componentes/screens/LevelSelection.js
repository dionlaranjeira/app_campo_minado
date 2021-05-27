import React from "react";
import {View,StyleSheet, Text, TouchableOpacity, Modal} from "react-native";

export default props => {
 

return(
   <Modal 
   onRequestClose={props.cancel}
   visible={props.isVisible} 
   animationType= "slide"
   transparent={true}>
      <View style={styles.frame} >
         <View style={styles.container} >
            <Text style={styles.title} >Selecione o nível</Text>
            <TouchableOpacity
            style={[styles.button, styles.bdEasy]}
            onPress={()=> props.onLevelSelected(0.1)}
            >
               <Text style={styles.buttonLevel} >Fácil</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, styles.bdNormal]}
            onPress={()=> props.onLevelSelected(0.2)}
            >
               <Text style={styles.buttonLevel} >Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, styles.bdHard]}
            onPress={()=> props.onLevelSelected(0.3)}
            >
               <Text style={styles.buttonLevel} >Difícil</Text>
            </TouchableOpacity>
         </View>
      </View>

   </Modal>
);

}

const styles = StyleSheet.create({
   frame:{
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
   },
   container:{
      backgroundColor: "#EEE",
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
   },
   title:{
      fontSize: 30,
      fontWeight: "bold",
   },
   button:{
      marginTop: 10,
      padding: 5,
   },
   buttonLabel:{
      fontSize: 20,
      color: "#EEE",
      fontWeight: "bold",
   },
   bdEasy:{
      backgroundColor: "#49b65d",
   },
   bdNormal:{
      backgroundColor: "#2765F7",
   },
   bdHard:{
      backgroundColor: "#F26337",
   }

});




