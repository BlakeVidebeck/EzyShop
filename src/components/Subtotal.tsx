import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { fontSizes, space } from "../infrastructure/styles";

interface Props {
  subtotal: number;
}

export const Subtotal: React.FC<Props> = ({ subtotal }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.cart}>Cart Subtotal</Text>
      <Text style={Styles.price}>${subtotal}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 150,
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
