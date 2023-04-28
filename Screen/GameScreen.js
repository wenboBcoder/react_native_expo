import React, { useState, useRef, useEffect} from 'react'
import {StyleSheet, Text, View, Button, Alert, ScrollView, FlatList} from 'react-native'
import MainButton from '../components/MainButton';

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import defaultStyles from '../constant/default-styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import BodyText from '../components/BodyText';

const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min)
    max=Math.floor(max)
    const rndNum=Math.floor(Math.random()*(max-min))+min
    if(rndNum===exclude){ //如果猜到的数确定已经排除了，那么久再猜一次
        return generateRandomBetween(min,max,exclude)
    }else{
        return rndNum
    }
}

/* const renderListItem=(value,numOfRound)=>{
    return <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
        </View>
        适配scrollView
} */
const renderListItem=(listLength,itemData)=>{
    return <View key={itemData.item} style={styles.listItem}>
        <BodyText>#{listLength-itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
        </View>
}

export default function GameScreen(props) {
    const initialGuess=generateRandomBetween(1,100,props.userChoice)
    const [currentGuess,setCurrentGuess]=useState(initialGuess)
    const [pastGuesses,setPastGuesses]=useState([initialGuess.toString()])
    const currentLow=useRef(1)
    const currentHigh=useRef(100)

    const {userChoice,onGameOver}=props
    useEffect(()=>{
        if(currentGuess===userChoice){
            onGameOver(pastGuesses.length)
        }
    },[currentGuess,userChoice,onGameOver])

    const nextGuessHandler=direction=>{
        if((direction==="lower" && currentGuess<props.userChoice)||(direction==='greater'&& currentGuess>props.userChoice)){
            Alert.alert('don\'t lie','you know that this is wrong...',[{text:'Sorry',style:'cancel'}])
            return
        }
        if(direction==='lower'){
            currentHigh.current=currentGuess
        }else{
            currentLow.current=currentGuess+1
        }
        const nextNumber=generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds(round=>round+1)
        setPastGuesses(curPastGuesses=>[nextNumber.toString(),...curPastGuesses,])
    }


    return (
    <View style={styles.screen}>
        <Text style={defaultStyles.title}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this,'lower')}>
                <Ionicons name='md-remove' size={24} color='white' />
            </MainButton>
            <MainButton onPress={nextGuessHandler.bind(this,'greater')}>
                <Ionicons name='md-add' size={24} color='white' />
            </MainButton>
        </Card>
        <View style={styles.listContainer}>
        { 
        //    <ScrollView contentContainerStyle={styles.list}>
        //     {pastGuesses.map((guess,index)=>renderListItem(guess,pastGuesses.length-index))}
        //     </ScrollView>
        }
        <FlatList keyExtractor={item=>item} 
        data={pastGuesses}
        renderItem={renderListItem.bind(this,pastGuesses.length)}
        contentContainerStyle={styles.list} 
        />
        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    },
    listContainer:{
       flex:1,
       width:'60%'
    },
    list:{
        flexGrow:1,
        justifyContent:'center'
    },
    listItem:{
        borderColor:'#ccc',
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
    },
    
})