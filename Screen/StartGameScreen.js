import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert,Dimensions, ScrollView, KeyboardAvoidingView,} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import color from "../constant/color";
import BodyText from "../components/BodyText";
import MainButtonfrom from "../components/MainButton";


export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState();
  const [confirmed, setConfirmed]=useState(false)
  const [selectedNumber,setSelectedNumber]=useState()
  const [buttonWidth,setButtonWidth]=useState(Dimensions.get('window').width/3)

  const numberInputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g,''))
  };

  const resetInputHandler=()=>{
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler=()=>{
    const chosenNumber=parseInt(enteredValue)
    if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
        Alert.alert('Invalid number!','Number has to be a number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput;

  if(confirmed){
    confirmedOutput=<Card style={styles.summaryContainer}>
                        <BodyText>you selected</BodyText>
                        <NumberContainer>
                            {selectedNumber}
                        </NumberContainer>
                        <MainButtonfrom onPress={()=>props.onStartGame(selectedNumber)}>Start Game</MainButtonfrom>
                    </Card>
  }

  useEffect(()=>{
    const updateLayout=()=>{
      setButtonWidth(Dimensions.get('window').width/3)
    }
    Dimensions.addEventListener('change',updateLayout)
  })
    
  return (
    <ScrollView>
    <KeyboardAvoidingView>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <Text style={styles.title}>StartGameScreen</Text>
      <Card style={styles.inputContainer}>
        <BodyText>Select a Number</BodyText>
        <Input style={styles.input}
          blurOnSumit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={{width:buttonWidth}}>
            <MainButtonfrom onPress={resetInputHandler} style={{backgroundColor:color.accent,alignItems:'center'}} >Reset</MainButtonfrom>
          </View>
          <View style={{width:buttonWidth}}>
            <MainButtonfrom onPress={confirmInputHandler}  style={{backgroundColor:color.primary,alignItems:'center'}} >Confirm</MainButtonfrom>
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'opensans'
  },
  inputContainer: {
    width: '80%',
    minWidth:300,
    alignItems:'center'
    
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width:300,
    fontSize:16,
    alignItems:'center'
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer:{
    marginTop:20,
    alignItems:'center'
  }
});
