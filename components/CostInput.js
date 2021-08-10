import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const CostInput = ({ billAmount, onChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          clearButtonMode="always"
          clearTextOnFocus="true"
          keyboardAppearance="dark"
          returnKeyType="done"
          keyboardType="decimal-pad"
          onChangeText={onChange}
          value={billAmount}
        />
      </View>
    </View>
  );
};

export default CostInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 300,
    padding: 10,
    textAlign: "center",
  },
  inputContainer: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    backgroundColor: "rgb(240, 240, 240)",
    color: "rgba(0, 0, 0, .5)",
  },
  input: {
    flex: 1,
    color: "rgba(0, 0, 0, .5)",
  },
});
