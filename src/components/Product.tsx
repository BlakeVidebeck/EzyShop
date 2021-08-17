import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { removeFromCart, addToCart } from "../features/cart/CartSlice";
import { useAppDispatch } from "../hooks";
import { space, fontSizes } from "../infrastructure/styles/";

export interface Product {
  name: string;
  price: number;
  qty?: number;
}

interface Props {
  product: Product;
  checkout?: boolean;
}

export const Item: React.FC<Props> = ({ product, checkout }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{product.name}</Text>
      {checkout ? (
        <>
          <View style={Styles.totalContainer}>
            <View style={Styles.total}>
              <Text>Price: </Text>
              <Text>${Number(product.price).toFixed(2)}</Text>
            </View>
            <View style={Styles.total}>
              <Text>Qty: </Text>
              <Text>{product.qty}</Text>
            </View>
            <View style={Styles.total}>
              <Text>Total: </Text>
              <Text>${Number(product.price * product.qty).toFixed(2)}</Text>
            </View>
          </View>

          <Button
            title="Remove from cart"
            onPress={() => dispatch(removeFromCart(product.name))}
          />
        </>
      ) : (
        <>
          <View style={Styles.totalContainer}>
            <View style={Styles.total}>
              <Text>Price: </Text>
              <Text>${Number(product.price).toFixed(2)}</Text>
            </View>
          </View>
          <Button
            title="Add to cart"
            onPress={() => dispatch(addToCart(product))}
          />
        </>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: space[2],
    margin: space[1],
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    fontSize: fontSizes.title,
  },
  totalContainer: {
    width: 100,
    marginTop: space[2],
  },
  total: {
    fontSize: fontSizes.body,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space[1],
  },
});
