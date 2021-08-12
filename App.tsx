// import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";

import { checkoutProducts } from "./mockItems";
import { CheckoutScreen } from "./src/features/checkout/CheckoutScreen";
import { ShopScreen } from "./src/features/shop/ShopScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Shop: "pricetag",
  Checkout: "cart",
};

// TODO fix
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ tabBarBadge: checkoutProducts.length }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
