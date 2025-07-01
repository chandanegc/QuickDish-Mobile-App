import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/slice/cartSlice";

export default function Delivery() {
  const navigation = useNavigation<any>();
  const mapRef = useRef<MapView>(null);
  const restaurantDetails = {
    lat: 26.850417,
    lng: 81.007494,
    name: "Choco Bar",
    description: "Delicious ice cream",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());

    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: restaurantDetails.lat,
          longitude: restaurantDetails.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      );
    }
  }, []);

  const handleCall = () => {
    Linking.openURL(`tel:${1234567890}`);
  };

  const handleCancel = () => {
    navigation.navigate("index");
  };

  return (
    <View className="flex-1">
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          mapType="standard"
          initialRegion={{
            latitude: restaurantDetails.lat,
            longitude: restaurantDetails.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          minZoomLevel={15}
          maxZoomLevel={18}
          loadingEnabled={true}
          moveOnMarkerPress={false}
          loadingIndicatorColor={themeColors.bgColor(1)}
          loadingBackgroundColor="#ffffff"
        >
          <Marker
            title={restaurantDetails.name}
            description={restaurantDetails.description}
            pinColor={themeColors.bgColor(1)}
            coordinate={{
              latitude: restaurantDetails.lat,
              longitude: restaurantDetails.lng,
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

          <Image
            className="w-24 h-24"
            source={require("../assets/delivery-boy.jpg")}
          />
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
              source={require("../assets/delivery-boy.jpg")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="text-white text-sm">Your delivery partner</Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity
              onPress={handleCall}
              className="bg-white p-2 rounded-full"
            >
              <Feather name="phone" color={themeColors.bgColor(1)} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancel}
              className="bg-white p-2 rounded-full"
            >
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
