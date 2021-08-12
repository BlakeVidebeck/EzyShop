import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { checkoutProducts } from "../../../mockItems";
import { Product, Item } from "../../components/Product";

export const CheckoutScreen: React.FC = () => {
  return (
    <View style={Styles.background}>
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
