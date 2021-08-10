import React from "react";
import { StyleSheet, View, Button } from "react-native";

const StartButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Get Started"
        onPress={() => {
          navigation.navigate("Tip Calculator", {});
        }}
      />
    </View>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  container: {
    color: "black",
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 300,
    padding: 10,
    textAlign: "center",
  },
});
