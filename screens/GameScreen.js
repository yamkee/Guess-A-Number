import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import TitleText from "../components/TitleText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [currentRound, setCurrentRound] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  const guessNumberHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie", "You know this is wrong...", [
        { text: "sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setCurrentRound(currentRound => currentRound + 1);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(currentRound);
    }
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Number</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={guessNumberHandler.bind(this, "lower")}>
          LOWER
        </MainButton>
        <MainButton onPress={guessNumberHandler.bind(this, "greater")}>
          GREATER
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  buttonContainer: {
    width: 300,
    maxWidth: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
});

export default GameScreen;
