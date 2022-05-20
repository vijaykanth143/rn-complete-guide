import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setenteredGoal] = useState("");
  const goalinputHandler = (enteredtext) => {
    setenteredGoal(enteredtext.target.value);
  };
  const onAddHandler = () => {
    props.onAddGoal(enteredGoal);
    setenteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textinput}
          onChange={goalinputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttoncon}>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    width: "80%",
  },
  buttoncon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "45%",
  },
});
export default GoalInput;
