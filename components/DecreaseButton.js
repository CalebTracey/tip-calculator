import React from "react";
import { StyleSheet, Text, TouchableOpacity, Button } from "react-native";

const DecreaseButton = ({ max, setMax }) => {
  const handlePress = () => {
    if (max >= 10) {
      setMax(max - 10);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Text style={styles.text}>-</Text>
    </TouchableOpacity>
  );
};

export default DecreaseButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: "System",
    color: "black",
    fontSize: 30,
    padding: 20,
  },
  container: {
    color: "black",
    backgroundColor: "yellow",
    borderRadius: 50,
    textAlign: "center",
  },
});
