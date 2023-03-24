import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "native-base";
import AppBar from "../components/AppBar";
import { MainItem } from "../components/MainItem";
export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar />
      </View>
      <View>
        <FlatList
          accessible={true}
          data={[]}
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
});
