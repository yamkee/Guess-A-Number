import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = props => {
  const { numOfRound, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TitleText>Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your Phone needed <Text style={styles.highlight}>{numOfRound}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}> Restart Game</MainButton>
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
  },
  resultContainer: {
    marginVertical: 15,
    marginHorizontal: 30
  },
  resultText: {
    textAlign: "center"
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary
  }
});

export default GameOverScreen;
