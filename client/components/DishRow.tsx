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
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "@/slice/cartSlice";
import { urlFor } from "@/sanity";

type DishItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

type DishRowProps = {
  item: DishItem;
};

function DishRow({ item }: DishRowProps) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );
  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id })); 
  };
  return (
    <View className="flex-row items-center bg-white rounded-3xl shadow-2xl mb-3 mx-2 p-3 space-x-4">
      <Image
        style={{ height: 80, width: 80, borderRadius: 16 }}
        source={{ uri: urlFor(item.image).url() }}
        className="mr-5"
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
              onPress={() => handleIncrease()}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Feather name="plus" size={20} color={"white"} />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              onPress={() => handleDecrease()}
              className="p-1 rounded-full"
              disabled={!totalItems.length}
              style={{
                backgroundColor: themeColors.bgColor(
                  totalItems.length ? 1 : 0.5
                ),
              }}
            >
              <Feather name="minus" size={20} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default React.memo(DishRow);