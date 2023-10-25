import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Input, LoginBtn, LoginScreenContainer } from "../styles/LoginScreen";
import { Link } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import ButtonContent from "../utils/utility";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const { dispatch } = useUser();

  const handleSubmit = async () => {
    setIsLoading(true);

    let errorOccured = false;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        await AsyncStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
      errorOccured = true;

      if (error.code === "auth/invalid-login-credentials") {
        alert("Wrong credentials, please check your email and password!");
      }
    } finally {
      setIsLoading(false);
      if (!errorOccured) {
        navigation.navigate("Home");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfc" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <LoginScreenContainer>
            <Image
              source={require("../assets/logo-no-background.png")}
              resizeMode="contain"
              style={{ width: 200, height: 150 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#650d88" }}>
              Welcome
            </Text>
            <View style={{ marginTop: 40, gap: 20 }}>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={{ marginTop: 15 }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Link
              to={{ screen: "Register", params: "register" }}
              style={{ marginTop: 30, fontSize: 12, color: "#e78200" }}
            >
              Create a new account
            </Link>
            <LoginBtn onPress={handleSubmit}>
              {ButtonContent("Login", isLoading)}
            </LoginBtn>
          </LoginScreenContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
