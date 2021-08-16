import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text } from "react-native";

import { products } from "../../../mockItems";
import { Product, Item } from "../../components/Product";
import { fontColor, fontSizes, space } from "../../infrastructure/styles";

export const ShopScreen: React.FC = ({ route }: any) => {
  const [m, setM] = useState("");

  useEffect(() => {
    if (route.params) {
      setM(route.params.message);
    }
  }, [route]);

  if (m) {
    setTimeout(() => {
      setM("");
    }, 5000);
  }

  return (
    <View style={Styles.background}>
      <SafeAreaView />
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>EzyShop</Text>
      </View>
      {!!m && (
        <View style={Styles.messageContainer}>
          <Text style={Styles.message}>{m}</Text>
        </View>
      )}

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
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: space[3],
  },
  title: {
    fontSize: fontSizes.title,
  },
  messageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: space[3],
  },
  message: {
    fontSize: fontSizes.body,
    color: fontColor.success,
  },
});
