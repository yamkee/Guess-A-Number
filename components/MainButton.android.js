import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonContainer = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonContainer = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonContainer activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden"
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans"
  }
});

export default MainButton;
