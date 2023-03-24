import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Menu,
  Divider,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Pressable } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HamburgerIcon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function AppBar(props) {
  let isLoggedIn = false;
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="#6495ed"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <IconButton
            onPress={() => {
              props.navigation.navigate("main");
            }}
            icon={<Entypo name="home" size={24} color="white" />}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <Menu
            w="190"
            trigger={(triggerProps) => {
              return (
                <IconButton
                  {...triggerProps}
                  icon={<AntDesign name="user" size={24} color="white" />}
                />
              );
            }}
          >
            {!isLoggedIn ? (
              <Menu.Item
                onPress={() => {
                  props.navigation.navigate("login", {});
                }}
              >
                Login/Registration
              </Menu.Item>
            ) : (
              <>
                <Menu.Item>Profile</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </>
            )}
          </Menu>
        </HStack>
      </HStack>
    </>
  );
}
