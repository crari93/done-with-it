import React, { useState } from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import AddItem from "./Components/addItem";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  //we create an array with some items to display
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    //here we hide a selected item from the list
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>👇 Tasks to do 👇</Text>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              /*here we are passing with props two variables to the TodoItem component: 
                1: the array item
                2: the hide function*/
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <AddItem submitHandler={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
});
