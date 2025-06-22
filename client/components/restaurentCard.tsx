import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "@/theme";
import { useNavigation } from "expo-router";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Restaurant: { [key: string]: any };
};

type Props = {
  item: { [key: string]: any };
};

export default function RestaurentCard({ item }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("path/[id]", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold mt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            {/* <Image className='h-4 w-4' source={require('../assets/images/restaurants/bdcd233971b7c81bf77e1fa4471280eb (1).webp')}/> */}
            <Text className="text-xs">
              <Text className="text-green-700">{item?.stars || "⭐ 4.5"}</Text>
              <Text className="text-gray-700">
                ({item?.reviews || "1000+"} reviews) .{" "}
                <Text className="font-semibold">
                  {item?.category || "Italian"}
                </Text>
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Feather name="map-pin" size={16} color="gray" />
            <Text className="text-xs text-gray-500">
              Nearby. {item?.address || "123 Main St, City, Country"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
