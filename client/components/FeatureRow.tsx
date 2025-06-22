import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '@/theme'
import RestaurentCard from './restaurentCard';

interface FeatureRowProps {
  title: string;
  description: string;
  restaurants: any[]; // Replace 'any' with a more specific type if available
}

export default function FeatureRow({title, description, restaurants}: FeatureRowProps) {
  return (
    <View>
      <View className='flex-row justify-between items-center px-4'>
        <View>
            <Text className='font-bold text-lg'>{title}</Text>
            <Text className='text-gray-500 text-xs'>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className='font-semibold'>
                See All
            </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
        paddingHorizontal: 15,
       }}
       className='overflow-visible py-5'
      >
         {
            restaurants.map((restaurant, index) => {    
                return (
                    <RestaurentCard
                    key={index}
                    item={restaurant}
                    />
                )}
            )
         }
      </ScrollView>
    </View>
  )
}