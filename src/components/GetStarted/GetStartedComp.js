import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

import { COLORS, GETSTARTED_DATA, IMAGES } from "../../const";

import Buttons from "../Onboarding/Buttons";

const GetStartedComp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {GETSTARTED_DATA.map((item, index) => {
        return (
          <View key={index} style={styles.content_container}>
            <Image style={styles.image} source={IMAGES.background} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        );
      })}
      <Buttons {...{ navigation }} />
    </View>
  );
};

export default GetStartedComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  content_container: {
    height: "75%",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: COLORS.Secondary2_light,
  },
  image: {
    width: "100%",
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    color: COLORS.Neutral9,
    fontSize: 24,
    lineHeight: 29,
    paddingHorizontal: 24,
    fontFamily: "Semibold",
  },
  description: {
    width: "100%",
    color: COLORS.Neutral5,
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 24,
    fontFamily: "Regular",
  },
});
