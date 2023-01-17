import { StyleSheet, Text, View } from "react-native";

import React from "react";

import { getBottomInset, getTopInset } from "rn-iphone-helper";

import { COLORS } from "../../const";

import CommonArrow from "../../common/CommonArrow";
import SignInComp from "../../components/SignIn/SignInComp";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CommonArrow
        iconName={"arrow_left"}
        textColor={"Primary1_dark"}
        backgroundColor={"Primary2"}
        onPress={() => {
          navigation.navigate("GetStarted");
        }}
      />
      <SignInComp {...{ navigation }} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
    paddingBottom: getBottomInset() + 10,
  },
});
