import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import color from "../constant/color";

export default function MainButton(props) {
  let ButtonComponent=TouchableOpacity
  if(Platform.OS=="android" && Platform.Version>=21){
    ButtonComponent=TouchableNativeFeedback
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...styles.button,...props.style}}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
      borderRadius:25,
      overflow:'hidden'
    },
    button:{
        backgroundColor:color.primary,
        paddingVertical:12,
        paddingHorizontal:15,
        borderRadius:25,

    },
    buttonText:{
        color:'white',
        fontFamily:'opensans',
        fontSize:18,
    }
});
