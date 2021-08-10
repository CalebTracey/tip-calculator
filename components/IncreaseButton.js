import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const IncreaseButton = ({ max, setMax }) => {
  const handlePress = () => {
    if (max <= 300) {
      setMax(max + 10);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default IncreaseButton;

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
