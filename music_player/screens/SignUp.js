import React, { useState } from "react";
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
import { RegisterAccountContainer, SignUpBtn } from "../styles/SignUp";
import { Input } from "../styles/LoginScreen";
import ButtonContent from "../utils/utility";
import { SignUp } from "../api/SignUp";

const SignUpPage = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <RegisterAccountContainer>
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
                placeholder="Choose a username"
                autoCapitalize="none"
                value={userName}
                onChangeText={setUserName}
              />
              <Input
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Choose a password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={{ marginTop: 15 }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <SignUpBtn
              onPress={() =>
                SignUp({ email, password, userName, setIsLoading, navigation })
              }
            >
              {ButtonContent("Sign up", isLoading)}
            </SignUpBtn>
          </RegisterAccountContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpPage;
