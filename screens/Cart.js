import { StyleSheet, Text, View } from "react-native";
import {FlatList, Button, HStack, VStack} from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { users_url } from "../constants/constants";
import { useContext, useEffect, useState } from "react";
import Context from "../context";
import { CartItem } from "../components/CartItem";
export default function Cart(props) {
  const ctx = useContext(Context);
  const [search, setSearch] = useState("");
  let total = 0;
  for (let i of ctx.user.cart) {
    total += i.price;
  }
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
      </View>
      <View style={styles.list}>
        <FlatList
          accessible={true}
          data={ctx.user.cart}
          renderItem={({ item }) => (
            <CartItem title={item.title} price={item.price} id={item.id} />
          )}
        />
        <VStack space={4}>
          <Text style={styles.text}>Total amount: ${total.toFixed(2)}</Text>
          <Button onPress={() => {
            props.navigation.navigate("pay")
          }}>Order</Button>
        </VStack>
      </View>
    </View>
  );
}
//test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%", // test
  },
  appbar: {
    alignItems: "center",
    width: "100%",
  },
  list: {
    marginBottom: 200,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
