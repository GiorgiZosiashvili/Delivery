import { FlatList, StyleSheet, View } from "react-native";

import React, { useRef } from "react";

import { getBottomInset, getTopInset } from "rn-iphone-helper";

import { COLORS, ONBOARDING_DATA } from "../const";

import { WINDOW_WIDTH } from "../utilities/Dimensions";

import OnBoardingComp from "../components/Onboarding/OnBoardingComp";

const OnBoardingScreen = ({ setOnBoardingCompleted }) => {
  const onPress = () => {
    const isTrue = currentIndex.current < 2;
    if (isTrue) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: ++currentIndex.current,
      });
    } else {
      return;
    }
  };
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  const _onMomentumScrollEnd = (event) => {
    currentIndex.current = event.nativeEvent.contentOffset.x / WINDOW_WIDTH;
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        pagingEnabled
        horizontal={true}
        data={ONBOARDING_DATA}
        bounces={false}
        renderItem={({ item, index }) => (
          <OnBoardingComp
            {...{ item, index, setOnBoardingCompleted, onPress }}
          />
        )}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
    paddingBottom: getBottomInset() + 10,
  },
});
