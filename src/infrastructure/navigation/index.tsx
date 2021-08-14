import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { CartScreen } from "../../features/checkout/CartScreen";
import { ShopScreen } from "../../features/shop/ShopScreen";
import { useAppSelector } from "../../hooks";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Shop: "pricetag",
  Cart: "cart",
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

export const Navigation = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ tabBarBadge: cart.length }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
