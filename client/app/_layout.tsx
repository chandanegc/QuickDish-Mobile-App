import "../global.css"; // Ensure you're using Web-compatible Expo Router setup if using CSS
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="path/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="restaurent"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: false,
          // presentation:'modal'
        }}
      />
      <Stack.Screen
        name="orderPrepairing"
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />

      <Stack.Screen
        name="deliveryBoyLocation"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
