// import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";

import { CheckoutScreen } from "./src/features/checkout/CheckoutScreen";
import { ShopScreen } from "./src/features/shop/ShopScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
