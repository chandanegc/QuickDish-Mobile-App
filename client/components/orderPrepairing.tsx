import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  orderPrepairing: undefined;
  deliveryBoyLocation: undefined;
};

type OrderPrepairingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "orderPrepairing"
>;

export default function OrderPrepairingScreen() {
  const navigation = useNavigation<OrderPrepairingScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("deliveryBoyLocation");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/delivery-boy.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 350,
    height: 300,
  },
});