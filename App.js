import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [round, setRound] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={err => {
          console.log(err);
        }}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = finalRound => {
    setRound(finalRound);
  };

  const restartGameHandler = () => {
    setRound(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  content = (
    <GameOverScreen
      numOfRound={1}
      userNumber={1}
      onRestart={restartGameHandler}
    />
  );
  if (userNumber && round == 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (round > 0) {
    content = (
      <GameOverScreen
        numOfRound={round}
        userNumber={userNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
