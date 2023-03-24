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
import { View } from "react-native";
import AppBar from "../components/AppBar";
import { StyleSheet } from "react-native";

const Login = (props) => {
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
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
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
});
export default Login;
