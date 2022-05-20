import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./Components/Goalinput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [courseGoals, setGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const AddGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setisAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setisAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={AddGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
