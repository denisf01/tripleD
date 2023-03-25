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
        "Bengaluru (also called Bangalore) is the center of India's" +
        "              high-tech industry. The city is also known for its parks and" +
        "              nightlife.",
      user: "User1",
      photo: "",
      id: (Math.random() + 1).toString(36).substring(7),
    },
    {
      title: "Title2",
      category: "Cat2",
      description:
        "Bengaluru (also called Bangalore) is the center of India's" +
        "              high-tech industry. The city is also known for its parks and" +
        "              nightlife.",
      user: "User2",
      photo: "",
      id: (Math.random() + 1).toString(36).substring(7),
    },
    {
      title: "Title3",
      category: "Cat3",
      description:
        "Bengaluru (also called Bangalore) is the ter of India's" +
        "              high-tech indtry. The city is also known for its parks and" +
        "              nightlife.",
      user: "User3",
      photo: "",
      id: (Math.random() + 1).toString(36).substring(7),
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
          data={data}
          renderItem={({ item }) => (
            <MainItem
              navigation={props.navigation}
              title={item.title}
              category={item.category}
              description={item.description}
              user={item.user}
              photo={item.photo}
              id={item.id}

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
