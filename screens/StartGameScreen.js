import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";


const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} onPress={}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={}/>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 20
  },
  inputContainer: { width: 300, maxWidth: "80%", alignItems: "center" },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  button: {
    width: "30%"
  }
});

export default StartGameScreen;
