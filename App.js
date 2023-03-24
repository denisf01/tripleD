import MainScreen from "./screens/mainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import Login from "./screens/Login";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={MainScreen}
            options={{ title: "3D", headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ title: "3D", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
