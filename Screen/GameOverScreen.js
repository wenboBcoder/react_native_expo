import React from 'react'
import {StyleSheet, View, Button, Image, Text} from 'react-native'
import color from '../constant/color'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over</BodyText>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} resizeMode='cover' source={{uri:'https://www.dzwww.com/2019/yzxsdtstsg/yxgjzs/201909/W020190925383498771822.jpg'}}/>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Your phone neeeded <Text tyle={styles.highlight}> {props.roundsNumber} </Text>rounds to guess the number <Text tyle={styles.highlight}> {props.roundsNumber} </Text>
        Number was: {props.userNumber}</BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imagecontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'#000',
        overflow:'hidden',
        marginVertical:30
    },
    image:{
        width:'100%',
        height:'100%'
    },
    highlight:{
      color:color.primary,
      fontFamily:"opensans",
      textAlign:'center'
    },
    resultContainer:{
      marginHorizontal:30,
      marginVertical:15
    },
    resultText:{
      alignItems:'center',
      fontSize:20
    }
})
export default GameOverScreen