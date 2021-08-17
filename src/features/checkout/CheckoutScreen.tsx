import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native";

import { Subtotal } from "../../components/Subtotal";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fontSizes, space } from "../../infrastructure/styles";
import { reset } from "../cart/CartSlice";

export const CheckoutScreen: React.FC = ({ navigation }: any) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const confirmPayment = () => {
    dispatch(reset());
    navigation.navigate("Shop", {
      message: "Order Confirmed",
    });
  };

  return (
    <View style={Styles.background}>
      <SafeAreaView />
      <Subtotal cart={cart} />
      <View style={Styles.checkoutContainer}>
        <View style={Styles.section}>
          <Text style={Styles.title}>Delivery Address</Text>
          <Text style={Styles.details}>John Smith</Text>
          <Text>123 React Lane</Text>
        </View>

        <View style={Styles.section}>
          <Text style={Styles.title}>Payment Information</Text>
          <Text style={Styles.details}>Visa</Text>
          <Text>Card Number: 4242 4242 4242 4242</Text>
          <View style={Styles.card}>
            <Text>EXP: 03/23</Text>
            <Text>CVC: 567</Text>
          </View>
        </View>
        {/* if no cart items then dont show payment button */}
        {!!cart.length && (
          <Button title="Confirm Payment" onPress={confirmPayment} />
        )}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  checkoutContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: space[2],
  },
  title: {
    fontSize: fontSizes.title,
  },
  section: {
    display: "flex",
    alignItems: "center",
    margin: space[4],
  },
  details: {
    padding: space[1],
  },
  card: {
    display: "flex",
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
