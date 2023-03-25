import {
  StatusBar,
  Box,
  HStack,
  IconButton,
  Text,
  Icon,
  Menu,
  Divider,
  Image,
} from "native-base";
import { ToastAndroid } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Pressable } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HamburgerIcon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useContext } from "react";
import Context from "../context";

export default function AppBar(props) {
  const ctx = useContext(Context);
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
        <HStack alignItems="center" space={100}>
          <IconButton
            onPress={() => {
              props.navigation.navigate("main");
            }}
            icon={<Entypo name="home" size={24} color="white" />}
          />
          <Image
            alt={"Logo"}
            size={"sm"}
            source={require("../images/3dlogo.png")}
          />
        </HStack>
        <HStack>
          {ctx.isLoggedIn && (
            <IconButton
              onPress={() => {
                props.navigation.navigate("cart");
              }}
              icon={<AntDesign name="shoppingcart" size={24} color="white" />}
            />
          )}
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
            {!ctx.isLoggedIn ? (
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
                <Menu.Item
                  onPress={() => {
                    ctx.logout();
                    props.navigation.navigate("main");
                    ToastAndroid.show(
                      "Logged out!",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM
                    );
                  }}
                >
                  Logout
                </Menu.Item>
              </>
            )}
          </Menu>
        </HStack>
      </HStack>
    </>
  );
}
