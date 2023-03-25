import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Menu,
  Divider,
  VStack,
  Heading,
  Input,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBar() {
  return (
    <VStack
      my="4"
      space={5}
      w="70%"
      maxW="300px"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <HStack w="80%" space={1} alignSelf="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          InputLeftElement={
            <AntDesign name="search1" size={24} color="black" />
          }
        />
        <IconButton>
          <Ionicons name="filter" size={24} color="black" />
        </IconButton>
      </HStack>
    </VStack>
  );
}
