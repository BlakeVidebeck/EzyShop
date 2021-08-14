import React from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";

import { Product, Item } from "../../components/Product";
import { Subtotal } from "../../components/Subtotal";
import { useAppSelector } from "../../hooks";

export const CartScreen: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <View style={Styles.background}>
      <SafeAreaView />
      <Subtotal cart={cart} />
      <FlatList<Product>
        data={cart}
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
