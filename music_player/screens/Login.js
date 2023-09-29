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
import React from "react";
import { Input, LoginScreenContainer } from "../styles/StyledLoginScreen";

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
            <Text>Login page</Text>
            <View style={{ marginTop: 20 }}>
              <Input placeholder="Email" />
              <Input placeholder="Password" style={{ marginTop: 15 }} />
            </View>
          </LoginScreenContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
