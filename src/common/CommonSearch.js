import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../const";
import CommonIcon from "../common/CommonIcon";

const CommonSearch = ({
  placeholder = "Search restaurant name",
  value,
  onChangeText,
  style,
  setInput,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ flexDirection: "row" }}>
        <CommonIcon
          style={{ marginRight: 13 }}
          iconName="search"
          textColor="Neutral0"
          fontSize={16}
        />
        <TextInput
          autoCorrect={false}
          value={value}
          placeholderTextColor={COLORS.Neutral2}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
      {value?.length !== 0 ? (
        <CommonIcon
          onPress={() => {
            setInput("");
          }}
          textColor="Neutral2"
          iconName="close"
          fontSize={16}
        />
      ) : (
        <CommonIcon fontSize={16} />
      )}
    </View>
  );
};

export default CommonSearch;

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexGrow: 1,
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: COLORS.Neutral7,
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },

  input: {
    color: COLORS.Neutral0,
    fontSize: 14,
    fontFamily: "Regular",
    width: 200,
  },
});
