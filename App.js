import React, { useState } from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  //we create an array with some items to display
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create app", key: "2" },
    { text: "Play on the PS4", key: "3" },
  ]);

  const pressHandler = (key) => {
    //here we hide a selected item from the list
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*to from */}
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
  },
});
