import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { checkoutProducts } from "../../../mockItems";
import { Product, Item } from "../../components/Product";
import { Subtotal } from "../../components/Subtotal";

const getCartTotal = (cart: any) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const subtotal = getCartTotal(checkoutProducts);

export const CheckoutScreen: React.FC = () => {
  return (
    <View style={Styles.background}>
      <Subtotal subtotal={subtotal} />
      <FlatList<Product>
        data={checkoutProducts}
        renderItem={({ item }) => {
          return <Item key={item.name} product={item} checkout />;
        }}
        keyExtractor={(product) => product.name}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
