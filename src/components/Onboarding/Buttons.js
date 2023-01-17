import { StyleSheet, View } from "react-native";

import React from "react";

import CommonButton from "../../common/CommonButton";

const Buttons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CommonButton
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        backgroundColor={"Primary1_light"}
        buttonText={"Create a new account"}
      />
      <CommonButton
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        backgroundColor={"Neutral9"}
        textColor={"Primary1_light"}
        buttonText={"Sign in"}
        borderWidth={0.5}
        borderColor={"Primary1_light"}
      />
      <CommonButton
        backgroundColor={"neutral9"}
        textColor={"Neutral0"}
        borderWidth={0.5}
        buttonText={"Continue with Google"}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
