import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  const { numOfRound, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <Text>Game is over!</Text>
      <Text>Round : {numOfRound}</Text>
      <Text>Your Number : {userNumber}</Text>
      <Button title="Restart Game" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
