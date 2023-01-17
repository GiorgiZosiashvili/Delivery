import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../const";
import ICONS from "../const/Icons";

const CommonIcon = ({
  iconName,
  textColor,
  fontSize,
  style,
  textAlign,
  marginTop,
  onPress,
}) => {
  const _style = {
    color: COLORS[textColor],
    fontSize: fontSize,
    textAlign: textAlign,
    marginTop: marginTop,
  };
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.icon, _style, style]}>{ICONS[iconName]}</Text>
    </Pressable>
  );
};

export default CommonIcon;

const styles = StyleSheet.create({
  icon: {
    fontFamily: "IconMoon",
    textAlign: "center",
  },
});
