import React from "react";
import { View, StyleSheet, Button } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = props => {
  const { numOfRound, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TitleText>Game is over!</TitleText>
      <BodyText>Round : {numOfRound}</BodyText>
      <BodyText>Your Number : {userNumber}</BodyText>
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
