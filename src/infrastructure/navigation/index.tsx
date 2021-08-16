import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

import { setCart } from "../../features/cart/CartSlice";
import { CartScreen } from "../../features/checkout/CartScreen";
import { CheckoutScreen } from "../../features/checkout/CheckoutScreen";
import { ShopScreen } from "../../features/shop/ShopScreen";
import { useAppSelector, useAppDispatch } from "../../hooks";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Shop: "pricetag",
  Cart: "cart",
  Payment: "card",
};
interface TabBar {
  size: number;
  color: string;
}

// TODO fix
const createScreenOptions = ({ route }: any) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }: TabBar) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const Navigation = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cart]);

  const loadCart = async () => {
    try {
      const value = await AsyncStorage.getItem(`@cart`);
      if (value !== null) {
        dispatch(setCart(JSON.parse(value)));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const saveCart = async () => {
    try {
      const cartJSON = JSON.stringify(cart);
      await AsyncStorage.setItem(`@cart`, cartJSON);
    } catch (error) {
      console.log(error.message);
    }
  };

  const subtotal = cart.reduce((amount, item) => amount + item.qty, 0);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ tabBarBadge: subtotal }}
        />
        <Tab.Screen name="Payment" component={CheckoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
