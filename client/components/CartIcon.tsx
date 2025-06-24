import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { themeColors } from "@/theme";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTotal } from "@/slice/cartSlice";

type RootStackParamList = {
  cart: undefined;
};

interface RootState {
  cart: {
    items: {
      id: string;
      name: string;
      price: number;
      image: any;
    }[];
  };
}

interface CartIconProps {
  itemCount?: number;
  totalPrice?: number;
  onPress?: () => void;
}

export default function CartIcon({}: CartIconProps) {
  const itemCount = useSelector((state: RootState) => state.cart.items.length);
  const totalPrice = useSelector((state: RootState) => selectTotal(state));

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!itemCount) return <></>;

  return (
    <View
      style={[styles.container, { bottom: Platform.OS === "android" ? 25 : 5 }]}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("cart")}
        style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
      >
        <View style={styles.badge}>
          <Text style={styles.text}>{itemCount}</Text>
        </View>

        <Text style={[styles.text, styles.centerText]}>View Cart</Text>

        <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    zIndex: 50,
  },
  button: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badge: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 999,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    fontWeight: "800",
    color: "white",
    fontSize: 18,
  },
  centerText: {
    flex: 1,
    textAlign: "center",
  },
});
