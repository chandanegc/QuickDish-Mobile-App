import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { themeColors } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectTotal } from "@/slice/cartSlice";

type RootStackParamList = {
  cart: undefined;
  orderPrepairing: undefined;
};

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: any;
}

interface RootState {
  cart: {
    items: CartItem[];
  };
}

export default function Cart() {
  const [groupItems, setGroupItems] = useState<Record<string, CartItem[]>>({});

  const cartItem = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const subTotal = useSelector((state: any) => selectTotal(state));
  const deliveryFee = 30;
  const total = subTotal + deliveryFee;
  const handleDecrease = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  useEffect(() => {
    const items = cartItem.reduce((group: Record<string, CartItem[]>, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupItems(items);
  }, [cartItem]);

  return (
    <View className="bg-white pt-10 flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-5"
        >
          <Feather name="arrow-left" color="white" size={25} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{"Quick Dish"}</Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          className="w-20 m-2 h-20 rounded-full"
          source={require("../assets/images/delivery-boy.gif")}
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {subTotal ? (
          Object.entries(groupItems)?.map(([key, items], index) => {
            const item = items[0];
            return (
              <View
                key={index}
                className="flex-row items-center space-x-3 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
              >
                <Text className="font-bold" style={{ color: themeColors.text }}>
                  {items.length} x
                </Text>
                <Image className="h-16 w-16 rounded-full" source={item.image} />
                <Text className="flex-1 font-bold text-gray-700">
                  {item.name}
                </Text>
                <Text className="font-semibold text-base mr-2">
                  ${item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => handleDecrease(item.id)}
                  className="p-1 rounded-full"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                  <Feather name="minus" size={20} color="white" />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text
            className=" text-center font-extrabold text-xl "
            style={{ color: themeColors.text }}
          >
            Your Cart is Empty
          </Text>
        )}
      </ScrollView>

      {/* Totals */}
      {subTotal ? (
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className="p-6 px-5 rounded-3xl space-y-4"
        >
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">${subTotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">${deliveryFee}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">
              ${total.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 mt-2 rounded-full"
            onPress={() => {
              navigation.navigate("orderPrepairing");
            }}
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
