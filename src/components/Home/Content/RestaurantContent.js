import { StyleSheet, View, Image } from "react-native";
import React from "react";
import CommonText from "../../../common/CommonText";
import CommonIcon from "../../../common/CommonIcon";

const RestaurantContent = ({ restaurantData }) => {
  return (
    <View>
      {restaurantData &&
        restaurantData?.map((localRestaurant, i) => {
          return (
            <View style={styles.content_container} key={i}>
              <View style={{ justifyContent: "center" }}>
                {localRestaurant?.image_url ? (
                  <Image
                    blurRadius={localRestaurant.is_closed ? 5 : 0}
                    style={styles.image}
                    source={{ uri: localRestaurant?.image_url }}
                  />
                ) : null}

                {localRestaurant.is_closed ? (
                  <CommonText
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                    }}
                    fontSize={12}
                    fontFamily="Semibold"
                    textColor="Neutral9"
                  >
                    Closed
                  </CommonText>
                ) : null}
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  marginLeft: 12,
                }}
              >
                <CommonText
                  fontFamily="Semibold"
                  fontSize={16}
                  textColor="Neutral0"
                  textAlign="left"
                >
                  {localRestaurant.name}
                </CommonText>
                <View style={styles.view}>
                  <CommonIcon
                    iconName="star"
                    textColor="Accent1"
                    fontSize={14}
                  />
                  <CommonText
                    fontSize={12}
                    fontFamily="Regular"
                    textColor="Neutral0"
                    style={{ marginHorizontal: 5 }}
                  >
                    {localRestaurant.rating}
                  </CommonText>
                  <CommonText
                    fontFamily="Regular"
                    fontSize={12}
                    textColor="Neutral2"
                    textAlignVertical="center"
                  >
                    ({localRestaurant.review_count})
                  </CommonText>
                  <CommonIcon
                    iconName="dot"
                    fontSize={3}
                    textColor="Neutral4"
                    style={{ marginHorizontal: 5 }}
                  />
                  <CommonIcon
                    iconName="location"
                    textColor="Neutral3"
                    style={{ marginHorizontal: 5 }}
                  />
                  <CommonText textColor="Neutral2" fontSize={12}>
                    {localRestaurant.location.address1}
                  </CommonText>
                </View>
                <View style={styles.view}>
                  {localRestaurant.categories.map((category, i) => {
                    return (
                      <View key={i} style={styles.view}>
                        <CommonText
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          textColor="Neutral5_dark"
                        >
                          {category.title}
                        </CommonText>
                        {localRestaurant.categories.length - 1 !== i ? (
                          <CommonIcon
                            iconName="dot"
                            textColor="Neutral5"
                            fontSize={3}
                            style={{ marginHorizontal: 5 }}
                          />
                        ) : null}
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default RestaurantContent;

const styles = StyleSheet.create({
  content_container: {
    flexDirection: "row",
    marginTop: 16,
  },

  image: {
    width: 92,
    height: 92,
    borderRadius: 12,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
});
