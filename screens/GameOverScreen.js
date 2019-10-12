import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = props => {
  const { numOfRound, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TitleText>Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
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
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 20,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
