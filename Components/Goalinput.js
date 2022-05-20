import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setenteredGoal] = useState("");
  const goalinputHandler = (enteredtext) => {
    setenteredGoal(enteredtext.target.value);
  };
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textinput}
        onChange={goalinputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    width: "80%",
  },
});
export default GoalInput;
