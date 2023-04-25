import React ,{useState}from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }
    const onAddGoal=()=>{
        props.onAddGoal(enteredGoal)//这里是被封装在oddAddGoal里了，如果只有一行卸载行间，则可以写成props.onAddGoal.bind(this,enteredGoal)
        setEnteredGoal('')
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goals"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={onAddGoal}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        width: "80%",
        padding: 10,
    },
});
