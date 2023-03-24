import MainScreen from "./screens/mainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import Login from "./screens/Login";
import Register from "./screens/Register";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle : {backgroundColor: '#87ceeb'}}}>
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
          <Stack.Screen
            name="register"
            component={Register}
            options={{ title: "3D", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
