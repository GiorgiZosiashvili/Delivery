import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

import CommonText from "../../../common/CommonText";

import CommonIcon from "../../../common/CommonIcon";

import RestaurantContent from "./RestaurantContent";
import { getBottomInset } from "rn-iphone-helper";

const AllRestaurants = ({ title, restaurantData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <CommonText
          textAlign="start"
          fontFamily="Semibold"
          textColor="Neutral0"
          fontSize={18}
        >
          {title}
        </CommonText>
        <CommonIcon iconName="settings" fontSize={18} textColor="Neutral0" />
      </View>
      <RestaurantContent restaurantData={restaurantData} />
    </View>
  );
};

export default AllRestaurants;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: getBottomInset(),
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
