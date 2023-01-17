import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

import CommonIcon from "./CommonIcon";
import { COLORS } from "../const";

const CommonArrow = ({ iconName, backgroundColor, textColor, onPress }) => {
  const _style = {
    backgroundColor: COLORS[backgroundColor],
  };
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, _style]}>
      <CommonIcon textColor={textColor} iconName={iconName} />
    </TouchableOpacity>
  );
};

export default CommonArrow;

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
