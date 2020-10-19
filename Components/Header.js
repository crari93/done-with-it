import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Done With It!! 🚀 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#1A73AD",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
