import React from 'react'
import {StyleSheet, View, Button, Image, Text, Dimensions,ScrollView} from 'react-native'
import color from '../constant/color'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
  return (
    <ScrollView>
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
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    imagecontainer:{
        width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
        borderRadius:Dimensions.get('window').width*0.7/2,
        borderWidth:3,
        borderColor:'#000',
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height/30
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
      marginVertical:Dimensions.get('window').height/60
    },
    resultText:{
      alignItems:'center',
      fontSize:Dimensions.get('window').height<400?16:20
    },
    highlight:{
      color:color.primary,
      fontFamily:'opensans-bold'
    }
})
export default GameOverScreen