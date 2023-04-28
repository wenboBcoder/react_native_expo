import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import color from "../constant/color";

export default function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:color.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonText:{
        color:'white',
        fontFamily:'opensans',
        fontSize:18,
    }
});
