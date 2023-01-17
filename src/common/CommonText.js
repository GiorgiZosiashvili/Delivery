import { Text as RText } from "react-native";
import React from "react";
import { COLORS } from "../const";

const CommonText = ({
  numberOfLines,
  textColor = "Neutral9",
  fontFamily = "Semibold",
  fontSize = 16,
  textAlign = "center",
  textAlignVertical,
  style,
  ...rest
}) => {
  const _style = {
    color: COLORS[textColor],
    lineHeight: 19,
    fontSize: fontSize,
    textAlign: textAlign,
    fontFamily: fontFamily,
    textAlignVertical: textAlignVertical,
  };
  return <RText style={[_style, style]} {...rest} />;
};

export default CommonText;
