import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [round, setRound] = useState(0);

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
