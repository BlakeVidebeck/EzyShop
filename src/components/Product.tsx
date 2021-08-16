import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import {
  removeFromCart,
  addToCart,
  updateCart,
} from "../features/cart/CartSlice";
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
  const Qty = product.qty ? product.qty : 1;
  const dispatch = useAppDispatch();

  const [qty, setQty] = useState(Qty);

  useEffect(() => {
    if (checkout && qty <= 0) {
      dispatch(removeFromCart(product.name));
    }
    if (checkout) {
      dispatch(updateCart(product, qty));
    }
  }, [qty]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{product.name}</Text>
      <Text style={Styles.price}>
        $
        {product.qty
          ? Number(product.price * product.qty).toFixed(2)
          : Number(product.price).toFixed(2)}
      </Text>
      {checkout ? (
        <>
          <View style={Styles.qtyContainer}>
            <Text>Quantity</Text>
            <View style={Styles.qty}>
              <Button title="-" onPress={() => setQty(qty - 1)} />
              <Text>{product.qty ? product.qty : qty}</Text>
              <Button title="+" onPress={() => setQty(qty + 1)} />
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
          onPress={() => dispatch(addToCart(product, qty))}
        />
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
    fontSize: fontSizes.body,
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
