import React from 'react'
import {StyleSheet, View, Text, Platform} from 'react-native'
import color from '../constant/color'
export default function Header(props) {
  return (
    <View style={{...styles.headerBase,...Platform.select({ios:styles.headerIOS,android:styles.headerAndroid})}}>
        <Text style={styles.headertitle}>
        {props.title}
        </Text>
    </View>
  )
}

const styles=StyleSheet.create({
    headerBase:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
    },
    headerIOS:{
      backgroundColor:color.primary,
      borderBottomColor:'#ccc',
      borderBottomWidth:1
    },
    headerAndroid:{
      backgroundColor:'white',
      borderBottomColor:'tansparent',
    },
    headertitle:{
        color:Platform.OS='ios'?color.primary:'white',
        fontSize:18,
    },
})