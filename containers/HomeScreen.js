import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartButton from "../components/StartButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tip Calculator</Text>
      <View style={styles.startButton}>
        <StartButton navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "System",
    flex: 1,
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  startButton: {
    flex: 1,
  },
});
