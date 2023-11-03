import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/homeScreen/Home";
import Login from "./screens/loginScreen/Login";
import SignUpPage from "./screens/signUpScreen/SignUp";
import { UserProvider } from "./context/userContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={SignUpPage}
            options={{
              headerShown: true,
              headerTitle: "",
              headerBackTitle: "Back",
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
