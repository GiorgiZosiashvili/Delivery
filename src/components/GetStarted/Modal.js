import { Image, StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";

import { IMAGES, COLORS } from "../../const";

import { SCREEN_HEIGHT, WINDOW_WIDTH } from "../../utilities/Dimensions";

import CommonButton from "../../common/CommonButton";

const Modal = () => {
  const [modal, setModal] = useState(true);

  return modal ? (
    <View style={styles.container}>
      <View style={styles.modal_container}>
        <Image source={IMAGES.location} />
        <Text style={styles.title}>Location permission</Text>
        <Text style={styles.description}>
          Allow location access to know your address and provide the best
          experience
        </Text>
        <CommonButton
          onPress={() => {
            setModal(false);
          }}
          backgroundColor={"Neutral9"}
          textColor={"Primary1_light"}
          buttonText={"Allow access"}
          borderWidth={0.5}
          borderColor={"Primary1_light"}
          width={"100%"}
        />
      </View>
    </View>
  ) : null;
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 24,
  },
  modal_container: {
    top: SCREEN_HEIGHT / 2 - SCREEN_HEIGHT / 4,
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT / 2,
    width: "100%",
    alignSelf: "center",
    backgroundColor: COLORS.Neutral9,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.Neutral0,
    marginTop: 24,
  },
  description: {
    textAlign: "center",
    width: 268,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.Neutral2,
    marginTop: 8,
    marginBottom: 15,
  },
});
