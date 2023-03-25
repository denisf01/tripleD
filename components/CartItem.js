import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Center,
  AspectRatio,
  Image,
  Stack,
  Heading,
  Pressable,
  VStack,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import Context from "../context";

export const CartItem = (props) => {
  const ctx = useContext(Context);
  return (
    <Box
      maxW="100%"
      width={500}
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <HStack space={"50%"}>
        <Stack p="4" space={1}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Title
            </Heading>
          </Stack>
          <Text fontWeight="400">{props.title}</Text>
          <Stack space={1}>
            <Heading size="md" ml="-1">
              Price
            </Heading>
          </Stack>
          <Text fontWeight="400">${props.price}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center"></HStack>
          </HStack>
        </Stack>
        <IconButton style={styles.button}
          onPress={() => {
            ctx.deleteCartItem(props.id);
          }}
        >
          <AntDesign name="delete" size={20} color="black" />
        </IconButton>
      </HStack>
    </Box>
  );
};
const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",

  }
});
