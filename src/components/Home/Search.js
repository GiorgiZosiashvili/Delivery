import { Pressable, StyleSheet } from "react-native";

import React from "react";

import CommonSearch from "../../common/CommonSearch";

const Search = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Search");
      }}
    >
      <CommonSearch />
    </Pressable>
  );
};

export default Search;

const styles = StyleSheet.create({});
