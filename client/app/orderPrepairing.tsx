import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  orderPrepairing: undefined;
  deliveryBoyLocation: undefined;
  // add other routes here if needed
}; 

export default function OrderPrepairingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("deliveryBoyLocation");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FBFBFB",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/delivery-boy.gif")}
        style={{ width: 350, height: 300 }}
        resizeMode="cover"
      />
    </View>
  );
}
