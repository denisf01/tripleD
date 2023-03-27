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
  ScrollView,
} from "native-base";
import { signUp_url } from "../constants/constants";
import { useContext, useState } from "react";
import { ToastAndroid, View } from "react-native";
import AppBar from "../components/AppBar";
import { StyleSheet } from "react-native";
import axios from "axios";
import { users_url } from "../constants/constants";

import { validateEmail } from "../constants/functions";
import Context from "../context";

const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({
    userName: false,
    email: false,
    password: false,
    rePassword: false,
    fb: false,
    address: false,
  });
  const ctx = useContext(Context);

  const submitHandler = () => {
    if (userName.length <= 0) {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.userName = true;
        return newState;
      });
      return;
    } else {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.userName = false;
        return newState;
      });
    }
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
    if (rePassword !== password) {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.rePassword = true;
        return newState;
      });
      return;
    } else {
      setError((prevState) => {
        let newState = { ...prevState };
        newState.rePassword = false;
        return newState;
      });
      if (address.length <= 0) {
        setError((prevState) => {
          let newState = { ...prevState };
          newState.address = true;
          return newState;
        });
        return;
      } else {
        setError((prevState) => {
          let newState = { ...prevState };
          newState.address = false;
          return newState;
        });
      }
    }

    axios
      .post(signUp_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then(function (response) {
        setError(null);

        axios.put(users_url + `${response.data.localId}.json`, {
          userName: userName,
        });
        ctx.login(response.data.idToken, response.data.localId);
        props.navigation.navigate("main");
        ToastAndroid.show(
          "Registered successfully!",
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
      });
  };

  return (
    <View style={styles.main}>
      <Center w="100%">
        <AppBar navigation={props.navigation} />
        <ScrollView width={"100%"}>
          <Box safeArea p="4" w="100%" maxW="100%" py="8">
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              fontWeight="semibold"
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>User Name</FormControl.Label>
                <Input onChangeText={setUserName} />
                {!!error && !!error.userName && (
                  <Text style={styles.error}>Enter a valid user name!</Text>
                )}
                <FormControl.Label>Email</FormControl.Label>
                <Input onChangeText={setEmail} />
                {!!error && !!error.email && (
                  <Text style={styles.error}>Enter a valid email!</Text>
                )}
              </FormControl>
              <FormControl>
                <FormControl.Label>Address</FormControl.Label>
                <Input onChangeText={setAddress} />
                {!!error && !!error.address && (
                  <Text style={styles.error}>Enter a valid address!</Text>
                )}
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input onChangeText={setPassword} type="password" />
                {!!error && !!error.password && (
                  <Text style={styles.error}>
                    Password must be at least 6 characters!
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input onChangeText={setRePassword} type="password" />
                {!!error && !!error.rePassword && (
                  <Text style={styles.error}>Password does not match!</Text>
                )}
                {!!error && !!error.fb && (
                  <Text style={styles.error}>Email already exists!</Text>
                )}
              </FormControl>
              <Button onPress={submitHandler} mt="2" colorScheme="indigo">
                Sign up
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  Already have an account?{" "}
                </Text>
                <Pressable
                  onPress={() => {
                    props.navigation.navigate("login");
                  }}
                >
                  <Text style={styles.text}>Sign In</Text>
                </Pressable>
              </HStack>
            </VStack>
          </Box>
        </ScrollView>
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
export default Register;
