import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

import color from '../constant/color'

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:color.accent,
        padding:2,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color:color.accent,
        fontSize:22
    }
})