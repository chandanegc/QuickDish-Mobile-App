import { feature } from "@/assets/helper";
import Categories from "@/components/Categories";
import FeatureRow from "@/components/FeatureRow";
import QuickDishLoader from "@/components/Loader";
import { themeColors } from "@/theme";
import { getCurrentLocationName } from "@/utils/getCurrentLocation";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [loader, setLoader] = useState(false);
  const [locationName, setLocationName] = useState<string | null>(null);

  const fetchLocation = async () => {
    try {
      setLoader(true);
      const name = await getCurrentLocationName();
      const arr = name?.location?.split(",");
      const location = arr && arr.length > 0 ? arr[0] : null;
      setLocationName(location);
      if (location) {
        await AsyncStorage.setItem("location", location);
      }
    } catch (error) {
      alert("Location not found");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const loadSavedLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("location");
        if (savedLocation) {
          setLocationName(savedLocation);
        } else {
          fetchLocation();
        }
      } catch (error) {
        console.error("Error loading location", error);
        fetchLocation();
      }
    };

    loadSavedLocation();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300">
          <Feather name="search" size={25} color="gray" />
          <TextInput placeholder="Restaurant" className="flex-1 ml-2" />
          <TouchableOpacity
            onPress={fetchLocation}
            className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300"
          >
            <Feather name="map-pin" size={20} color={themeColors.text} />
            <Text className="text-gray-500">
              {locationName || "Current location"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-2 m-1 rounded-full"
        >
          <Feather name="sliders" size={25} color="white" />
        </View>
      </View>
      {loader && <QuickDishLoader />}
      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />
        <View className="mt-5">
          {[feature, feature].map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
