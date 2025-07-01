import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "@/theme";
import DishRow from "@/components/DishRow";
import CartIcon from "@/components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurent } from "@/slice/restaurentSlice";
import { getDishes } from "@/api";

// ✅ Type for a single dish item
type Dish = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description?: string;
};

// ✅ Define the route params type
type RestaurantParams = {
  id: string;
  image: ImageSourcePropType;
  name: string;
  description: string;
  stars?: string;
  reviews?: string;
  category?: string;
  address?: string;
  dish?: Dish[];
};

export default function RestaurantDetails() {
  const route = useRoute<RouteProp<Record<string, RestaurantParams>, string>>();
  const item = route.params;
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();

  // ✅ Use proper typed useSelector
  const { restaurent } = useSelector((state: any) => state.restaurent);
  const dispatch = useDispatch();

  useEffect(() => {
    getDishes().then((data) => setDishes(data));
    if (item && item.id) {
      dispatch(setRestaurent({ ...item }));
    }
  }, [dispatch, item]);
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Feather
              name="arrow-left"
              color={themeColors.bgColor(1)}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopColor: "#404040",
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            borderWidth: 1,
            borderBottomWidth: 0,
          }}
          className="bg-white mt-[-40] pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item?.name}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Text className="text-xs">
                  <Text className="text-green-700">
                    {item?.stars || "⭐ 4.5"}
                  </Text>
                  <Text className="text-gray-700">
                    {" "}
                    ({item?.reviews || "1000+"} reviews) ·{" "}
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

            <Text className="text-gray-500 mt-2">{item?.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {dishes?.map((dish: Dish, index: number) => (
            <DishRow key={index} item={dish} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
