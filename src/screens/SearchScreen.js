import { Image, ScrollView, StyleSheet, View } from "react-native";

import React, { useEffect, useState } from "react";

import CommonSearch from "../common/CommonSearch";

import { COLORS, IMAGES } from "../const";

import { getTopInset } from "rn-iphone-helper";

import CommonIcon from "../common/CommonIcon";

import CommonText from "../common/CommonText";

import RestaurantContent from "../components/Home/Content/RestaurantContent";

import { SCREEN_HEIGHT } from "../utilities/Dimensions";

const SearchScreen = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [input, setInput] = useState("");
  const API_KEY =
    "-RwTTOnIp2sB1nCVWAia-vgDpfwSAMNgMcay-MYALoYjIZJW4MRUXEKsRcMPsFCS4nabJWSQVLxVSXegrvm04ql8p_JnwZm-2KTA7rMq8RW2oHOQcOlX21y4N4e-Y3Yx";

  const getRestaurantFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${input}&location=NewYork`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${API_KEY} `,
      },
    };
    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();
    setRestaurantData(json.businesses);
  };
  useEffect(() => {
    if (input.length) getRestaurantFromYelp();
  }, [input]);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CommonIcon
          style={{ marginRight: 20, marginLeft: 12 }}
          onPress={() => {
            navigation.goBack();
          }}
          fontSize={15}
          textAlign="center"
          iconName="arrow_left"
        />
        <CommonSearch
          placeholder="Search restaurant"
          input={input}
          setInput={setInput}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </View>

      {input.length >= 3 && !restaurantData.length ? (
        <View style={styles.empty}>
          <Image source={IMAGES.empty} />
          <CommonText textColor="Neutral0" fontSize={18}>
            No results found
          </CommonText>
          <CommonText style={{ width: 280 }} fontSize={14} textColor="Neutral2">
            There are no restaurants with this name. Try new one.
          </CommonText>
        </View>
      ) : null}
      {!input.length ? (
        <CommonText
          style={{ marginVertical: 22 }}
          textColor="Neutral0"
          fontSize={16}
          fontFamily="Semibold"
        >
          Recent searches
        </CommonText>
      ) : null}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <RestaurantContent restaurantData={restaurantData} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
    paddingHorizontal: 24,
    alignItems: "flex-start",
  },
  empty: {
    paddingVertical: 24,
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    top: SCREEN_HEIGHT / 2 - 182,
    width: 280,
    height: 364,
  },
});
