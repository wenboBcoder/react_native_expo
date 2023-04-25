import React from 'react'
import {View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StyleSheet} from 'react-native'
export default function GoalItem(props) {
    return (
        <TouchableOpacity onPress={props.onDelete} activeOpacity={0.5}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        )
}

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
    }
})