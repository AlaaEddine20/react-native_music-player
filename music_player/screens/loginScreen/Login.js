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
import { Input, LoginBtn, LoginScreenContainer } from "./styles";
import { Link } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomCta from "../../components/CustomCta";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = FIREBASE_AUTH;

  const SignIn = async () => {
    if (email && password) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user) {
          console.log(user);
        }

        // if (user) {
        //   dispatch(loginSuccess(user));
        // } else {
        //   dispatch(loginFailure("Login failed: User not found"));
        // }
      } catch (error) {
        console.log(error);

        // if (error.code === "auth/invalid-login-credentials") {
        //   dispatch(
        //     loginFailure(
        //       "Wrong credentials, please check your email and password!"
        //     )
        //   );
        // } else {
        //   dispatch(loginFailure("An error occurred during login"));
        // }
      } finally {
        navigation.navigate("Home");
      }
    }
    //  else {
    //   dispatch(loginFailure("Please type in your email and password!"));
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, height: "100%" }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1, height: "100%" }}
        >
          <LoginScreenContainer>
            <Image
              source={require("../../assets/logo-no-background.png")}
              resizeMode="contain"
              style={{ width: 200, height: 150 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#363062" }}>
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
            <LoginBtn onPress={SignIn}>{CustomCta("Login", null)}</LoginBtn>
          </LoginScreenContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
