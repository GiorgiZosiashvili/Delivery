import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { COLORS } from "../const";

import { getTopInset } from "rn-iphone-helper";

import Header from "../components/Home/Header";

import Categories from "../components/Home/Content/Categories";

import FeaturedRestaurants from "../components/Home/Content/FeaturedRestaurants";

import OrderAgainFrom from "../components/Home/Content/OrderAgainFrom";

import AllRestaurants from "../components/Home/Content/AllRestaurants";

import React, { useState, useEffect } from "react";

import CommonSearch from "../common/CommonSearch";

const HomeScreen = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY =
    "-RwTTOnIp2sB1nCVWAia-vgDpfwSAMNgMcay-MYALoYjIZJW4MRUXEKsRcMPsFCS4nabJWSQVLxVSXegrvm04ql8p_JnwZm-2KTA7rMq8RW2oHOQcOlX21y4N4e-Y3Yx";

  const getRestaurantFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYork`;
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
    getRestaurantFromYelp();
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} restaurantData={restaurantData} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.navigate("Search")}>
          <View pointerEvents="none">
            <CommonSearch value={input} placeholder="Search for restaurant" />
          </View>
        </Pressable>
        <Categories title={"Categories"} />
        <FeaturedRestaurants title={"Featured Restaurants"} />
        <OrderAgainFrom title={"Order Again From"} />
        <AllRestaurants
          restaurantData={restaurantData}
          title={"All restaurants"}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
  },
});
