import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreen/Home";
import Login from "../screens/loginScreen/Login";
import SignUpPage from "../screens/signUpScreen/SignUp";
import { useAuth } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const { user, setUser } = useAuth();

  const auth = FIREBASE_AUTH;

  const onAuthStateChange = (user) => {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
