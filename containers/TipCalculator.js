import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import TipForm from "../components/TipForm";
import CostInput from "../components/CostInput";
import TipRange from "../components/TipRange";

const TipCalculator = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [billAmount, onChange] = useState("Enter Bill Amount");
  const [billValue, setBillValue] = useState(0);
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(40);

  useEffect(() => {
    if (billAmount) {
      setBillValue(parseFloat(billAmount).toFixed(2));
      setTipValue(billAmount * (tipAmount / 100));
    }

    return () => {
      setTipValue(0);
      setBillValue(0);
    };
  }, [tipAmount, billAmount, setBillValue]);

  return (
    <View style={styles.container}>
      <View style={styles.tipText}>
        <Text style={styles.text}>{tipAmount}%</Text>
      </View>
      <View style={styles.amountText}>
        {billAmount === "Enter Bill Amount" ? (
          <Text>$0</Text>
        ) : (
          <Text style={styles.text}>Bill: ${billValue}</Text>
        )}
      </View>
      <View style={styles.amountText}>
        {billAmount === "Enter Bill Amount" ? (
          <Text>$0</Text>
        ) : (
          <Text style={styles.text}>Tip: ${tipValue.toFixed(2)}</Text>
        )}
      </View>
      <View style={styles.tipForm}>
        <TipForm
          style={styles.tipForm}
          value={tipAmount}
          setValue={setTipAmount}
          min={min}
          max={max}
        />
      </View>
      <View>
        <TipRange min={min} max={max} setMin={setMin} setMax={setMax} />
      </View>
      <View style={styles.costInput}>
        <CostInput billAmount={billAmount} onChange={onChange} />
      </View>
    </View>
  );
};

export default TipCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  text: {
    fontFamily: "System",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  tipText: {
    fontFamily: "System",

    marginTop: 20,
    alignItems: "center",
    flex: 1,
  },
  amountText: {
    fontFamily: "System",

    margin: 10,
    alignItems: "center",
    flex: 1,
  },
  tipForm: {
    flex: 2,
  },
  costInput: {
    flex: 4,
  },
});
