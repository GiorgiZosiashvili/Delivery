import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

import CommonText from "../../../common/CommonText";

import CATEGORIESDATA from "../../../const/Data/CategoriesData";

import { COLORS, IMAGES } from "../../../const";
import { SCREEN_WIDTH } from "../../../utilities/Dimensions";
const itemWidth = (SCREEN_WIDTH - 24 * 2 - 30) / 3;

const firstItemWidth = SCREEN_WIDTH - 24 * 2 - itemWidth - 15;
const Categories = ({ title }) => {
  return (
    <View style={styles.container}>
      <CommonText
        textAlign="start"
        fontFamily="Semibold"
        textColor="Neutral0"
        fontSize={18}
      >
        {title}
      </CommonText>
      <View style={styles.content_container}>
        {CATEGORIESDATA.map((item, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={i}
              style={[
                styles.content,
                { width: i === 0 ? firstItemWidth : itemWidth },
                { marginLeft: i === 0 || i === 2 ? 0 : 15 },
              ]}
            >
              <Image style={styles.image} source={IMAGES[item.image]} />
              <CommonText
                fontFamily="Regular"
                textColor="Neutral0"
                fontSize={12}
              >
                {item.title}
              </CommonText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  image: {
    width: 32,
    height: 32,
    alignSelf: "center",
  },
  content: {
    backgroundColor: COLORS.Neutral8,
    marginVertical: 7.5,
    borderRadius: 8,
    height: 80,
    justifyContent: "center",
  },
  content_container: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 8.5,
  },
});
