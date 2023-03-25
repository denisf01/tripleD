import { StyleSheet, Text, View } from "react-native";
import { FlatList, Button } from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";

import SearchBar from "../components/SearchBar";

import axios from "axios";
import { users_url } from "../constants/constants";
import { useContext, useEffect, useState } from "react";
import Context from "../context";

export default function MainScreen(props) {
  const ctx = useContext(Context);
  const [search, setSearch] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
        <SearchBar onChangesText={setSearch} />
      </View>
      <View style={styles.list}>
        <FlatList
          accessible={true}
          data={
            search.length > 0
              ? ctx.items.filter((item) => item.title.includes(search))
              : ctx.items
          }
          renderItem={({ item }) => (
            <MainItem
              navigation={props.navigation}
              title={item.title}
              category={item.category}
              description={item.description}
              user={item.user}
              userId={item.userId}
              photo={item.photo}
              id={item.id}
              price={item.price}
            />
          )}
        />
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
});
