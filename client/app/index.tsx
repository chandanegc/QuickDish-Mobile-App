import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "@/theme";
import { ScrollView } from "react-native";
import Categories from "@/components/Categories";
import FeatureRow from "@/components/FeatureRow";
import { feature } from "@/assets/helper";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300 ">
          <Feather name="search" size={25} color="gray" />
          <TextInput placeholder="Restaurant" className="flex-1 ml-2" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Feather name="map-pin" size={20} color="gray" />
            <Text className="text-gray-500">India</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-2 m-1 rounded-full"
        >
          <Feather name="sliders" size={25} color="white" />
        </View>
      </View>

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
