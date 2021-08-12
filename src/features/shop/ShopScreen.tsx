import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { products } from "../../../mockItems";
import { Product, Item } from "../../components/Product";

export const ShopScreen: React.FC = () => {
  return (
    <View style={Styles.background}>
      <FlatList<Product>
        data={products}
        renderItem={({ item }) => {
          return <Item key={item.name} product={item} />;
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
