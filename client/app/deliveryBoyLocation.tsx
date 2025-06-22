import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import restaurent from "./restaurent";
import { themeColors } from "@/theme";
import { Feather } from "@expo/vector-icons";

export default function Delivery() {
  const navigation = useNavigation();
  const restaurentDetails = restaurent?.[0] ?? {
    lat: 26.850417,
    lng: 81.007494,
    name: "Choco Bar",
    description: "Delicious ice cream",
  };

  return (
    <View className="flex-1">
      <View style={styles.container}>
        <MapView
          style={styles.map}
          mapType="standard"
          initialRegion={{
            latitude: restaurentDetails.lat,
            longitude: restaurentDetails.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            title={restaurentDetails.name}
            description={restaurentDetails.description}
            pinColor={themeColors.bgColor(1)}
            coordinate={{
              latitude: restaurentDetails.lat,
              longitude: restaurentDetails.lng,
            }}
          />
        </MapView>
      </View>

      {/* Bottom Panel */}
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="text-sm text-gray-500 font-semibold">
              Your order is on its way!
            </Text>
          </View>

          <Image className="w-24 h-24" source={require("../assets/images/delivery-boy.gif")} />
        </View>

        <View
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-5"
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/delivery-boy.gif")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-white text-sm">Your delivery partner</Text>
          </View>

          {/* Icons with gap */}
          <View className="flex-row gap-2">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather name="phone" color={themeColors.bgColor(1)} size={30} />
            </TouchableOpacity>
            <TouchableOpacity  className="bg-white  p-2 rounded-full">
              <Feather name="x" color="red" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
