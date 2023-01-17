import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CommonText from "../../../common/CommonText";

const FeaturedRestaurants = ({ title }) => {
  return (
    <View>
      <CommonText
        textAlign="start"
        fontFamily="Semibold"
        textColor="Neutral0"
        fontSize={18}
      >
        {title}
      </CommonText>
    </View>
  );
};

export default FeaturedRestaurants;

const styles = StyleSheet.create({});
