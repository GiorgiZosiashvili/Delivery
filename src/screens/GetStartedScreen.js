import { StatusBar, StyleSheet, View } from "react-native";

import React from "react";

import GetStartedComp from "../components/GetStarted/GetStartedComp";

import Modal from "../components/GetStarted/Modal";

import { COLORS } from "../const";

import { getBottomInset, getTopInset } from "rn-iphone-helper";

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GetStartedComp {...{ navigation }} />
      <Modal />
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
    paddingBottom: getBottomInset() + 10,
  },
});
