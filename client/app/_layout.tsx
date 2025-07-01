import "../global.css";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen
          name="path/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="currentLocation"
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
          name="deliveryBoyLocation"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}
