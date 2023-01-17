import { StyleSheet, TouchableOpacity } from "react-native";

import React from "react";

import CommonText from "./CommonText";

import { COLORS } from "../const";

const CommonButton = ({
  backgroundColor,
  borderColor,
  textColor,
  onPress,
  buttonText,
  borderWidth,
  height = 46,
  width,
  fontFamily,
  fontSize,
  marginTop,
  ...rest
}) => {
  const _style = {
    backgroundColor: COLORS[backgroundColor],
    borderColor: COLORS[borderColor],
    borderWidth: borderWidth,
    height: height,
    width: width,
    marginTop: marginTop,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, _style]}
      {...rest}
    >
      <CommonText
        fontSize={fontSize}
        fontFamily={fontFamily}
        textColor={textColor}
      >
        {buttonText}
      </CommonText>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
