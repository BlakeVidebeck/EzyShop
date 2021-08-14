import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { addToCart, removeFromCart } from "../features/cart/CartSlice";
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
  const productQty = product.qty ? product.qty : 1;
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(productQty);

  const incrementQty = () => {
    setQty(qty + 1);
    dispatch(addToCart(newProduct));
  };
  const decrementQty = () => {
    setQty(qty - 1);
    dispatch(addToCart(newProduct));
  };

  if (qty <= 0) {
    dispatch(removeFromCart(product.name));
  }

  const newProduct = {
    name: product.name,
    price: product.price,
    qty,
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{product.name}</Text>
      <Text style={Styles.price}>
        ${Number(product.price * qty).toFixed(2)}
      </Text>
      {checkout ? (
        <>
          <View style={Styles.qtyContainer}>
            <Text>Quantity</Text>
            <View style={Styles.qty}>
              <Button title="-" onPress={decrementQty} />
              <Text>{qty}</Text>
              <Button title="+" onPress={incrementQty} />
            </View>
          </View>

          <Button
            title="Remove from cart"
            onPress={() => dispatch(removeFromCart(product.name))}
          />
        </>
      ) : (
        <Button
          title="Add to cart"
          onPress={() => dispatch(addToCart(newProduct))}
        />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: space[3],
    margin: space[1],
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    fontSize: fontSizes.title,
  },
  price: {
    fontSize: fontSizes.body,
    padding: space[1],
  },
  qty: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    marginTop: space[2],
  },
});
