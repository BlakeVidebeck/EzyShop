import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CheckoutScreen: React.FC = () => {
  return (
    <View style={Styles.background}>
      <Text>Welcome to the Checkout screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "blue",
  },
});
