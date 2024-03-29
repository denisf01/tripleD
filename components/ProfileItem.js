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
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import Context from "../context";

export const ProfileItem = (props) => {
  const ctx = useContext(Context);
  return (
    <Box alignItems="center" padding={2}>
      <Box
        maxW="80"
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
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              width={"100%"}
              height={"100%"}
              source={{ uri: props.photo[0] }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="#1994FFFF"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            More Info
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.category}
            </Text>
          </Stack>
          <Text fontWeight="400">{props.description}</Text>
          <Text fontWeight="600">Price: ${props.price}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center"></HStack>
          </HStack>
        </Stack>
        <HStack style={styles.buttons}>
          <IconButton
            onPress={() => {
              ctx.deleteProfileItem(props.id);
            }}
          >
            <AntDesign name="delete" size={20} color="black" />
          </IconButton>
          <IconButton
            onPress={() => {
              props.navigation.navigate("inputItem", {
                input: false,
                itemId: props.id,
              });
            }}
          >
            <AntDesign name="edit" size={20} color="black" />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginLeft: "35%",
  },
});
