import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import Card from "../components/Card";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  inputContainer: { width: 300, maxWidth: "80%", alignItems: "center" },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  }
});

export default StartGameScreen;
