import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Card } from "react-native-paper";

import * as fonts from "../../infrastructure/styles/fonts";
import * as spacing from "../../infrastructure/styles/spacing";

interface Product {
  name: string;
  price: number;
}

interface Props {
  product: Product;
}

export const Item: React.FC<Props> = ({ product }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{product.name}</Text>
      <Text style={Styles.price}>${product.price}</Text>
      <Button title="Add to cart" onPress={() => null} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: spacing.space[3],
    margin: spacing.space[1],
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    fontSize: fonts.fontSizes.title,
  },
  price: {
    fontSize: fonts.fontSizes.caption,
    padding: spacing.space[1],
  },
});
