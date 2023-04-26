import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const onAddGoal = () => {
    props.onAddGoal(enteredGoal); //这里是被封装在oddAddGoal里了，如果只有一行卸载行间，则可以写成props.onAddGoal.bind(this,enteredGoal)
    setEnteredGoal("");
  };
 
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={{width:80}}><Button title="Cancel" color="red" onPress={props.onCancel}></Button></View>
            <View style={{width:80}}><Button title="Add" onPress={onAddGoal}></Button></View>     
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom:10
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60%',
  }
});
