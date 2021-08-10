import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import MaxDisplay from "./MaxDisplay";

const TipRange = ({ min, max, setMin, setMax }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <DecreaseButton max={max} setMax={setMax} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Max Tip: <MaxDisplay max={max} />
        </Text>
      </View>
      <View style={styles.button}>
        <IncreaseButton max={max} setMax={setMax} />
      </View>
    </View>
  );
};

export default TipRange;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: 20,
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "yellow",
    borderRadius: 20,
    padding: 10,
  },
  button: { margin: 10 },
  text: { fontSize: 20, marginTop: 20 },
});
