import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { products } from "../../../mockItems";

export const ShopScreen: React.FC = () => {
  return (
    <View style={Styles.background}>
      <Text>Welcome to the shop screen</Text>
      {products.map((product) => {
        return <Text key={product.name}>{product.name}</Text>;
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "green",
  },
});
