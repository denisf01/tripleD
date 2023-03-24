import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

export default function App() {
  const url =
    "https://tripled-e3a40-default-rtdb.europe-west1.firebasedatabase.app/users.json";
  const pressHandler = () => {
    axios.post(url, {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"Click"} onPress={pressHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
