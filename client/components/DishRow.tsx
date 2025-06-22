import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { themeColors } from "@/theme";
import { Feather } from "@expo/vector-icons";

type DishItem = {
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

type DishRowProps = {
  item: DishItem;
};

export default function DishRow({ item }: DishRowProps) {
  return (
    <View className="flex-row items-center bg-white rounded-3xl shadow-2xl mb-3 mx-2 p-3 space-x-4">
      <Image
        style={{ height: 100, width: 100, borderRadius: 16 }}
        source={item.image}
      />
      <View className="flex-1 space-y-3">
        <View>
          <Text className="text-xl font-semibold">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Feather name="plus" size={20} color={"white"} />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Feather name="minus" size={20} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
