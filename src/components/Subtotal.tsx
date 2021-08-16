import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { fontSizes, space } from "../infrastructure/styles";
import { Product } from "./Product";

interface Props {
  cart: Product[];
}

export const Subtotal: React.FC<Props> = ({ cart }) => {
  const subtotal = cart.reduce((amount, item) => amount + item.qty, 0);

  return (
    <View>
      {cart.length === 0 ? (
        <View style={Styles.container}>
          <Text>Your cart is empty</Text>
        </View>
      ) : (
        <View style={Styles.container}>
          <Text style={Styles.cart}>Subtotal {subtotal} Items</Text>
          <Text style={Styles.price}>
            $
            {cart
              .reduce(
                (amount: number, item: Product) =>
                  amount + item.qty * item.price,
                0
              )
              .toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  cart: {
    fontSize: fontSizes.title,
  },
  price: {
    fontSize: fontSizes.body,
    padding: space[1],
  },
});
