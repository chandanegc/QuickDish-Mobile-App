import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Pizza",
    image: require("../assets/images/categories/icons8-cupcake-emoji-96.png"),
    description: "Delicious cheesy pizzas with a variety of toppings."
  },
  {
    id: 2,
    title: "Pasta",
    image: require("../assets/images/categories/icons8-spaghetti-96.png"),
    description: "Classic Italian pastas in creamy or tomato-based sauces."
  },
  {
    id: 3,
    title: "Burgers",
    image: require("../assets/images/categories/icons8-cupcake-emoji-96.png"),
    description: "Juicy burgers with fresh veggies and tasty sauces."
  },
  {
    id: 4,
    title: "Desserts",
    image: require("../assets/images/categories/icons8-cupcake-emoji-96.png"),
    description: "Sweet treats including cakes, cupcakes, and pastries."
  },
  {
    id: 5,
    title: "Drinks",
    image: require("../assets/images/categories/icons8-cupcake-emoji-96.png"),
    description: "Refreshing beverages, juices, and soft drinks."
  },
];

export default function Categories() {
  const [activeCategory, setIsActiveCategory] = useState<number | null>(null);
  return (
    <View className="m-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setIsActiveCategory(category.id)}
                className={"p-1 rounded-full shadow " + btnClass}
              >
                <Image
                  source={category.image}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
