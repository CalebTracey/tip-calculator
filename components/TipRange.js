import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import MaxDisplay from "./MaxDisplay";

const TipRange = ({ max, setMax }) => {
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
    flexDirection: "row",
  },
  textContainer: {
    width: 175,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderRadius: 100,
    padding: 10,
  },
  text: { fontSize: 20 },
});
