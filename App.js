import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./containers/HomeScreen";
import TipCalculator from "./containers/TipCalculator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tip Calculator" component={TipCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
