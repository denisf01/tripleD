import { StyleSheet, Text, View } from "react-native";
import { FlatList, Button, HStack, VStack } from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { users_url } from "../constants/constants";
import { useContext, useEffect, useState } from "react";
import Context from "../context";
import { CartItem } from "../components/CartItem";
import { ProfileItem } from "../components/ProfileItem";
export default function Profile(props) {
  const ctx = useContext(Context);
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
      </View>
      <View style={styles.list}>
        <FlatList

          accessible={true}
          data={ctx.items.filter((item) => {
            return item.userId === ctx.id;
          })}
          renderItem={({ item }) => (
            <ProfileItem
              description={item.description}
              title={item.title}
              price={item.price}
              id={item.id}
              photo={item.photo}
              category={item.category}
            />
          )}
        />
        <Button style={{}}>Add new</Button>
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
