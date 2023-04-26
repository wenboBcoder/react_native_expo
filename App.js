import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput"
export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddModal, setIsAddModal]=useState(false)

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals,enteredGoal])
    if(goalTitle.length===0){
      return;
    }
    let obj = {
      id: parseInt(Math.random() * 10000).toString(),
      value: goalTitle
    }
    setCourseGoals(currentGoals => [...currentGoals, obj])
    setIsAddModal(false)
    
  }

  const removeGoalHandler=(goalId)=>{
    setCourseGoals(currentGoals=>currentGoals.filter(goal=>goal.id!==goalId))
  }

  const cancelGoalAdditionHandler=()=>{
    setIsAddModal(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddModal(true)}></Button>
      <GoalInput visible={isAddModal} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
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
