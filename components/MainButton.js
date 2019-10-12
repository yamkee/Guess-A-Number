import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
