import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";
import SearchBar from "../components/SearchBar";
export default function MainScreen(props) {
  let data = [
    {
      title: "Title1",
      category: "Cat1",
      description:
        "Bengaluru (also called Bangalore) is the center of India's\n" +
        "              high-tech industry. The city is also known for its parks and\n" +
        "              nightlife.",
      user: "User1",
      photo: "",
    },
    {
      title: "Title2",
      category: "Cat2",
      description:
        "Bengaluru (also called Bangalore) is the center of India's\n" +
        "              high-tech industry. The city is also known for its parks and\n" +
        "              nightlife.",
      user: "User2",
      photo: "",
    },
    {
      title: "Title3",
      category: "Cat3",
      description:
        "Bengaluru (also called Bangalore) is the center of India's\n" +
        "              high-tech industry. The city is also known for its parks and\n" +
        "              nightlife.",
      user: "User3",
      photo: "",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
        <SearchBar />
      </View>
      <View style={styles.list}>
        <FlatList
          accessible={true}
          data={[1, 23, 3]}
          renderItem={({ item }) => <MainItem />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  appbar: {
    alignItems: "center",
    width: "100%",
  },
  list: {
    marginBottom: 200,
  },
});
