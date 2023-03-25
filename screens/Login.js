import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Menu,
  Divider,
  Link,
  Button,
  Input,
  Heading,
  Center,
  VStack,
  FormControl,
  Pressable,
} from "native-base";
import {ToastAndroid, View} from "react-native";
import AppBar from "../components/AppBar";
import { StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { validateEmail } from "../constants/functions";
import axios from "axios";
import { signIn_url, signUp_url, users_url } from "../constants/constants";
import Context from "../context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
    fb: false,
  });
  const ctx = useContext(Context);

  const submitHandler = () => {
    if (!validateEmail(email)) {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.email = true;
        return newState;
      });
      return;
    } else {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.email = false;
        return newState;
      });
    }
    if (password.length < 6) {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.password = true;
        return newState;
      });
      return;
    } else {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.password = false;
        return newState;
      });
    }

    axios
      .post(signIn_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then(function (response) {
        setError(null);

        ctx.login(response.data.idToken, response.data.localId);
        props.navigation.navigate("main")
        ToastAndroid.show(
            "Logged in successfully!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
      })
      .catch(function (error) {
        setError((prevState) => {
          let newState = { ...prevState };
          newState.fb = true;
          return newState;
        });
        console.log(error);
      });
  };

  return (
    <View style={styles.main}>
      <Center w="100%">
        <AppBar navigation={props.navigation} />
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input onChangeText={setEmail} />
              {!!error && !!error.email && (
                <Text style={styles.error}>Enter a valid email!</Text>
              )}
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input onChangeText={setPassword} type="password" />
              {!!error && !!error.password && (
                <Text style={styles.error}>Enter a valid email!</Text>
              )}
              {!!error && !!error.fb && (
                <Text style={styles.error}>Invalid Email or Password!</Text>
              )}
            </FormControl>
            <Button onPress={submitHandler} mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate("register");
                }}
              >
                <Text style={styles.text}>Sign Up</Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    textDecorationLine: "underline",
    color: "blue",
  },
  error: {
    color: "red",
  },
});
export default Login;
