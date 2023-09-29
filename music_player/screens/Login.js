import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import {
  Input,
  LoginBtn,
  LoginScreenContainer,
} from "../styles/StyledLoginScreen";
import { Link } from "@react-navigation/native";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfc" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <LoginScreenContainer>
            <Image source={require("../assets/appLogo2.png")} />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#650d88" }}>
              Welcome
            </Text>
            <View style={{ marginTop: 40, gap: 20 }}>
              <Input placeholder="Email" />
              <Input placeholder="Password" style={{ marginTop: 15 }} />
            </View>
            <Text style={{ marginTop: 20, fontSize: 12 }}>
              Don't have an account?
              <Link
                to={{ screen: "Register", params: "register" }}
                style={{ color: "#e78200" }}
              >
                {" "}
                Register here
              </Link>
            </Text>
            <LoginBtn>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
                Login
              </Text>
            </LoginBtn>
          </LoginScreenContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
