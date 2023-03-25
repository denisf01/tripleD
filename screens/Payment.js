import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground, ToastAndroid,
} from "react-native";
import { Button, Box, NativeBaseProvider } from "native-base";

const image = {
  uri: "https://media.istockphoto.com/id/1203763961/photo/stacked-credit-cards.jpg?s=612x612&w=0&k=20&c=bEEGZwG120WKDClhmltyAtP0kPMzNir49P4JO3pcies=",
};

export default function Payment(props) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} blurRadius={3}>
          <Text style={styles.title}> Payment Method</Text>
          <Text style={styles.text}> * Card Number:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.text}>* Security Code:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.text}>* Cardholder Name:</Text>
          <TextInput style={styles.textInput} />
          <Button onPress={() => {
              ToastAndroid.show(
                  "Thank you for your order!",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM
              );
              props.navigation.navigate("main")
          }}>Submit</Button>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 3,
    padding: 10,
    color: "#ffffff",
    borderColor: "e0ffff",
  },
  text: {
    color: "#e0ffff",
    fontStyle: "bold",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    flex: 0.3,
    width: "80%",
    height: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    marginLeft: 25,
    color: "#f5f5dc",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
  },
});
