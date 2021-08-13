import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MaxDisplay = ({ max }) => {
  return <Text style={styles.container}>{max}%</Text>;
};

export default MaxDisplay;
const styles = StyleSheet.create({
  container: {
    color: "black",
    backgroundColor: "yellow",
    fontSize: 20,
  },
});
