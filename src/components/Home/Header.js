import { StyleSheet, Text, View } from "react-native";

import React from "react";

import { COLORS } from "../../const";

import CommonIcon from "../../common/CommonIcon";

import CommonText from "../../common/CommonText";

const Header = ({ navigation, restaurantData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.icon_container}>
          <CommonIcon fontSize={19} iconName="scooter" textColor={"Neutral9"} />
        </View>
        <View style={styles.delivery_container}>
          <CommonText textColor="Neutral0" fontSize={14} fontFamily="Regular">
            Delivery
          </CommonText>
          <View style={styles.view}>
            <CommonText
              fontSize={16}
              textColor="Neutral0"
              fontFamily="Semibold"
            >
              Atlas Office
            </CommonText>
            <CommonIcon iconName="arrow_down" />
          </View>
        </View>
      </View>
      <View style={styles.view}>
        <CommonIcon
          onPress={() => navigation.navigate("Map", { restaurantData })}
          iconName="map"
          fontSize={20}
          style={{ marginRight: 15 }}
        />
        <CommonIcon iconName="person" fontSize={20} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  icon_container: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.Primary1_dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  delivery_container: {
    flexDirection: "column",
    marginLeft: 12,
    alignItems: "flex-start",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
});
