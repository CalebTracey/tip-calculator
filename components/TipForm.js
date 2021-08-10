import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Slider from "@react-native-community/slider";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";

const TipForm = ({ setValue, value, min, max }) => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          step={1}
          minimumValue={min}
          maximumValue={max}
          value={value}
          onValueChange={(slideValue) => setValue(slideValue)}
          minimumTrackTintColor="#e6e600"
          maximumTrackTintColor="#e6e600"
          thumbTintColor="#d9d9d9"
        />
      </View>
    </View>
  );
};

export default TipForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 350,
    padding: 10,
    textAlign: "center",
  },
  slider: {
    padding: 10,
    flex: 4,
  },
});
