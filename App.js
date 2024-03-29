import MainScreen from "./screens/mainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainItemDetails from "./screens/MainItemDetails";
import { ContextProvider } from "./context";
import { CardTravel } from "@mui/icons-material";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import Profile from "./screens/Profile";
import InputItem from "./screens/InputItem";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "#87ceeb" } }}
          >
            <Stack.Screen
              name="main"
              component={MainScreen}
              options={{ title: "3D", headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="itemDetails"
              component={MainItemDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="pay"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="inputItem"
              component={InputItem}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ContextProvider>
  );
}
