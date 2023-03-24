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

const Register = (props) => {
  return (
    <View style={styles.main}>
      <Center w="100%">
        <AppBar navigation={props.navigation} />
        <Box safeArea p="2" w="90%" maxW="290" py="8">
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
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
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
export default Register;
