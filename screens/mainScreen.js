import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";
export default function MainScreen() {
  let data = [
    {
      title: "BMW x3",
      category: "Automobili",
      img: "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png",
      description:
        "The BMW X3 has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1995 cc while the Petrol engine is 1998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the X3 has a mileage of 13.17 to 16.55 kmpl . The X3 is a 5 seater 4 cylinder car and has length of 4708mm, width of 2138mm and a wheelbase of 2864mm.",
      seller: "Dino",
    },
    {
      title: "Play Station 5",
      category: "Konzole",
      img: "https://d4n0y8dshd77z.cloudfront.net/listings/48316663/lg/img-1678472391-16f08c27fb3d.jpg",
      description: "",
      seller: "Didi",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar navigation={props.navigation} />
      </View>
      <View style={styles.list}>
        <FlatList
          accessible={true}
          data={[1, 2, 3, 5, 6, 7, 8, 9, 10]}
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
    marginBottom: 100,
  },
});
