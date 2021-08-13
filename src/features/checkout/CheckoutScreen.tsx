import React from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";

import { Product, Item } from "../../components/Product";
import { Subtotal } from "../../components/Subtotal";
import { useAppSelector } from "../../hooks";

export const CheckoutScreen: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const getCartTotal = (cart: any) =>
    cart?.reduce((amount: number, item: Product) => item.price + amount, 0);

  const subtotal = getCartTotal(cart);

  return (
    <View style={Styles.background}>
      <SafeAreaView />
      <Subtotal subtotal={subtotal} />
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
