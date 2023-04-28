import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import color from "../constant/color";
import BodyText from "../components/BodyText";
import MainButtonfrom from "../components/MainButton";


export default function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed]=useState(false)
  const [selectedNumber,setSelectedNumber]=useState()

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

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <Text style={styles.title}>StartGameScreen</Text>
      <Card style={styles.inputContainer}>
        <BodyText>Select a Number</BodyText>
        <Input
          style={styles.input}
          blurOnSumit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        ></Input>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <MainButtonfrom onPress={resetInputHandler} color={color.accent} >Reset</MainButtonfrom>
          </View>
          <View style={styles.button}>
            <MainButtonfrom onPress={confirmInputHandler} color={color.primary} >Confirm</MainButtonfrom>
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
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
    width: 400,
    maxWidth: "90%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
  
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
