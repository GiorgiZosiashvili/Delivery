import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../const";
import { getTopInset } from "rn-iphone-helper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utilities/Dimensions";

const MapScreen = ({ route }) => {
  const { restaurantData } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.73061,
          longitude: -73.995242,
          latitudeDelta: 0.2,
          longitudeDelta: 0.25,
        }}
        zoomEnabled
      >
        {restaurantData?.map((marker, index) => {
          console.log(marker);
          return (
            <Marker
              key={index}
              coordinate={{ ...marker.coordinates }}
              title={marker.title}
              description={marker.description}
            ></Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Neutral9,
    paddingTop: getTopInset(),
    paddingHorizontal: 24,
    alignItems: "flex-start",
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
});
