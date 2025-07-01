import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategory } from "@/api";
import { urlFor } from "@/sanity";


export default function Categories() {
  const [activeCategory, setIsActiveCategory] = useState<number | null>(null);
  const [categories, setCategoties] = useState(null);
  useEffect(()=>{
    getCategory().then(data=>{
      setCategoties(data);
    })
  },[])

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
        {categories?.map((category, index) => {
          let isActive = category._id === activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
            
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setIsActiveCategory(category._id)}
                className={"p-1 rounded-full shadow " + btnClass}
              >
                <Image
                  source={{ uri: urlFor(category.image).url() }}
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
