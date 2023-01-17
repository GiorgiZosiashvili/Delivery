import { StyleSheet, View } from "react-native";

import Navigation from "./src/navigation/Navigation";

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import OnBoardingScreen from "./src/screens/OnBoardingScreen";

import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [onboardingCompleted, setOnBoardingCompleted] = useState(true);
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/AvertaStd-Regular.ttf"),
    Semibold: require("./assets/fonts/AvertaStd-Semibold.ttf"),
    IconMoon: require("./assets/fonts/icomoon.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const storeData = async (onboardingCompleted) => {
    try {
      await AsyncStorage.setItem("OnBoarding", onboardingCompleted);
    } catch (e) {
      ("Error Bitch!!!");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("OnBoarding");

      if (value !== null) {
        storeData();
      }
    } catch (e) {
      // error reading value
    }
  };

  getData();

  return onboardingCompleted ? (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="dark" />
    </View>
  ) : (
    <OnBoardingScreen {...{ setOnBoardingCompleted }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
