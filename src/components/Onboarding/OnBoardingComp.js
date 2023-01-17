import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CommonButton from "../../common/CommonButton";
import { COLORS, IMAGES } from "../../const";
import { WINDOW_WIDTH } from "../../utilities/Dimensions";

const OnBoardingComp = ({ onPress, index, setOnBoardingCompleted, item }) => {
  const CIRCLE_ARR = new Array(3).fill("");

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("OnBoarding", JSON.stringify(true));
    } catch (e) {
      ("Error Bitch!!!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.comp_container}>
        {index !== 2 ? (
          <TouchableOpacity
            onPress={() => {
              setOnBoardingCompleted(true);
              storeData();
            }}
            style={styles.touchable}
          >
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <Text />
        )}
        <Image
          resizeMethod="auto"
          source={IMAGES[item.image]}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.circle_container}>
          {CIRCLE_ARR.map((item, i) => {
            const isActive = index === i;
            return (
              <View
                key={i}
                style={[{ opacity: isActive ? 1 : 0.3 }, styles.circle]}
              />
            );
          })}
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <CommonButton
        textColor={"Neutral9"}
        backgroundColor={"Primary1_light"}
        buttonText={index === 2 ? "Get started" : "Next"}
        onPress={() => {
          if (index === 2) {
            setOnBoardingCompleted(true);
            storeData();
          } else {
            onPress();
          }
        }}
      />
    </View>
  );
};

export default OnBoardingComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WINDOW_WIDTH,
    paddingHorizontal: 24,
  },
  comp_container: {
    height: "64%",
    borderRadius: 12,
    backgroundColor: COLORS.Primary2,
    justifyContent: "space-evenly",
  },
  touchable: {
    alignSelf: "flex-end",
    marginRight: 24,
  },
  skip_text: {
    fontSize: 14,
    color: COLORS.Primary1_light,
    lineHeight: 20,
  },
  image: {
    alignSelf: "center",
  },
  circle_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 33,
    alignSelf: "center",
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.Primary1_light,
    borderRadius: 100,
  },
  title: {
    width: 246,
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: COLORS.Neutral0,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 42,
    fontFamily: "Semibold",
  },
  description: {
    width: 266,
    alignSelf: "center",
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: COLORS.Neutral2,
    marginBottom: 48,
    fontFamily: "Regular",
  },
});
