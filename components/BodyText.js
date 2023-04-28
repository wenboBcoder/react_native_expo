import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

const BodyText = (props) => <Text style={{...styles.body,...props.style}}>{props.children}</Text>

const styles=StyleSheet.create({
    body:{
        fontFamily:'opensans-bold'
    }
})

export default BodyText