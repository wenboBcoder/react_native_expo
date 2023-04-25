import { useState } from "react";
import { StyleSheet, View, FlatList, Touchable } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"
export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals,enteredGoal])
    let obj = {
      id: parseInt(Math.random() * 10000).toString(),
      value: goalTitle
    }
    setCourseGoals(currentGoals => [...currentGoals, obj])
    
  }

  const removeGoalHandler=(goalId)=>{
    setCourseGoals(currentGoals=>currentGoals.filter(goal=>goal.id!==goalId))
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      {
        /* 
        <ScrollView>
          {
            courseGoals.map(goal=><View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)
          }
        </ScrollView>
        */
      }
      <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler.bind(this,itemData.item.id)}></GoalItem>}
          keyExtractor={(item, index) => item.id + index} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
