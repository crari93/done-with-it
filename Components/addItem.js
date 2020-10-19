import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Button,
} from "react-native";

export default function addItem({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View style={styles.input}>
      <Button
        style={styles.button}
        onPress={() => submitHandler(text)}
        title="✔️ Add new Task"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Write something here..."
        placeholderTextColor="white"
        onChangeText={changeHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  button: {
    color: "#1A73AD",
  },
});
